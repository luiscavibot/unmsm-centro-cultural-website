import SecondaryButton from '@/ui/components/atoms/buttons/secondary-button';
import Title from '@/ui/components/atoms/title';
import Layout from '@/ui/components/organisms/shared/layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Facebook2Icon from '@/ui/components/atoms/icons/social/facebook-2-icon';
import Instagram2Icon from '@/ui/components/atoms/icons/social/instagram-2-icon';
import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon';
import ClockIcon from '@/ui/components/atoms/icons/clock-icon';
import OutlineEmailIcon from '@/ui/components/atoms/icons/outline-email-icon';
import InstagramIcon from '@/ui/components/atoms/icons/social/instagram-icon';
import FacebookIcon from '@/ui/components/atoms/icons/social/facebook-icon';

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
		title: 'Teatro Universitario de San Marcos',
		path: '/direcciones-artisticas/teatro',
	},
];

export default function Teatro() {
	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/teatro_universitario_ccsm_1_83ea3157b5.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white">
					<div className="container">
						<div className="max-w-[814px] mx-auto pb-14">
							<Title className="text-center">
								Teatro Universitario de San Marcos
							</Title>
							<div className="leading-[24px] text-dark-blue-2 mb-4">
								<p className="mb-5">
									El Teatro Universitario de San Marcos (TUSM)
									es una dependencia de la Universidad
									Nacional de San Marcos (UNMSM) que, en
									consonancia con sus principios y compromiso
									social, tiene como misión la formación de un
									elenco de teatro universitario conformado
									por alumnos y trabajadores de la
									universidad. Esta formación se basa en el
									compromiso, dedicación y esfuerzo de sus
									integrantes, promoviendo tanto su
									crecimiento artístico como su desarrollo
									personal.
								</p>
								<p className="mb-5">
									Si bien la formación del elenco es
									fundamental, el siguiente paso es la
									creación, producción y difusión de proyectos
									teatrales que se presenten en nuestra sala,
									asegurando así su actividad constante y su
									consolidación como un espacio de referencia.
									Al mismo tiempo, buscamos el reconocimiento
									del elenco como un grupo universitario
									oficial, fomentando el intercambio y la
									extensión dentro del medio artístico
									teatral, tanto en las diferentes facultades
									de la UNMSM como en el ámbito nacional e
									internacional. De este modo, el TUSM no solo
									impulsa la participación de su comunidad,
									sino que también fortalece su presencia en
									la escena teatral.
								</p>
								<p className="mb-5">
									Fundado el 4 de septiembre de 1946, el TUSM
									experimentó un nuevo impulso con su retorno
									a su sala histórica en julio de 2016, lo que
									permitió la ampliación de sus actividades y
									el fortalecimiento de su misión y visión. En
									este proceso, se ha trabajado constantemente
									para posicionar la sala del TUSM como un
									referente del entretenimiento alternativo en
									el Centro Histórico de Lima, priorizando la
									exhibición de producciones propias.
								</p>
								<p className="mb-5">
									Como parte de nuestro compromiso con la
									comunidad sanmarquina y el público en
									general, buscamos facilitar el acceso al
									arte dramático a través de funciones en
									nuestra sala y talleres que promuevan el
									acercamiento a las artes escénicas.
								</p>
							</div>
							<Link
								className="link text-dark-red font-medium"
								href="/direcciones-artisticas/teatro/historia"
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
												Jr. Lampa #833
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
												Lunes a viernes de 9:30 a. m. a
												12:30 p. m. y 2:30 a 5 p. m.
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
											<p className="font-medium break-words">
												Correo: teatro.ccsm@unmsm.edu.pe
												<br />
												Whatsapp: 944 780 420
											</p>
										</div>
									</div>
								</div>
								<div className="flex flex-row items-center gap-2 mt-5 ml-7">
									<a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href="https://www.instagram.com/teatrodesanmarcos/?hl=es"
										rel="noreferrer noopener"
										target="_blank"
									>
										<InstagramIcon />
									</a>
									<a
										className="p-1 rounded-[4px] bg-dark-gray-2"
										href="https://www.facebook.com/TeatroSanMarcos/?locale=es_LA"
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
				<div>
					<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[64px] pb-[56px]">
						<div className="container flex flex-row justify-between gap-x-[68px]">
							<div className="max-w-[641px] leading-[24px] text-dark-blue-2">
								<p className="mb-5">
									El TUSM está integrado por alumnos y
									trabajadores de la UNMSM. Con base en el
									compromiso, dedicación y esfuerzo para su
									crecimiento artístico y personal.
								</p>
								<p className="mb-5">
									Actualmente contamos con dos elencos: Elenco
									de teatro y elenco de improvisación teatral.
								</p>
								<p className="mb-5 font-bold">
									🎭 ¡Únete al Teatro Universitario de San
									Marcos! 🎭
								</p>
								<p className="mb-5">
									Si tienes pasión por las artes escénicas,
									entérate de nuestras{' '}
									<b>
										convocatorias a través de nuestras redes
										sociales
									</b>{' '}
									¡te esperamos!
								</p>
								<ul className="list-none mb-5">
									<li className="">
										<a
											className="flex items-baseline gap-x-2"
											href="https://www.instagram.com/teatrodesanmarcos/?hl=es"
											target="_blank"
											rel="noreferrer noopener"
										>
											<span className="relative top-[1px]">
												<Instagram2Icon color="orange" />
											</span>{' '}
											<span className="underline">
												Instagram
											</span>
										</a>
									</li>
									<li className="">
										<a
											className="flex items-baseline gap-x-2"
											href="https://www.facebook.com/TeatroSanMarcos/?locale=es_LA"
											target="_blank"
											rel="noreferrer noopener"
										>
											<span className="relative top-[1px]">
												<Facebook2Icon color="orange" />
											</span>{' '}
											<span className="underline">
												Facebook
											</span>
										</a>
									</li>
								</ul>
							</div>
							<div className="shrink-0">
								<figure className="relative w-[523px] h-[349px] mx-auto">
									<Image
										src="https://ccsm.unmsm.edu.pe/ccsm/teatro_unete_18acf6440a.jpg"
										className="object-cover h-full"
										alt="Teatro Únete"
										fill
										quality={100}
									/>
								</figure>
							</div>
						</div>
					</div>
					<div className="px-4 lg:px-[104px] gap-5 bg-white py-8 lg:py-[96px] ">
						<div className="container">
							<div className="grid grid-cols-2 gap-6 auto-rows-[402px] lg:grid-rows-[repeat(8,402px)]">
								<div className="col-span-2 row-span-2">
									<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
										<Image
											src="https://ccsm.unmsm.edu.pe/ccsm/teatro_grid_1_f94c72923e.jpg"
											className="object-cover"
											alt="Teatro 1"
											fill
											quality={100}
										/>
									</figure>
								</div>
								<div className="row-span-2 row-start-3">
									<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
										<Image
											src="https://ccsm.unmsm.edu.pe/ccsm/teatro_grid_2_e5c614977e.jpg"
											className="object-cover"
											alt="Teatro 2"
											fill
											quality={100}
										/>
									</figure>
								</div>
								<div className="row-start-3">
									<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
										<Image
											src="https://ccsm.unmsm.edu.pe/ccsm/teatro_grid_3_3214ff5391.jpg"
											className="object-cover"
											alt="Teatro 3"
											fill
											quality={100}
										/>
									</figure>
								</div>
								<div className="col-start-2 row-start-4">
									<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
										<Image
											src="https://ccsm.unmsm.edu.pe/ccsm/teatro_grid_4_cb810cbe5e.jpg"
											className="object-cover"
											alt="Teatro 4"
											fill
											quality={100}
										/>
									</figure>
								</div>
								<div className="col-span-2 row-span-2 row-start-5">
									<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
										<Image
											src="https://ccsm.unmsm.edu.pe/ccsm/teatro_grid_5_7059af83a1.jpg"
											className="object-cover"
											alt="Teatro 5"
											fill
											quality={100}
										/>
									</figure>
								</div>
								<div className="col-span-2 row-span-2 row-start-7">
									<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
										<Image
											src="https://ccsm.unmsm.edu.pe/ccsm/teatro_grid_6_2d529b7a70.jpg"
											className="object-cover"
											alt="Teatro 6"
											fill
											quality={100}
										/>
									</figure>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
}
