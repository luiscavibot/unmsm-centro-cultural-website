import React, { useRef } from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
import useSplideControls from '@/infrastructure/ui/hooks/useSplideControls';
// import carouselExhibition from '@/infrastructure/ui/mocks/exhibition-arte-moderno-y-contemporaneo-carousel';
import Image from 'next/image';
import { retratosSiglosXviXxi } from '@/infrastructure/ui/data/museums/retratos-siglos-xvi-xxi-data';
import { artePopularData } from '@/infrastructure/ui/data/museums/arte-popular-data';
import { arteModernoContemporaneoData } from '@/infrastructure/ui/data/museums/arte-moderno-contemporaneo-data';
import { archivoDibujoPinturaCampesinaData } from '@/infrastructure/ui/data/museums/archivo-dibujo-pintura-campesina-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

// test

const Colecciones = () => {
	const splideRefColRetratos = useRef<ExtendedSplideType>(null);
	const splideRefColArtePopular = useRef<ExtendedSplideType>(null);
	const splideRefColArteModerno = useRef<ExtendedSplideType>(null);
	const splideRefColArchivo = useRef<ExtendedSplideType>(null);

	const splideOptions = {
		type: 'slide',
		width: '100%',
		fixedWidth: '390px',
		arrows: false,
		pagination: false,
		gap: '24px',
		perMove: 1,
		breakpoints: {
			1024: {
				fixedWidth: '100%',
				perMove: 1,
			},
		},
	};

	const {
		handlePrev: handlePrevColRetratos,
		handleNext: handleNextColRetratos,
		handleMove: handleMoveColRetratos,
		isPrevDisabled: isPrevDisabledColRetratos,
		isNextDisabled: isNextDisabledColRetratos,
	} = useSplideControls(splideRefColRetratos);
	const {
		handlePrev: handlePrevColArtePopular,
		handleNext: handleNextColArtePopular,
		handleMove: handleMoveColArtePopular,
		isPrevDisabled: isPrevDisabledColArtePopular,
		isNextDisabled: isNextDisabledColArtePopular,
	} = useSplideControls(splideRefColArtePopular);
	const {
		handlePrev: handlePrevColArteModerno,
		handleNext: handleNextColArteModerno,
		handleMove: handleMoveColArteModerno,
		isPrevDisabled: isPrevDisabledColArteModerno,
		isNextDisabled: isNextDisabledColArteModerno,
	} = useSplideControls(splideRefColArteModerno);
	const {
		handlePrev: handlePrevColArchivo,
		handleNext: handleNextColArchivo,
		handleMove: handleMoveColArchivo,
		isPrevDisabled: isPrevDisabledColArchivo,
		isNextDisabled: isNextDisabledColArchivo,
	} = useSplideControls(splideRefColArchivo);

	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2">
						¡Descubre el alma de nuestra historia y cultura a través
						del arte! Cada una de estas colecciones te invita a
						sumergirte en un viaje único por los retratos más
						icónicos, las tradiciones más auténticas, el arte
						contemporáneo más innovador y las expresiones más
						profundas de la vida rural peruana
					</p>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-black text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-1.svg')] bg-no-repeat bg-[-123px_10px]">
				<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
					<div className="max-w-[394px] mt-0 lg:mt-10">
						<span className="text-sm font-semibold mb-1 inline-block">
							Colección
						</span>
						<h3 className="text-[32px] leading-[normal] font-semibold">
							Retratos (siglos XVI-XXI)
						</h3>
						<div className="font-medium leading-[24px] mt-6">
							<p>
								Es una de las colecciones más importantes de este género artístico en nuestro país; y nos permite recorrer los diversos estilos de la pintura limeña. Tiene gran relevancia institucional e histórica pues está integrada por retratos de autoridades y personajes ilustres, entre ellos, hombres de letras, teólogos, científicos y matemáticos, muchos de los cuales fueron rectores y catedráticos de la Universidad. Cabe destacar dentro de esta colección, la presencia de grandes artistas como Bernardo Bitti (siglo XVI), Rafael Ortega, Ramón Muñiz, Teófilo Castillo (siglo XIX - XX), Felipe Cossio del Pomar (siglo XX) y Etna Velarde (siglo XXI), entre otros.
							</p>
						</div>
					</div>
					<div className="max-lg:w-full">
						<Splide
							className="splide-museo"
							onMoved={handleMoveColRetratos}
							ref={splideRefColRetratos}
							hasTrack={false}
							options={splideOptions}
						>
							<SplideTrack>
								{retratosSiglosXviXxi.map((img, index) => (
									<SplideSlide key={index}>
										<figure className="max-lg:hidden relative w-[390px] h-[512px] flex-shrink-0 rounded-2xl overflow-hidden">
											<Image
												src={img.imageUrl}
												className="object-cover"
												alt={'Exposición'}
												layout="fill"
											/>
										</figure>
									</SplideSlide>
								))}
							</SplideTrack>
						</Splide>
						<div className="flex justify-end gap-x-2 relative mt-4 pointer-events-none">
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handlePrevColRetratos}
								direction="left"
								disabled={isPrevDisabledColRetratos}
							/>
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handleNextColRetratos}
								direction="right"
								disabled={isNextDisabledColRetratos}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-dark-red-3 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-3.svg')] bg-no-repeat bg-[-123px_10px]">
				<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
					<div className="max-lg:w-full">
						<Splide
							onMoved={handleMoveColArtePopular}
							ref={splideRefColArtePopular}
							hasTrack={false}
							options={splideOptions}
						>
							<SplideTrack>
								{artePopularData.map((img, index) => (
									<SplideSlide key={index}>
										<figure className="max-lg:hidden relative w-[390px] h-[512px] flex-shrink-0 rounded-2xl overflow-hidden">
											<Image
												src={img.imageUrl}
												className="object-cover"
												alt={'Exposición'}
												layout="fill"
											/>
										</figure>
									</SplideSlide>
								))}
							</SplideTrack>
						</Splide>
						<div className="flex justify-start gap-x-2 relative mt-4 pointer-events-none">
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handlePrevColArtePopular}
								direction="left"
								disabled={isPrevDisabledColArtePopular}
							/>
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handleNextColArtePopular}
								direction="right"
								disabled={isNextDisabledColArtePopular}
							/>
						</div>
					</div>
					<div className="max-w-[394px] mt-0 lg:mt-10">
						<span className="text-sm font-semibold mb-1 inline-block">
							Colección
						</span>
						<h3 className="text-[32px] leading-[normal] font-semibold">
							Arte popular
						</h3>
						<div className="font-medium leading-[24px] mt-6">
							<p>
								Conformada por piezas representativas del arte tradicional, procedentes de las distintas regiones del Perú. Destacan piezas de cerámica, retablos, imaginería, keros, mates, cuernos, textiles, cueros y piedras de Huamanga, realizadas a lo largo de todo el siglo XX, así como algunos ejemplares del siglo XVIII y XIX. La colección nace con piezas recopiladas por dos importantes personalidades, la artista Alicia Bustamante y el historiador Pablo Macera, quienes donaron parte de sus importantes colecciones al momento de la creación del MASM en 1970. Desde entonces, la colección ha ido incrementándose gracias al empeño e iniciativa de investigadores, coleccionistas y artistas que han realizado generosos donativos, que evidencian las transformaciones que se experimentan en el amplio campo del arte elaborado a lo largo del Perú.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-green text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-4.svg')] bg-no-repeat bg-[-123px_10px]">
				<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
					<div className="max-w-[394px] mt-0 lg:mt-10">
						<span className="text-sm font-semibold mb-1 inline-block">
							Colección
						</span>
						<h3 className="text-[32px] leading-[normal] font-semibold">
							Arte moderno y contemporáneo
						</h3>
						<div className="font-medium leading-[24px] mt-6">
							<p className="mb-6">
								Incluye pinturas, esculturas, fotografías, vídeos, instalaciones, entre otras técnicas del arte peruano contemporáneo, que configura un amplio panorama de las artes visuales en Perú, desde las primeras décadas del siglo XX hasta la actualidad. Presentes están importantes tendencias artísticas como el indigenismo, el surrealismo, la abstracción geométrica, el pop art, el op art, el realismo político social, entre otras.
							</p>
							<p>
								Parte de estas obras proceden de los Salones Nacionales de Artes Plásticas que la UNMSM organizó entre las décadas de 1950 y 1960. Además figuran piezas cedidas por los propios artistas gracias a gestión de distintos directores; como producto de las muestras individuales y salones de arte organizados entre las décadas de 1970 y 2000; así como otras actividades de carácter internacional como la Bienal Iberoamericana de Lima.
							</p>
						</div>
					</div>
					<div className="max-lg:w-full">
						<Splide
							onMoved={handleMoveColArteModerno}
							ref={splideRefColArteModerno}
							hasTrack={false}
							options={splideOptions}
						>
							<SplideTrack>
								{arteModernoContemporaneoData.map(
									(img, index) => (
										<SplideSlide key={index}>
											<figure className="max-lg:hidden relative w-[390px] h-[512px] flex-shrink-0 rounded-2xl overflow-hidden">
												<Image
													src={img.imageUrl}
													className="object-cover"
													alt={'Exposición'}
													layout="fill"
												/>
											</figure>
										</SplideSlide>
									)
								)}
							</SplideTrack>
						</Splide>
						<div className="flex justify-end gap-x-2 relative mt-4 pointer-events-none">
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handlePrevColArteModerno}
								direction="left"
								disabled={isPrevDisabledColArteModerno}
							/>
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handleNextColArteModerno}
								direction="right"
								disabled={isNextDisabledColArteModerno}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-blue-2 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-blue.svg')] bg-no-repeat bg-[-123px_10px]">
				<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
					<div className="max-lg:w-full">
						<Splide
							onMoved={handleMoveColArchivo}
							ref={splideRefColArchivo}
							hasTrack={false}
							options={splideOptions}
						>
							<SplideTrack>
								{archivoDibujoPinturaCampesinaData.map(
									(img, index) => (
										<SplideSlide key={index}>
											<figure className="max-lg:hidden relative w-[390px] h-[512px] flex-shrink-0 rounded-2xl overflow-hidden">
												<Image
													src={img.imageUrl}
													className="object-cover"
													alt={'Exposición'}
													layout="fill"
												/>
											</figure>
										</SplideSlide>
									)
								)}
							</SplideTrack>
						</Splide>
						<div className="flex justify-start gap-x-2 relative mt-4 pointer-events-none">
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handlePrevColArchivo}
								direction="left"
								disabled={isPrevDisabledColArchivo}
							/>
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handleNextColArchivo}
								direction="right"
								disabled={isNextDisabledColArchivo}
							/>
						</div>
					</div>
					<div className="max-w-[394px] mt-0 lg:mt-10">
						<span className="text-sm font-semibold mb-1 inline-block">
							Colección
						</span>
						<h3 className="text-[32px] leading-[normal] font-semibold">
							Archivo de dibujo y pintura campesina
						</h3>
						<div className="font-medium leading-[24px] mt-6">
							<p>
								En el año 2004, la Asociación de Servicios Educativos Rurales (SER) donó al museo más de cuatro mil obras provenientes del Concurso Nacional de Dibujo y Pintura Campesina, realizado entre 1984 y 1996, certámenes que congregaron una numerosa cantidad de participantes de diversas zonas rurales del país. Esta colección constituye un valioso documento gráfico y escrito sobre la historia rural contemporánea de nuestro país, contada por sus propios protagonistas cuyas memorias han sido realizadas con diversos materiales y técnicas. Los temas que abordan estos testimonios son variados: sucesos relacionados con la violencia política, la pobreza, la situación de las mujeres en el campo, los cambios que se vienen operando en el campo a raíz del intercambio con la ciudad y el fenómeno de la globalización, la marginación, los sueños y esperanzas en el futuro, entre otros.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Colecciones;
