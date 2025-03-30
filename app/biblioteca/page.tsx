'use client';

import SecondaryButton from '@/ui/components/atoms/buttons/secondary-button';
// import SecondaryButton from '@/ui/components/atoms/buttons/secondary-button';
import ClockIcon from '@/ui/components/atoms/icons/clock-icon';
import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon';
import OutlineEmailIcon from '@/ui/components/atoms/icons/outline-email-icon';
import FacebookIcon from '@/ui/components/atoms/icons/social/facebook-icon';
import InstagramIcon from '@/ui/components/atoms/icons/social/instagram-icon';
// import TiktokIcon from '@/ui/components/atoms/icons/social/tiktok-icon';
// import YoutubeIcon from '@/ui/components/atoms/icons/social/youtube-icon';
// import TicketIcon from '@/ui/components/atoms/icons/ticket-icon';
import Tab from '@/ui/components/atoms/tab';
import Title from '@/ui/components/atoms/title';
// import Colecciones from '@/ui/components/organisms/museums/museo-de-arte-de-san-marcos/colecciones';
// import Exposiciones from '@/ui/components/organisms/museums/museo-de-arte-de-san-marcos/exposiciones';
// import Publicaciones from '@/ui/components/organisms/museums/museo-de-arte-de-san-marcos/publicaciones';
import Layout from '@/ui/components/organisms/shared/layout';
import React, { Suspense, useState } from 'react';

const tabs = {
	'biblioteca-virtual': React.lazy(
		() => import('@/ui/components/organisms/biblioteca/biblioteca-virtual')
	),
	servicios: React.lazy(
		() => import('@/ui/components/organisms/biblioteca/servicios')
	),
	colecciones: React.lazy(
		() => import('@/ui/components/organisms/biblioteca/colecciones')
	),
} as const;

type TabKeys = keyof typeof tabs;

const breadcrumbItems = [
	{
		title: 'Inicio',
		path: '/',
	},
	{
		title: 'Biblioteca España de las Artes',
		path: '/biblioteca',
	},
];

export default function MuseoDeArteDeSanMarcos() {
	const [currentTab, setCurrentTab] = useState<TabKeys>('biblioteca-virtual');

	const handleClick = (tab: TabKeys) => {
		setCurrentTab(tab);
	};

	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/biblioteca_portada_46dc835feb.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white pb-14">
					<div className="container">
						<div className="max-w-[814px] mx-auto">
							<Title className="text-center">
								Biblioteca España de las Artes
							</Title>
							<div className="leading-[24px] text-dark-blue-2">
								<p className="mb-3">
									La Biblioteca España de las Artes cuenta con
									aproximadamente veinte mil volúmenes entre
									diversas colecciones. A través de un trabajo
									de catalogación y archivo avanzado, en la
									actualidad se encuentran más de nueve mil
									títulos registrados en el sistema
									informático que están a disposición del
									público.
								</p>
								<p className="mb-3">
									La BEA no sólo cuenta con libros sobre artes
									plásticas, sino también con títulos de
									literatura, arqueología, teatro y ciencias
									sociales, asimismo tiene libros
									especializados y revistas sobre folklore,
									ballet, música, literatura y humanidades.
								</p>
								<p>
									Además, entre sus colecciones también se
									encuentran los números de la Revista
									Variedades publicada entre 1906 y 1929, así
									como un sin número de revistas antiguas
									extranjeras y peruanas del siglo XIX y XX.
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
												Centro Cultural de San Marcos
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
											<p className="font-bold">Horario</p>
											<p className="font-medium">
												Lunes a viernes, 8:00 a. m. a
												1:00 p. m. y de 2:00 p. m. a 3:45
												p. m.
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
												biblioteca.ccsm@unmsm.edu.pe
											</p>
										</div>
									</div>
								</div>
								<div className="flex flex-row items-center gap-2 mt-5 ml-7">
									<a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href="https://www.facebook.com/BibliotecaEspanaDeLasArtes"
										rel="noreferrer noopener"
										target="_blank"
									>
										<FacebookIcon />
									</a>
									<a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href="https://www.instagram.com/biblioteca.ccsanmarcos/"
										rel="noreferrer noopener"
										target="_blank"
									>
										<InstagramIcon />
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
								Explora y aprende en el Centro Cultural de San Marcos
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
								label="Biblioteca virtual"
								selected={currentTab === 'biblioteca-virtual'}
								onClick={() => {
									handleClick('biblioteca-virtual');
								}}
							/>
							<Tab
								label="Servicios"
								selected={currentTab === 'servicios'}
								onClick={() => {
									handleClick('servicios');
								}}
							/>
							<Tab
								label="Colecciones"
								selected={currentTab === 'colecciones'}
								onClick={() => {
									handleClick('colecciones');
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
