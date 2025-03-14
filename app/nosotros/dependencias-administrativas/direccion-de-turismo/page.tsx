'use client';

import React, { useRef } from 'react';
import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
import Title from '@/infrastructure/ui/components/atoms/title';
import Layout from '@/infrastructure/ui/components/organisms/shared/layout';
import Image from 'next/image';
import Link from 'next/link';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import useSplideControls from '@/infrastructure/ui/hooks/useSplideControls';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
import videosDireccionDeTurismo from '@/infrastructure/ui/mocks/videos-direccion-de-turismo';
import { galeriaTurismoData } from '@/infrastructure/ui/data/turismo/galeria-turismo-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const breadcrumbItems = [
    {
        title: 'Inicio',
        path: '/',
    },
    {
        title: 'Nosotros',
        path: '',
    },
    {
        title: 'Dependencias administrativas',
        path: '/nosotros/dependencias-administrativas',
    },
    {
        title: 'Dirección de Turismo',
        path: '/nosotros/dependencias-administrativas/direccion-de-turismo',
    },
];

export default function DireccionDeTurismo() {

	const splideRefVideosGalery = useRef<ExtendedSplideType>(null);
	const splideRefImagesGalery = useRef<ExtendedSplideType>(null);
	
	const splideOptionsVideosGalery = {
		type: 'loop',
		width: '100%',
		fixedWidth: '308px',
		arrows: false,
		pagination: false,
		gap: '40px',
		perMove: 2,
		breakpoints: {
			1024: {
				fixedWidth: '100%',
				perMove: 1,
			},
		},
		interval: 3000,
		pauseOnHover: true,
		loop: true,
	};

	const splideOptionsImagesGalery = {
		type: 'slide',
		width: '100%',
		perPage: 1,
		arrows: false,
		pagination: false,
		gap: '0px',
		perMove: 1,
	};

	const {
		handleNext: handleNextVideosGalery,
		handleMove: handleMoveVideosGlaery,
		isNextDisabled: isNextDisabledVideosGalery,
	} = useSplideControls(splideRefVideosGalery);

	const {
		handleNext: handleNextImagesGalery,
		handlePrev: handlePrevImagesGalery,
		handleMove: handleMoveImagesGalery,
		isNextDisabled: isNextDisabledImagesGalery,
		isPrevDisabled: isPrevDisabledImagesGalery,
	} = useSplideControls(splideRefImagesGalery);

    return (
        <Layout
            portadaImage="https://ccsm.unmsm.edu.pe/ccsm/turismo_ccsm_portada_ede94147b2.webp"
            breadcrumbItems={breadcrumbItems}
        >
            <>
                <div className="px-4 lg:px-[104px] bg-white">
                    <div className="container">
                        <div className="max-w-[814px] mx-auto pb-14">
                            <Title className="text-center max-w-[437px] mx-auto">
                                Dirección de Turismo
                            </Title>
                            <div className="leading-[24px] text-dark-blue-2 mb-4 space-y-10">
                                <div>
                                    <p className="mb-5">
									En junio de 1996 a través de una iniciativa de la Administración del recientemente creado Centro Cultural de San Marcos, dirigida por la Srta. Judith Ramírez Castro, se convoca a estudiantes de las escuelas de Historia y Arqueología de la Facultad de Ciencias Sociales de nuestra casa de estudios quienes desarrollaban investigaciones en el Archivo Histórico Domingo Angulo y el Museo de Arqueología y Antropología de San Marcos para conformar lo que sería en el tiempo el primer grupo de guías que inicia sus labores en junio de 1996 para atender las visita programada de colegios.
                                    </p>
                                    <p className="mb-5">
									Nuestra dependencia inicialmente fue denominada Oficina de Turismo. Por Resolución Rectoral N° 00639 - CR - 98 del 3 de febrero de 1998 como dependencia del Centro Cultural de la Universidad de San Marcos, se le denominó Oficina de Turismo y Relaciones Públicas. En el año 2002 se le cambió a Oficina de Información y Turismo. Desde el año 2007 se le confirió la denominación que hoy lleva: Dirección de Turismo.
                                    </p>
                                </div>
                                <div>
                                    <figure className="relative h-[400px] max-w-[644px] rounded-3xl overflow-hidden mx-auto">
                                        <Image
                                            src="https://ccsm.unmsm.edu.pe/ccsm/tursimo_ccsm_historia_1_d7bec10950.webp"
                                            className="object-cover h-full"
                                            alt="direccion de turismo 1"
                                            layout="fill"
                                            quality={100}
                                        />
                                    </figure>
                                </div>
                                <div>
                                    <p className="mb-5">
									La primera jefatura fue asumida por la especialista en turismo Ludovina Cachuán Estrada en el período 1998 - 2003. En este tiempo se sentaron las bases de las futuras labores. Se configuró un cuerpo de guías en el cabal conocimiento de la historia de la Universidad de San Marcos y la Casona sanmarquina y se organizaron conferencias y cursos relacionados al sector turismo y el patrimonio de la ciudad de Lima.
                                    </p>
                                    <p className="mb-5">
									Juan Peralta Berrios, Historiador del Arte, asumió la conducción de la dependencia en el período 2004 - 2010 con el objetivo de convertirla en un eje de desarrollo que integre las actividades culturales de la institución con una solidad proyección hacia la comunidad. Organizó internamente las funciones en Administración, Investigación y Relaciones Públicas en una conexión dinámica con la jefatura. Al equipo compuesto de historiadores y profesionales de turismo se le sumó periódicamente un conjunto de voluntarios para atender las variadas labores principiando por atender la promoción del patrimonio sanmarquino.
                                    </p>
                                </div>
                                <div>
                                    <figure className="relative h-[400px] max-w-[644px] rounded-3xl overflow-hidden mx-auto">
                                        <Image
                                            src="https://ccsm.unmsm.edu.pe/ccsm/tursimo_ccsm_historia_2_775041a8e7.webp"
                                            className="object-cover h-full"
                                            alt="direccion de turismo 2"
                                            layout="fill"
                                            quality={100}
                                        />
                                    </figure>
                                </div>
                                <div>
                                    <p className="mb-5">
									Desde el año 2011 hasta la actualidad, el historiador Marco Rosales León rige la conducción y liderazgo de la dependencia. El eje de trabajo se centra en promover una política cultural desde la tradición institucional que se refleja en la investigación, reflexión y crítica. Aportando al sector turismo desde la organización de conferencias y cursos que señalen su problemática, planteamiento de soluciones y responsabilidad de su ejercicio. Nuestra labor informativa de historia y patrimonio y el desarrollo de nuestros servicios de visitas guiadas se centran en la posibilidad de conocer la Historia del Perú a partir de la Historia de la Universidad de San Marcos, Decana de América.
                                    </p>
                                </div>
								<div className="relative">
								<Splide
									onMoved={handleMoveImagesGalery}
									ref={splideRefImagesGalery}
									hasTrack={false}
									options={splideOptionsImagesGalery}
								>
									<SplideTrack>
										{galeriaTurismoData.map(
											(ImageData, index) => (
												<SplideSlide key={index}>
													<figure className="relative h-[400px] max-w-full rounded-3xl overflow-hidden mx-auto">
														<Image
															src={ImageData.imageUrl}
															className="object-cover h-full"
															alt={`galeria turismo ${index + 1}`}
															layout="fill"
															quality={100}
														/>
													</figure>
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
											onClick={handlePrevImagesGalery}
											direction="left"
											disabled={isPrevDisabledImagesGalery}
										/>
										<ArrowButton
											className="pointer-events-auto"
											theme="dark"
											onClick={handleNextImagesGalery}
											direction="right"
											disabled={isNextDisabledImagesGalery}
										/>
									</div>
								</div>
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
				<div
					className="px-4 lg:px-[104px] py-8 lg:py-[45px] bg-blue-2 scroll-mt-28 relative overflow-hidden"
				>
					<div className="absolute -top-[50%] right-0">
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-blue.svg"
							alt="bg noticias"
							width={1000}
							height={775}
						/>
					</div>
					<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center justify-between gap-x-14 relative">
						<div className="p-2 text-white max-w-[365px]">
							<span>Youtube</span>
							<h2 className="text-[24px] lg:text-[32px] font-semibold leading-[normal]">
								Entrevistas
							</h2>
							<p className="mt-6 leading-6 font-normal">A través de nuestro canal de YouTube, la Casona de San Marcos te invita a descubrir un espacio de diálogo y reflexión con protagonistas del arte, la cultura, y el pensamiento.</p>
						</div>
						<div className="max-lg:w-full relative" id="slider">
							<Splide
								onMoved={handleMoveVideosGlaery}
								ref={splideRefVideosGalery}
								hasTrack={false}
								options={splideOptionsVideosGalery}
							>
								<SplideTrack>
									{videosDireccionDeTurismo.map((video, index) => (
										<SplideSlide key={index}>
											<Link href={video.link}>
												<div className="relative h-[221x] aspect-video rounded-3xl overflow-hidden mx-auto">
													<Image
														src={video.image}
														className="object-cover h-full"
														alt={`video ${index + 1}`}
														layout="fill"
														quality={100}
													/>
												</div>
											</Link>
										</SplideSlide>
									))}
								</SplideTrack>
							</Splide>
							<div className="absolute top-1/2 -translate-y-1/2 -inset-x-[20px] pointer-events-none">
								<div className="container flex justify-end gap-x-2 relative">
									<ArrowButton
										className="pointer-events-auto"
										theme="light"
										onClick={handleNextVideosGalery}
										direction="right"
										disabled={isNextDisabledVideosGalery}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
            </>
        </Layout>
    );
}
