'use client';

import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
import ClockIcon from '@/infrastructure/ui/components/atoms/icons/clock-icon';
import OutlinePlaceIcon from '@/infrastructure/ui/components/atoms/icons/outilne-place-icon';
import OutlineEmailIcon from '@/infrastructure/ui/components/atoms/icons/outline-email-icon';
import FacebookIcon from '@/infrastructure/ui/components/atoms/icons/social/facebook-icon';
import InstagramIcon from '@/infrastructure/ui/components/atoms/icons/social/instagram-icon';
import Tab from '@/infrastructure/ui/components/atoms/tab';
import Title from '@/infrastructure/ui/components/atoms/title';
import Layout from '@/infrastructure/ui/components/organisms/shared/layout';
import Link from 'next/link';
import React, { Suspense, useState } from 'react';

const tabs = {
	elencos: React.lazy(
		() =>
			import('@/infrastructure/ui/components/organisms/folklore/elencos')
	),
	publicaciones: React.lazy(
		() =>
			import(
				'@/infrastructure/ui/components/organisms/folklore/publicaciones'
			)
	),
	'escuela-para-formadores': React.lazy(
		() =>
			import(
				'@/infrastructure/ui/components/organisms/folklore/escuela-para-formadores'
			)
	),
} as const;

type TabKeys = keyof typeof tabs;

const breadcrumbItems = [
	{
		title: 'Inicio',
		path: '/',
	},
	{
		title: 'Direcciones artísticas',
		path: '',
	},
	{
		title: 'Centro Universitario de Folklore',
		path: '/direcciones-artisticas/folklore',
	},
];

