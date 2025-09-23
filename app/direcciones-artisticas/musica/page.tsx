import SecondaryButton from '@/ui/components/atoms/buttons/secondary-button';
import ClockIcon from '@/ui/components/atoms/icons/clock-icon';
import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon';
import OutlineEmailIcon from '@/ui/components/atoms/icons/outline-email-icon';
import FacebookIcon from '@/ui/components/atoms/icons/social/facebook-icon';
// import InstagramIcon from '@/ui/components/atoms/icons/social/instagram-icon';
import Title from '@/ui/components/atoms/title';
import Layout from '@/ui/components/organisms/shared/layout';
import Link from 'next/link';
import React from 'react';

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
		title: 'Dirección de Música UNMSM',
		path: '/direcciones-artisticas/musica',
	},
];

export default function Musica() {
	return (
		<Layout
			portadaImage="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/ccsm/musica_portada_87e634d1ee.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white">
					<div className="container">
						<div className="max-w-[814px] mx-auto pb-14">
							<Title className="text-center">
								Dirección de Música UNMSM
							</Title>
							<div className="leading-[24px] text-dark-blue-2 mb-4">
								<p className="mb-5">
									El Coro Universitario (CUSM) fue fundado en
									noviembre de 1954, a propuesta de la
									Federación de Estudiantes de San Marcos
									(FUSM), por la musicóloga, arreglista y
									compositora Rosa Alarco Larrabure, quien
									dedicó su vida a la investigación de la
									música tradicional peruana.
								</p>
								<p className="mb-5">
									Durante todos estos años de difusión
									musical, el Coro Universitario ha ofrecido
									innumerables presentaciones en diversos
									lugares de nuestro país, ha sido parte de
									festivales nacionales e internacionales y
									participa activamente de las actividades
									organizadas por la Universidad.
								</p>
								<p className="mb-5">
									El coro de San Marcos es el coro
									universitario más antiguo del Perú y su
									actual elenco prepara, Obras
									escénico-musicales, de carácter clásico y
									popular.
								</p>
								<p>
									En la actualidad el Coro Universitario está
									bajo la dirección de los Maestros José
									Mendieta Echevarría y Rafael González
									Carranza, quienes tienen a su cargo los
									cursos de Técnica vocal y lectura musical de
									la Dirección de Música del Centro Cultural
									de San Marcos.
								</p>
							</div>
							<Link
								className="link text-dark-red font-medium"
								href="/direcciones-artisticas/musica/historia"
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
											<p className="font-bold">
												Horario de atención en oficina
											</p>
											<p className="font-medium">
												Lunes a viernes de 8:30 a. m. a
												1 p. m. y de 2 p. m. a 4 p. m.
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
											<p className="font-medium break-all">
												direcciondemusica@unmsm.edu.pe
											</p>
										</div>
									</div>
								</div>
								<div className="flex flex-row items-center gap-2 mt-5 ml-7">
									{/* <a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href="https://www.instagram.com/bandauniversitaria_unmsm/"
										rel="noreferrer noopener"
										target="_blank"
									>
										<InstagramIcon />
									</a> */}
									<a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href="https://www.facebook.com/DirecciondeMusicaUNMSM/?locale=es_LA"
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
								Explora y aprende en el Centro Cultural de San
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
								href="/cursos-y-talleres?dependencia=Dirección+de+Música&page=1"
								theme="dark"
								label="Cursos y talleres"
							/>
							<SecondaryButton
								type="internal-link"
								href="/agenda-cultural?organizer=Dirección+de+Música&page=1"
								theme="dark"
								label="Eventos"
							/>
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
}
