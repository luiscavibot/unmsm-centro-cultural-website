'use client';

import Title from '@/ui/components/atoms/title';
import NewsCard from '@/ui/components/molecules/news-card';
import React, { useEffect, useRef, useState } from 'react';
import Pagination from '@/ui/components/molecules/pagination';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import useSplideControls from '@/ui/hooks/useSplideControls';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import FeaturedNewsCard from '@/ui/components/molecules/featured-news-card';
import Layout from '@/ui/components/organisms/shared/layout';
import NoticiaFilter from '@/ui/components/organisms/noticias/noticias-filter';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { NoticiasService } from '@/services/noticias.service';
import Skeleton from '@/ui/components/atoms/skeleton';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useAppForm } from '@/lib/form/form';
import { noticiasFormOpts } from '@/ui/components/organisms/noticias/form/form-opts';
import { useStore } from '@tanstack/react-form';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const pageSize = 5;

const breadcrumbItems = [
	{
		title: 'Inicio',
		path: '/',
	},
	{
		title: 'Noticias',
		path: '/noticias',
	},
];

export default function NoticiasPage() {
	const isFirstRender = useRef(true);
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const initialSearch = searchParams.get('search') ?? '';
	const initialDependencia =
		searchParams.get('dependencia')?.split(',') ?? [];
	const pageFromQuery = Number(searchParams.get('page')) || 1;

	const form = useAppForm({
		...noticiasFormOpts,
		defaultValues: {
			...noticiasFormOpts.defaultValues,
			search: initialSearch,
			dependencia: initialDependencia,
		},
		onSubmit: async () => {},
	});

	const dependencia = useStore(form.store, (s) => s.values.dependencia);
	const search = useStore(form.store, (s) => s.values.search);

	const [currentPage, setCurrentPage] = useState(pageFromQuery);

	const { data, error, isFetching, isLoading } = useQuery({
		queryKey: ['list-news', currentPage, dependencia, search],
		queryFn: () =>
			NoticiasService.getListEntries({
				page: currentPage,
				pageSize,
				dependencia,
				search,
			}),
		placeholderData: keepPreviousData,
		refetchOnWindowFocus: false,
	});

	const newsData = data?.data || [];
	const newsDataQty = data?.meta?.pagination?.total || 0;
	const skeletonArray: string[] = new Array(pageSize).fill('');

	const resultados = () => {
		if (error) return '';
		if (isLoading) return 'Calculando...';
		if (newsDataQty === 0 && !isFetching) return 'No hay resultados';
		if (newsDataQty === 1) return '1 resultado';
		if (newsDataQty > 1) return `${newsDataQty} resultados`;
	};

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		setCurrentPage(1);
		const params = new URLSearchParams();
		if (search) params.set('search', search);
		if (dependencia.length)
			params.set('dependencia', dependencia.join(','));
		params.set('page', '1');

		router.replace(`${pathname}?${params.toString()}`, { scroll: false });
	}, [search, dependencia, pathname, router]);

	const splideRef = useRef<ExtendedSplideType>(null);
	const splideOptions = {
		type: 'slide',
		width: '100%',
		perPage: 1,
		arrows: false,
		pagination: false,
		gap: '0px',
		perMove: 1,
	};
	const {
		handlePrev,
		handleNext,
		// handleMove,
		isPrevDisabled,
		isNextDisabled,
	} = useSplideControls(splideRef);

	// const [modalOpen, setModalOpen] = useState(false);
	// const close = () => setModalOpen(false);
	// const open = () => setModalOpen(true);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);

		const params = new URLSearchParams();
		if (search) params.set('search', search);
		if (dependencia.length)
			params.set('dependencia', dependencia.join(','));
		params.set('page', String(page));

		router.push(`${pathname}?${params.toString()}`, { scroll: false });
	};

	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/noticias_banner_91753aa53c.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white pb-6">
					<div className="container">
						<div className="max-w-[600px] mx-auto mb-5 md:mb-[80px]">
							<Title className="text-center">Noticias</Title>
							<div className="md:hidden">
								<p>
									Mantente informado sobre todas las novedades
									del Centro Cultural San Marcos. En nuestra
									sección de noticias, compartimos
									actualizaciones sobre exposiciones, eventos,
									talleres y logros que reflejan nuestro
									compromiso con el arte y la cultura.
									Descubre lo más reciente en actividades y
									proyectos que conectan a nuestra comunidad y
									celebran la creatividad y el conocimiento.
								</p>
							</div>
							<div className="max-md:hidden relative">
								{isFetching ? (
									<div className="h-[26.188rem] rounded-2xl overflow-hidden">
										<Skeleton />
									</div>
								) : (
									<>
										<Splide
											// onMoved={handleMove}
											ref={splideRef}
											hasTrack={false}
											options={splideOptions}
										>
											<SplideTrack>
												{newsData.map(
													(newsItem, index) => (
														<SplideSlide
															key={index}
														>
															<FeaturedNewsCard
																url={
																	newsItem
																		.imagen
																		.url
																}
																fechaPublicacion={
																	newsItem.fechaPublicacion
																}
																titulo={
																	newsItem.titulo
																}
																resumen={
																	newsItem.resumen
																}
																slug={
																	newsItem.slug
																}
															/>
														</SplideSlide>
													)
												)}
											</SplideTrack>
										</Splide>
										<div className="absolute top-1/2 -translate-y-1/2 -inset-x-[20px] pointer-events-none">
											<div className="container flex justify-between gap-x-2 relative">
												<ArrowButton
													className="pointer-events-auto"
													theme="dark"
													onClick={handlePrev}
													direction="left"
													disabled={isPrevDisabled}
												/>
												<ArrowButton
													className="pointer-events-auto"
													theme="dark"
													onClick={handleNext}
													direction="right"
													disabled={isNextDisabled}
												/>
											</div>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[56px] pb-[104px]">
					<div className="container">
						<div className="flex flex-col md:flex-row justify-between gap-x-8 xl:gap-x-[105px]">
							<div>
								{/* <div className="mb-8 max-md:flex max-md:flex-row max-md:gap-x-4">
									<Search
										className="grow"
										placeholder="¿Qué estás buscando?"
										onSearch={handleSearch}
									/>
									<div className="md:hidden">
										<PrimaryButton
											className="w-14 h-14"
											icon={<FilterIcon />}
											theme="light"
											type="on-click"
											onClick={() =>
												modalOpen ? close() : open()
											}
										/>
										<AnimatePresence
											initial={false}
											mode="wait"
											onExitComplete={() => null}
										>
											{modalOpen && (
												<Modal handleClose={close}>
													<NoticiaFilter
														handleClose={close}
													/>
												</Modal>
											)}
										</AnimatePresence>
									</div>
								</div>
								<div className="max-md:hidden">
									<NoticiaFilter />
								</div> */}
								<NoticiaFilter form={form} />
							</div>
							<div className="w-full">
								<span className="font-medium leading-[24px] text-left md:text-right flex items-end justify-start md:justify-end w-full mb-6 md:mb-8 md:h-[56px]">
									{resultados()}
								</span>
								{error && (
									<p className="text-center">
										Error al cargar los datos de la agenda o
										evento no encontrado.
									</p>
								)}
								<ul className="flex flex-col space-y-4 md:space-y-8">
									{isFetching
										? skeletonArray.map((_, index) => (
												<div
													key={index}
													className="h-[14rem] rounded-2xl overflow-hidden"
												>
													<Skeleton />
												</div>
										  ))
										: newsData.map((newsItem, index) => (
												<li
													className="flex"
													key={index}
												>
													<NewsCard
														url={
															newsItem.imagen
																.formats.small
																.url
														}
														fechaPublicacion={
															newsItem.fechaPublicacion
														}
														titulo={newsItem.titulo}
														resumen={
															newsItem.resumen
														}
														slug={newsItem.slug}
													/>
												</li>
										  ))}
								</ul>
								<Pagination
									className="pagination-bar"
									currentPage={currentPage}
									totalCount={newsDataQty}
									pageSize={pageSize}
									onPageChange={handlePageChange}
								/>
							</div>
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
}
