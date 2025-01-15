'use client';

import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
import ClockIcon from '@/infrastructure/ui/components/atoms/icons/clock-icon';
import OutlinePlaceIcon from '@/infrastructure/ui/components/atoms/icons/outilne-place-icon';
import OutlineEmailIcon from '@/infrastructure/ui/components/atoms/icons/outline-email-icon';
import FacebookIcon from '@/infrastructure/ui/components/atoms/icons/social/facebook-icon';
import InstagramIcon from '@/infrastructure/ui/components/atoms/icons/social/instagram-icon';
// import TiktokIcon from '@/infrastructure/ui/components/atoms/icons/social/tiktok-icon';
import YoutubeIcon from '@/infrastructure/ui/components/atoms/icons/social/youtube-icon';
import Tab from '@/infrastructure/ui/components/atoms/tab';
import Title from '@/infrastructure/ui/components/atoms/title';
import Layout from '@/infrastructure/ui/components/organisms/shared/layout';
import React, { Suspense, useState } from 'react';

const tabs = {
	colecciones: React.lazy(
		() =>
			import(
				'@/infrastructure/ui/components/organisms/museums/museo-de-arqueologia-y-antropologia/colecciones'
			)
	),
	exposiciones: React.lazy(
		() =>
			import(
				'@/infrastructure/ui/components/organisms/museums/museo-de-arqueologia-y-antropologia/exposiciones'
			)
	),
	publicaciones: React.lazy(
		() =>
			import(
				'@/infrastructure/ui/components/organisms/museums/museo-de-arqueologia-y-antropologia/publicaciones'
			)
	),
	'recursos-educativos': React.lazy(
		() =>
			import(
				'@/infrastructure/ui/components/organisms/museums/museo-de-arqueologia-y-antropologia/recursos-educativos'
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
		title: 'Museos de Arqueología y Antropología',
		path: '/museo-de-arqueologia-y-antropologia',
	},
];

export default function MuseoDeArteDeSanMarcos() {
	const [currentTab, setCurrentTab] = useState<TabKeys>('colecciones');

	const handleClick = (tab: TabKeys) => {
		setCurrentTab(tab);
	};

	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/El_pasado_ilustrado_MASM_CCSM_Giancarlo_Espinoza_7_73f4aa9457.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white pb-14">
					<div className="container">
						<div className="max-w-[814px] mx-auto">
							<Title className="text-center">
								Museos de Arqueología y Antropología
							</Title>
							<div className="leading-[24px] text-dark-blue-2">
								<p className="mb-3">
									El Museo de Arqueología y Antropología (MAA)
									de la Universidad Nacional Mayor de San
									Marcos (UNMSM) es uno de los museos
									universitarios más antiguos y destacados del
									país y de la región, tanto por la custodia
									de sus invaluables artefactos cerámicos,
									textiles y líticos, así como por
									proporcionar una vista panorámica de todo el
									proceso histórico prehispánico.
								</p>
								<p className="mb-3">
									El Museo fue fundado el 21 de octubre de
									1919 por Julio César Tello, arqueólogo
									peruano, quien representa una parte
									importante de la historia de este museo. La
									historia del Museo, además, se asocia a la
									vida y trabajos de destacados intelectuales
									como Toribio Mejía Xesspe, Rebeca Carrión
									Cachot, Pedro Weiss, Luis E. Valcárcel,
									Jorge Muelle, Duccio Bonavía, Ernesto Tabío,
									Edward Lanning, Richard McNeish, Hans
									Horkheimer, Arturo Jiménez Borja, Ramiro
									Matos, Luis Guillermo Lumbreras, Rosa Fung,
									Ruth Shady, entre otros.
								</p>
								<p className="mb-3">
									El MAA promueve y apoya la investigación, el
									estudio de las sociedades antiguas y
									contemporáneas del área andina; se
									preservan, conservan e interpretan los
									materiales arqueológicos y etnológicos de
									nuestro acervo cultural y así se comprende
									la vida del antiguo poblador andino. Se
									brinda, además, a los alumnos de nuestra
									UNMSM y a la comunidad en general,
									herramientas novedosas para la enseñanza y
									aprendizaje con el fin de enriquecer el
									desarrollo profesional.
								</p>
								<p>
									El museo se proyecta a la colectividad
									mediante conferencias semanales, la
									publicación de libros y revistas académicas,
									además de presentar exposiciones
									museográficas.
								</p>
							</div>
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
												Horario de atención
											</p>
											<p className="font-medium">
												Lunes a viernes, 10:00 a.m. a
												1:00 pm y de 2:00 p.m. a 4:00
												p.m.
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
												museoarql.ccsm@unmsm.edu.pe
											</p>
										</div>
									</div>
								</div>
								<div className="flex flex-row items-center gap-2 mt-5 ml-7">
									<a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href=""
										rel="noreferrer noopener"
										target="_blank"
									>
										<FacebookIcon />
									</a>
									<a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href=""
										rel="noreferrer noopener"
										target="_blank"
									>
										<InstagramIcon />
									</a>
									{/* <a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href=""
										rel="noreferrer noopener"
										target="_blank"
									>
										<TiktokIcon />
									</a> */}
									<a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href=""
										rel="noreferrer noopener"
										target="_blank"
									>
										<YoutubeIcon />
									</a>
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
								label="Colecciones"
								selected={currentTab === 'colecciones'}
								onClick={() => {
									handleClick('colecciones');
								}}
							/>
							<Tab
								label="Exposiciones"
								selected={currentTab === 'exposiciones'}
								onClick={() => {
									handleClick('exposiciones');
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
								label="Recursos educativos"
								selected={currentTab === 'recursos-educativos'}
								onClick={() => {
									handleClick('recursos-educativos');
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
