'use client';

import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
import ClockIcon from '@/infrastructure/ui/components/atoms/icons/clock-icon';
import OutlinePlaceIcon from '@/infrastructure/ui/components/atoms/icons/outilne-place-icon';
import OutlineEmailIcon from '@/infrastructure/ui/components/atoms/icons/outline-email-icon';
import FacebookIcon from '@/infrastructure/ui/components/atoms/icons/social/facebook-icon';
import InstagramIcon from '@/infrastructure/ui/components/atoms/icons/social/instagram-icon';
import TiktokIcon from '@/infrastructure/ui/components/atoms/icons/social/tiktok-icon';
import YoutubeIcon from '@/infrastructure/ui/components/atoms/icons/social/youtube-icon';
import TicketIcon from '@/infrastructure/ui/components/atoms/icons/ticket-icon';
import Tab from '@/infrastructure/ui/components/atoms/tab';
import Title from '@/infrastructure/ui/components/atoms/title';
// import Colecciones from '@/infrastructure/ui/components/organisms/museums/museo-de-arte-de-san-marcos/colecciones';
// import Exposiciones from '@/infrastructure/ui/components/organisms/museums/museo-de-arte-de-san-marcos/exposiciones';
// import Publicaciones from '@/infrastructure/ui/components/organisms/museums/museo-de-arte-de-san-marcos/publicaciones';
import Layout from '@/infrastructure/ui/components/organisms/shared/layout';
import React, { Suspense, useState } from 'react';

const tabs = {
	'biblioteca-virtual': React.lazy(
		() =>
			import(
				'@/infrastructure/ui/components/organisms/biblioteca/biblioteca-virtual'
			)
	),
	servicios: React.lazy(
		() =>
			import(
				'@/infrastructure/ui/components/organisms/biblioteca/servicios'
			)
	),
	colecciones: React.lazy(
		() =>
			import(
				'@/infrastructure/ui/components/organisms/biblioteca/colecciones'
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
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/museo_arte_san_marcos_0729c34c67.jpg"
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
									La Biblioteca España de las Artes cuenta con aproximadamente veinte mil volúmenes entre diversas colecciones. A través de un trabajo de catalogación y archivo avanzado, en la actualidad se encuentran más de nueve mil títulos registrados en el sistema informático que están a disposición del público.
								</p>
								<p className="mb-3">
									La BEA no sólo cuenta con libros sobre artes plásticas, sino también con títulos de literatura, arqueología, teatro y ciencias sociales, asimismo tiene libros especializados y revistas sobre folklore, ballet, música, literatura y humanidades.
								</p>
								<p>
									Además, entre sus colecciones también se encuentran los números de la Revista Variedades publicada entre 1906 y 1929, así como un sin número de revistas antiguas extranjeras y peruanas del siglo XIX y XX.
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
											<p className="font-bold">Horario</p>
											<p className="font-medium">
												Lunes a viernes, 10:00 a.m. a
												1:00 pm y de 2:00 p.m. a 5:30
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
