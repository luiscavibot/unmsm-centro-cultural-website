'use client';

import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import heroImageDataToHome from '@/infrastructure/ui/mocks/hero-image-data-to-home';

import React from 'react';

//TODO: Cambiar importación de imagen en bg por url proveniente de Gestor de Contenido de CCSM

const Hero: React.FC = () => {
	return (
		<>
			<div className="relative overflow-hidden">
				<div className="absolute inset-0 dynamic-image h-full">
					<Splide
						className="h-full"
						id="hero-slider"
						aria-label="carrusel inicial"
						options={{
							type: 'fade',
							rewind: true,
							arrows: false,
							pagination: false,
							autoplay: true,
							pauseOnHover: false,
							pauseOnFocus: false,
							speed: 1000,
							interval: 6000,
							breakpoints: {
								767: {
									height: '24rem',
									cover: true,
								},
								639: {
									height: '100vh',
									cover: true,
								},
							},
						}}
					>
						{heroImageDataToHome.map((imagen, index) => (
							<SplideSlide className="!h-full" key={index}>
								<Image
									src={imagen.imageUrl}
									alt={imagen.caption}
									width={2732}
									height={1232}
									quality={100}
									className="w-auto h-full md:w-full object-cover"
									sizes="100vw"
								/>
							</SplideSlide>
						))}
					</Splide>
				</div>
				<div className="bg-gradiente-carrusel-portada opacity-40 absolute w-full h-full inset-0"></div>
				<div className="relative px-6 lg:px-[104px] h-[360px] lg:h-[720px]">
					<div className="container h-full flex justify-center lg:justify-start items-center">
						<h2 className="leading-[160%] lg:leading-[48px] w-[245px] lg:w-[477px] font-messiri font-bold text-white max-lg:text-center">
							<span className="text-base lg:text-[40px]">¡Descubre el</span>
							<br />
							<span className="text-[24px] lg:text-[56px]">
								Centro Cultural San Marcos!
							</span>
						</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