export default function Folklore() {
	const [currentTab, setCurrentTab] = useState<TabKeys>('elencos');

	const handleClick = (tab: TabKeys) => {
		setCurrentTab(tab);
	};

	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/folklore_ccsm_portada_8a23d82d7d.webp"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white">
					<div className="container">
						<div className="max-w-[814px] mx-auto pb-14">
							<Title className="text-center max-w-[550px] mx-auto">
								Centro Universitario de Folklore
							</Title>
							<div className="leading-[24px] text-dark-blue-2 mb-4">
								<p className="mb-5">
									El Centro Universitario de Folklore (CUF) es una dependencia del Centro Cultural de la Universidad Nacional Mayor de San Marcos dedicada al trabajo exclusivo en el tema de las expresiones culturales de nuestro país en materia de la música y danza tradicional.
								</p>
								<p className="mb-5">
									El CUF este 2025, cuenta ya 55 años de arduo trabajo por la diversidad cultural del país. Este tiempo ha servido para institucionalizar la música y danza folklórica en la vida universitaria y ser referente a nivel nacional, con este trabajo se rescata elementos fundamentales de nuestra cultura andina aquí contenidos: la reciprocidad, la colectividad, el ayni, entre otros. Estos valores se desarrollan en experiencias cotidianas entre nuestros integrantes sanmarquinos, quienes los proyectan a la comunidad en general.
								</p>
								<p className="mb-5">
									El Centro Universitario de Folklore tiene constituida una Escuela de Capacitación Docente en Folklore y siete elencos artísticos que desarrollan espectáculos de música y danza de alto nivel, con los que se proyecta a la comunidad y a la vez aporta al estudio, promoción y difusión de las costumbres populares de nuestro país.
								</p>
							</div>
							<Link
								className="link text-dark-red font-medium"
								href="/direcciones-artisticas/folklore/historia"
							>
								Conoce la historia
							</Link>
							<div className="max-w-[639px] mx-auto mt-14">
								<div className="leading-[24px] space-y-1 text-dark-blue-2">
									<div className="flex p-1 gap-2 items-start">
										<OutlinePlaceIcon
											className="shrink-0 mt-[2px]"
											ariaLabel="Lugar"
											color="dark"
										/>
										<div>
											<p className="font-bold">Lugar</p>
											<p className="font-medium">
												Centro cultural UNMSM
												<br />
												Av. Nicolás de Piérola 1222.
												Parque Universitario. Centro
												Histórico de Lima
											</p>
										</div>
									</div>
									<div className="flex p-1 gap-2 items-start">
										<ClockIcon
											className="shrink-0 mt-[2px]"
											ariaLabel="Horario"
											color="dark"
										/>
										<div>
											<p className="font-bold">Horario de atención en oficina</p>
											<p className="font-medium">
												Lunes a viernes de 8 a.m. a 1 p.m. y de 2 a 7 p.m.
												<br />
												Sábados de 9:30 a.m. a 1 p.m.
											</p>
										</div>
									</div>
									<div className="flex p-1 gap-2 items-start">
										<OutlineEmailIcon
											className="shrink-0 mt-[2px]"
											ariaLabel="Contacto"
											color="dark"
										/>
										<div>
											<p className="font-bold">
												Contacto
											</p>
											<p className="font-medium">
												folklore.ccsm@unmsm.edu.pe
											</p>
										</div>
									</div>
								</div>
								<div className="flex flex-row items-center gap-2 mt-5 ml-7">
									<a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href="https://www.instagram.com/folklore.unmsm/"
										rel="noreferrer noopener"
										target="_blank"
									>
										<InstagramIcon />
									</a>
									<a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href="https://www.facebook.com/folklore.unmsm/?locale=es_LA"
										rel="noreferrer noopener"
										target="_blank"
									>
										<FacebookIcon />
									</a>
									{/* <a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href="https://www.tiktok.com/@museoarte.unmsm"
										rel="noreferrer noopener"
										target="_blank"
									>
										<TiktokIcon />
									</a> */}
									{/* <a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href=""
										rel="noreferrer noopener"
										target="_blank"
									>
										<YoutubeIcon />
									</a> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-[104px] gap-5 bg-green text-white py-8 lg:py-[45px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-contactanos.svg')] bg-no-repeat bg-[-123px_10px]">
					<div className="container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
						<div className="flex flex-col lg:flex-row lg:items-center justify-center gap-2 lg:gap-8">
							<h2 className="text-[24px] lg:text-[32px] font-semibold leading-[normal] lg:max-w-[416px]">
								Explora y aprende en el Centro Cultural San
								Marcos
							</h2>
							<p className="max-lg:text-sm font-normal leading-[24px] lg:max-w-[464px]">
								Descubre un mundo de conocimiento, arte y
								cultura con nuestras actividades exclusivas
								¡Únete y sé parte de nuestra comunidad!
							</p>
						</div>
						<div className="flex flex-col gap-y-4">
							<SecondaryButton
								type="internal-link"
								href="/cursos-y-talleres"
								theme="dark"
								label="Cursos y talleres"
							/>
							<SecondaryButton
								type="internal-link"
								href="/agenda-cultural"
								theme="dark"
								label="Eventos"
							/>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-[104px] bg-white pt-[56px] pb-[24px]">
					<div className="container">
						<div className="flex gap-x-4">
							<Tab
								label="Elencos"
								selected={currentTab === 'elencos'}
								onClick={() => {
									handleClick('elencos');
								}}
							/>
							<Tab
								label="Publicaciones"
								selected={currentTab === 'publicaciones'}
								onClick={() => {
									handleClick('publicaciones');
								}}
							/>
							<Tab
								label="Escuela para formadores"
								selected={
									currentTab === 'escuela-para-formadores'
								}
								onClick={() => {
									handleClick('escuela-para-formadores');
								}}
							/>
						</div>
					</div>
				</div>
				<div>
					<Suspense
						fallback={
							<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[24px]">
								<div className="container">
									<p className="max-w-[641px] leading-[24px] text-dark-blue-2">
										Cargando...
									</p>
								</div>
							</div>
						}
					>
						{React.createElement(tabs[currentTab])}
					</Suspense>
				</div>
			</>
		</Layout>
	);
}
