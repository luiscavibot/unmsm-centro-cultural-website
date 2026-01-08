'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useStore } from '@tanstack/react-form';

import { useAppForm } from '@/lib/form/form';
import { CursosYTalleresService } from '@/services/cursos-y-talleres.service';
import { cursosYtalleresFormOpts } from '@/ui/components/organisms/cursos-y-talleres/form/form-opts';

import Layout from '@/ui/components/organisms/shared/layout';
import CursosYTalleresFilter from '@/ui/components/organisms/cursos-y-talleres/cursos-y-talleres-filter';

import CoursesAndWorkshopsCard from '@/ui/components/molecules/courses-and-workshops-card';
import Pagination from '@/ui/components/molecules/pagination';

import Skeleton from '@/ui/components/atoms/skeleton';
import Title from '@/ui/components/atoms/title';

const pageSize = 5;
const breadcrumbItems = [
	{ title: 'Inicio', path: '/' },
	{ title: 'Cursos y talleres', path: '/cursos-y-talleres' },
];

export default function CursosYTalleresPage() {
	const isFirstRender = useRef(true);
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const initialSearch = searchParams.get('search') ?? '';
	const initialTipo = searchParams.get('tipo')?.split(',') ?? [];
	const initialDependencia =
		searchParams.get('dependencia')?.split(',') ?? [];
	const initialModalidad = searchParams.get('modalidad')?.split(',') ?? [];
	const pageFromQuery = Number(searchParams.get('page')) || 1;

	const form = useAppForm({
		...cursosYtalleresFormOpts,
		defaultValues: {
			...cursosYtalleresFormOpts.defaultValues,
			search: initialSearch,
			tipo: initialTipo,
			dependencia: initialDependencia,
			modalidad: initialModalidad,
		},
		onSubmit: async () => {},
	});

	const dependencia = useStore(form.store, (s) => s.values.dependencia);
	const modalidad = useStore(form.store, (s) => s.values.modalidad);
	const tipo = useStore(form.store, (s) => s.values.tipo);
	const search = useStore(form.store, (s) => s.values.search);

	const [currentPage, setCurrentPage] = useState(pageFromQuery);

	const { data, error, isFetching, isLoading } = useQuery({
		queryKey: [
			'list-courses-and-workshops',
			currentPage,
			dependencia,
			modalidad,
			tipo,
			search,
		],
		queryFn: () =>
			CursosYTalleresService.getListEntries({
				page: currentPage,
				pageSize,
				tipo,
				dependencia,
				modalidad,
				search,
			}),
		placeholderData: keepPreviousData,
		refetchOnWindowFocus: false,
	});

	const coursesData = data?.data || [];
	const coursesDataQty = data?.meta?.pagination?.total || 0;
	const skeletonArray: string[] = new Array(pageSize).fill('');

	const resultados = () => {
		if (error) return '';
		if (isLoading) return 'Calculando...';
		if (coursesDataQty === 0 && !isFetching) return 'No hay resultados';
		if (coursesDataQty === 1) return '1 resultado';
		if (coursesDataQty > 1) return `${coursesDataQty} resultados`;
	};

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		setCurrentPage(1);
		const params = new URLSearchParams();
		if (search) params.set('search', search);
		if (tipo.length) params.set('tipo', tipo.join(','));
		if (dependencia.length)
			params.set('dependencia', dependencia.join(','));
		if (modalidad.length) params.set('modalidad', modalidad.join(','));
		params.set('page', '1');

		router.replace(`${pathname}?${params.toString()}`, { scroll: false });
	}, [search, tipo, dependencia, modalidad, pathname, router]);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);

		const params = new URLSearchParams();
		if (search) params.set('search', search);
		if (tipo.length) params.set('tipo', tipo.join(','));
		if (dependencia.length)
			params.set('dependencia', dependencia.join(','));
		if (modalidad.length) params.set('modalidad', modalidad.join(','));
		params.set('page', String(page));

		router.push(`${pathname}?${params.toString()}`, { scroll: false });
	};

	return (
		<Layout
			portadaImage="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/ccsm/cursos_y_talleres_portada_4a6e473ea3.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white pb-14">
					<div className="container">
						<div className="max-w-[814px] mx-auto">
							<Title className="text-center">
								Cursos y talleres
							</Title>
							<div className="leading-[24px] text-dark-blue-2">
								<p>
									En el Centro Cultural de San Marcos te
									ofrecemos cursos y talleres para niños,
									jóvenes y adultos. Tienes a tu disposición
									una variada lista de opciones: talleres
									musicales, de danza, artes plásticas, cursos
									especializados y mucho más. Te invitamos a
									revisar a continuación las opciones de cada
									una de las diez direcciones que conforman el
									Centro Cultural de la Universidad Decana de
									América.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[56px] pb-20 md:pb-[104px]">
					<div className="container">
						<div className="flex flex-col md:flex-row justify-between gap-x-8 xl:gap-x-[105px]">
							<div className="max-md:mb-6">
								<CursosYTalleresFilter form={form} />
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
										? skeletonArray.map((_, idx) => (
												<div
													key={idx}
													className="h-[19.3125rem] md:h-[21.625rem] rounded-2xl overflow-hidden"
												>
													<Skeleton />
												</div>
										  ))
										: coursesData.map((course, idx) => (
												<li className="flex" key={idx}>
													<CoursesAndWorkshopsCard
														slug={course.slug}
														tipo={course.tipo}
														titulo={course.titulo}
														resumen={course.resumen}
														dependencia={
															course.dependencia
														}
														url={
															course.imagen?.formats?.large?.url ||
															course.imagen?.url ||
															''
														}
													/>
												</li>
										  ))}
								</ul>
								<Pagination
									className="pagination-bar"
									currentPage={currentPage}
									totalCount={coursesDataQty}
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
