'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';

interface ExtendedSplideType extends SplideType {
    splide: SplideType;
}

const News = () => {

	const splideRef = useRef<ExtendedSplideType>(null);
	const [isPrevDisabled, setIsPrevDisabled] = useState(true);
	const [isNextDisabled, setIsNextDisabled] = useState(false);

	const handlePrev = () => {
		splideRef.current?.splide?.go('<');
	};

	const handleNext = () => {
		splideRef.current?.splide?.go('>');
	};

	const handleMove = () => {
		const splide = splideRef.current?.splide;
		if (splide) {
			setIsPrevDisabled(splide.index === 0);
			setIsNextDisabled(splide.index === splide.length - 1);
		}
	};

	return (
		<section className="px-[104px] py-[56px] bg-red-custom scroll-mt-28" id="noticias">
			<div className="container grid grid-cols-[auto_minmax(0,1fr)] items-center justify-between gap-x-14">
				<h2 className="font-messiri text-[40px]">Noticias</h2>
				<div id="slider">
					<Splide
						onMoved={handleMove}
						ref={splideRef}
						hasTrack={false}
						options={{
						type: 'slide',
						width: '100%',
						fixedWidth: '620px',
						arrows: false,
						pagination: false,
						gap: '40px',
						perMove: 1,
						// breakpoints: {
						// 	768: {
						// 	perPage: 1,
						// 	},
						// },
						}}
					>
						<SplideTrack>
							<SplideSlide>
								<Link href="#">
									<article className="rounded-2xl overflow-hidden flex flex-row w-[620px] h-[240px]">
										<figure className="relative w-[240px] h-[240px] flex-shrink-0">
											<Image
											src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/noticia.webp"
											className="object-cover"
											alt="noticia"
											layout="fill"
											/>
										</figure>
										<div className="bg-white p-6 w-[380px] flex-shrink-0">
											<header>
											<time dateTime="2024-11-16" className="text-dark-blue-2 text-sm leading-[21px] mb-1">
												Viernes, 16 de noviembre
											</time>
											<h3 className="line-clamp-3 text-xl text-dark-blue font-semibold leading-[30px]">
												Ingreso Libre a las Salas del Museo de Arte de San Marcos - noviembre 2024
											</h3>
											</header>
											<p className="line-clamp-3 text-dark-blue-2 text-sm leading-[21px] mt-1">
												El Centro Cultural de San Marcos, en colaboración con la Dirección de Cine y Producción
											Audiovisual presentan el «Ciclo de cine peruano restaurado» busca visibilizar la importancia
											de la preservación y restauración del patrimonio cinematográfico nacional.
											</p>
										</div>
									</article>
								</Link>
							</SplideSlide>
							<SplideSlide>
								<Link href="#">
									<article className="rounded-2xl overflow-hidden flex flex-row w-[620px] h-[240px]">
										<figure className="relative w-[240px] h-[240px] flex-shrink-0">
											<Image
											src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/noticia.webp"
											className="object-cover"
											alt="noticia"
											layout="fill"
											/>
										</figure>
										<div className="bg-white p-6 w-[380px] flex-shrink-0">
											<header>
											<time dateTime="2024-11-16" className="text-dark-blue-2 text-sm leading-[21px] mb-1">
												Viernes, 16 de noviembre
											</time>
											<h3 className="line-clamp-3 text-xl text-dark-blue font-semibold leading-[30px]">
												Ingreso Libre a las Salas del Museo de Arte de San Marcos - noviembre 2024
											</h3>
											</header>
											<p className="line-clamp-3 text-dark-blue-2 text-sm leading-[21px] mt-1">
												El Centro Cultural de San Marcos, en colaboración con la Dirección de Cine y Producción
											Audiovisual presentan el «Ciclo de cine peruano restaurado» busca visibilizar la importancia
											de la preservación y restauración del patrimonio cinematográfico nacional.
											</p>
										</div>
									</article>
								</Link>
							</SplideSlide>
							<SplideSlide>
								<Link href="#">
									<article className="rounded-2xl overflow-hidden flex flex-row w-[620px] h-[240px]">
										<figure className="relative w-[240px] h-[240px] flex-shrink-0">
											<Image
											src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/noticia.webp"
											className="object-cover"
											alt="noticia"
											layout="fill"
											/>
										</figure>
										<div className="bg-white p-6 w-[380px] flex-shrink-0">
											<header>
											<time dateTime="2024-11-16" className="text-dark-blue-2 text-sm leading-[21px] mb-1">
												Viernes, 16 de noviembre
											</time>
											<h3 className="line-clamp-3 text-xl text-dark-blue font-semibold leading-[30px]">
												Ingreso Libre a las Salas del Museo de Arte de San Marcos - noviembre 2024
											</h3>
											</header>
											<p className="line-clamp-3 text-dark-blue-2 text-sm leading-[21px] mt-1">
												El Centro Cultural de San Marcos, en colaboración con la Dirección de Cine y Producción
											Audiovisual presentan el «Ciclo de cine peruano restaurado» busca visibilizar la importancia
											de la preservación y restauración del patrimonio cinematográfico nacional.
											</p>
										</div>
									</article>
								</Link>
							</SplideSlide>
						</SplideTrack>
					</Splide>
					<div className="flex justify-end gap-x-2 relative mt-4">
						<button
							onClick={handlePrev}
							disabled={isPrevDisabled}
							className={`w-10 h-10 rounded grid place-items-center transition-colors duration-200 ${isPrevDisabled ? 'bg-dark-arrow-button-color' : 'bg-light-arrow-button-color'}`}
						>
							<svg className="rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g id="navigate_next">
									<path className={`${isPrevDisabled ? 'fill-light-arrow-color' : 'fill-dark-arrow-color'}`} id="icon" d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" fill="#2A2D31"/>
								</g>
							</svg>
						</button>
						<button
							onClick={handleNext}
							disabled={isNextDisabled}
							className={`w-10 h-10 rounded grid place-items-center transition-colors duration-200 ${isNextDisabled ? 'bg-dark-arrow-button-color' : 'bg-light-arrow-button-color'}`}
						>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g id="navigate_next">
									<path className={`${isNextDisabled ? 'fill-light-arrow-color' : 'fill-dark-arrow-color'}`} id="icon" d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" fill="#2A2D31"/>
								</g>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default News