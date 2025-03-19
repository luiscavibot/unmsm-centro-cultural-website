'use client';

import SecondaryButton from '@/ui/components/atoms/buttons/secondary-button';
import ClockIcon from '@/ui/components/atoms/icons/clock-icon';
import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon';
import OutlineEmailIcon from '@/ui/components/atoms/icons/outline-email-icon';
import FacebookIcon from '@/ui/components/atoms/icons/social/facebook-icon';
import InstagramIcon from '@/ui/components/atoms/icons/social/instagram-icon';
import Tab from '@/ui/components/atoms/tab';
import Title from '@/ui/components/atoms/title';
import Layout from '@/ui/components/organisms/shared/layout';
import Link from 'next/link';
import React, { Suspense, useState } from 'react';

const tabs = {
	compania: React.lazy(
		() => import('@/ui/components/organisms/ballet/compania')
	),
	escuela: React.lazy(
		() => import('@/ui/components/organisms/ballet/escuela')
	),
	investigacion: React.lazy(
		() => import('@/ui/components/organisms/ballet/investigacion')
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
		title: 'Ballet San Marcos',
		path: '/direcciones-artisticas/ballet',
	},
];

export default function Ballet() {
	const [currentTab, setCurrentTab] = useState<TabKeys>('compania');

	const handleClick = (tab: TabKeys) => {
		setCurrentTab(tab);
	};

	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/ballet_ccsm_portada_0f01f64ed1.webp"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white">
					<div className="container">
						<div className="max-w-[814px] mx-auto pb-14">
							<Title className="text-center">
								Ballet San Marcos
							</Title>
							<div className="leading-[24px] text-dark-blue-2 mb-4">
								<p className="mb-5">
									El Ballet San Marcos es la primera compañía
									profesional de danza establecida en el Perú
									y en la Universidad Nacional Mayor de San
									Marcos. Fundado en 1964 bajo la rectoría del
									Dr. Luis Alberto Sánchez, su creación se
									formalizó mediante la Resolución Rectoral
									22024, marcando un hito en la historia de la
									danza en el país.
								</p>
								<p className="mb-5">
									Desde sus inicios, la compañía ha promovido
									la excelencia artística con una sólida labor
									de investigación y renovación del patrimonio
									dancístico peruano. Inicialmente orientado
									al ballet clásico bajo la dirección del
									bailarín francés Roger Fenonjois, estrella
									de la Ópera de París, en 1972 la dirección
									pasó a la maestra Vera Stastny, formada en
									el Royal Ballet de Londres, quien incorporó
									la danza contemporánea como parte del
									entrenamiento de la compañía y el currículo
									de la escuela.
								</p>
								<p className="mb-5">
									Actualmente, el Ballet San Marcos cuenta con
									una Coordinación General a cargo de Verónika
									Rodríguez Trujillo, quien ha impulsado una
									nueva etapa en la compañía, enfocada en
									ampliar el desarrollo de la danza
									contemporánea en el país. Desde esta
									gestión, se han generado espacios de
									apertura para más agrupaciones de danza
									contemporánea, promoviendo el intercambio y
									la colaboración artística. Asimismo, se ha
									fortalecido el trabajo en alianzas
									estratégicas con instituciones dedicadas a
									la danza contemporánea, consolidando al
									Ballet San Marcos como un referente en el
									sector.
								</p>
								<p className="mb-5">
									El Ballet San Marcos está conformado por una
									compañía de danza contemporánea, un grupo de
									investigación y una escuela de danza. En
									esta etapa, la compañía ha logrado una mayor
									proyección a nivel nacional e internacional,
									con presentaciones en diversos escenarios
									que amplían su alcance y fortalecen su
									impacto en la escena dancística. Por su
									parte, la escuela ha consolidado su programa
									de formación y ha potenciado las
									oportunidades de sus estudiantes,
									brindándoles mayor acceso a clases maestras
									y presentaciones en escenarios, lo que
									contribuye significativamente a su formación
									y desarrollo en la danza.
								</p>
								<p>
									Con más de 60 años de trayectoria, el Ballet
									San Marcos reafirma su compromiso con la
									innovación, la formación y la difusión de la
									danza, consolidándose como un espacio clave
									para el crecimiento de la danza
									contemporánea en el Perú y en el ámbito
									internacional.
								</p>
							</div>
							<Link
								className="link text-dark-red font-medium"
								href="/direcciones-artisticas/ballet/historia"
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
											<p className="font-bold">
												Horario de atención en oficina
											</p>
											<p className="font-medium">
												Lunes a viernes de 9 a.m. a 1
												p.m. y de 2 a 5 p.m.
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
												ballet.ccsm@unmsm.edu.pe
											</p>
										</div>
									</div>
								</div>
								<div className="flex flex-row items-center gap-2 mt-5 ml-7">
									<a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href="https://www.instagram.com/ballet_unmsm/"
										rel="noreferrer noopener"
										target="_blank"
									>
										<InstagramIcon />
									</a>
									<a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href="https://www.facebook.com/escuela.ballet.ccsm/?locale=es_LA"
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
								label="Compañía"
								selected={currentTab === 'compania'}
								onClick={() => {
									handleClick('compania');
								}}
							/>
							<Tab
								label="Escuela"
								selected={currentTab === 'escuela'}
								onClick={() => {
									handleClick('escuela');
								}}
							/>
							<Tab
								label="Investigación"
								selected={currentTab === 'investigacion'}
								onClick={() => {
									handleClick('investigacion');
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
