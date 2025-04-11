'use client';

import { NoticiasService } from '@/services/noticias.service';
import { useQuery } from '@tanstack/react-query';
import Badge from '@/ui/components/atoms/badge';
import TertiaryButton from '@/ui/components/atoms/buttons/tertiary-button';
import CalendarIcon from '@/ui/components/atoms/icons/calendar-icon';
import Title from '@/ui/components/atoms/title';
import RecentNewsCard from '@/ui/components/molecules/recent-news-card';
import Layout from '@/ui/components/organisms/shared/layout';
// import newsDataToHome from '@/ui/mocks/news-data-to-home';
import React from 'react';
import BlockRendererClient from '@/ui/components/molecules/block-renderer-client';
import { formatFullDate } from '@/ui/helpers/format-full-date';
import SkeletonBlog from '@/ui/components/atoms/skeleton/blog';
import { Noticias } from '@/interfaces/services/noticias.interface';

export default function NewsContent({ noticia }: { noticia: string }) {

	// como lleva la misma queryKey en el prefetch, no se vuelve a hacer fetch
	const { data: newsData, isLoading: isNewsLoading, error: newsError } = useQuery({
	queryKey: ['news', noticia],
	queryFn: () => NoticiasService.getEntryBySlug(noticia),
	});

	const { data: recentNews = [], isLoading: isRecentNewsLoading, error: recentNewsError } = useQuery({
		queryKey: ['recent-news'],
		queryFn: () => NoticiasService.getRecentEntries(noticia),
	});

	if (!noticia) {
		return (
			<Layout>
				<div className="px-4 lg:px-[104px] bg-white pb-[80px] md:pb-[104px]">
					<p>Oops! No se encontró la noticia solicitado.</p>
				</div>
			</Layout>
		);
	}
	if (isNewsLoading || isRecentNewsLoading) {
		return (
			<SkeletonBlog />
		);
	}
	if (newsError) {
		return (
			<Layout>
				<div className="px-4 lg:px-[104px] bg-white pb-[80px] md:pb-[104px]">
					<p>Error cargando los datos de la noticia.</p>
				</div>
			</Layout>
		);
	}
	if (recentNewsError) {
		return (
			<Layout>
				<div className="px-4 lg:px-[104px] bg-white pb-[80px] md:pb-[104px]">
					<p>Error cargando las noticias recientes.</p>
				</div>
			</Layout>
		);
	}
	if (!newsData || newsData.length === 0) {
		return (
			<Layout>
				<div className="px-4 lg:px-[104px] bg-white pb-[80px] md:pb-[104px]">
					<p>Noticia no encontrada.</p>
				</div>
			</Layout>
		);
	}

	const newsItem = newsData[0];

	const breadcrumbItems = [
		{
			title: 'Inicio',
			path: '/',
		},
		{
			title: 'Noticias',
			path: '/noticias',
		},
		{
			title: newsItem.titulo,
			path: `/noticias/${noticia}`,
		},
	];

	return (
		<Layout
			// portadaImage="https://ccsm.unmsm.edu.pe/ccsm/noticias_banner_91753aa53c.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<div className="px-4 lg:px-[104px] bg-white pb-[104px]">
				<div className="container">
					<div className="max-w-[814px] mx-auto mb-[80px]">
						<div className="flex justify-center">
							<Badge className="max-md:mb-[18px]" label="Ballet San Marcos" size="small" />
						</div>
						<Title className="text-center !mb-1">
							{newsItem.titulo}
						</Title>
						<div className="flex flex-row items-center justify-center gap-2 mb-14">
							<CalendarIcon
								className="shrink-0"
								ariaLabel="Fecha"
								color="dark"
							/>
							<time
								dateTime={newsItem.fechaPublicacion}
								className="text-dark-blue-2 font-medium text-sm leading-[21px]"
							>
								{formatFullDate(newsItem.fechaPublicacion)}
							</time>
						</div>
						<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 mb-14"></div>
						<BlockRendererClient content={newsItem.descripcion} />
					</div>
					{
						(recentNews?.length > 0 && recentNews) &&
						<div className="mt-20 md:mt-[110px]">
							<div className="flex justify-between items-center mb-5 md:mb-[30px]">
								<h2 className="text-2xl font-bold leading-[36px] text-dark-blue-2">
									Noticias recientes
								</h2>
								<TertiaryButton
									label="Ver todos"
									theme="light"
									type="internal-link"
									href="/agenda-cultural"
								/>
							</div>
							<div className="grid md:grid-cols-3 gap-y-4 gap-x-6">
								{recentNews
									.slice(-3)
									.map((event: Noticias, index: number) => (
										<RecentNewsCard
											key={index}
											slug={event.slug}
											titulo={event.titulo}
											fechaPublicacion={event.fechaPublicacion}
										/>
									))}
							</div>
						</div>
					}
				</div>
			</div>
		</Layout>
	);
}
