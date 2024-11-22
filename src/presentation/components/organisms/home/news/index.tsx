'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const News = () => {
	return (
		<section className="px-[104px] py-[56px] bg-red-custom scroll-mt-28" id="noticias">
			<div className="container flex flex-row items-center gap-x-14">
				<h2 className="font-messiri text-[40px]">Noticias</h2>
				<div id="slider">
					<Splide
						options={{
						type: 'slide',
						perPage: 2,
						arrows: true,
						pagination: false,
						gap: '1rem',
						breakpoints: {
							768: {
							perPage: 1,
							},
						},
						classes: {
							pagination: 'splide__pagination splide__pagination-custom',
							arrow: 'splide__arrow splide__arrow-custom',
						},
						}}
					>
						<SplideSlide>
							<Link href="#">
								<article className="rounded-2xl overflow-hidden flex flex-row max-w-[620px] h-[240px]">
								<figure className="relative w-[240px] h-[240px] flex-shrink-0">
									<Image
									src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/noticia.webp"
									className="object-cover"
									alt="events"
									layout="fill"
									/>
								</figure>
								<div className="bg-white p-6">
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
								<article className="rounded-2xl overflow-hidden flex flex-row max-w-[620px] h-[240px]">
								<figure className="relative w-[240px] h-[240px] flex-shrink-0">
									<Image
									src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/noticia.webp"
									className="object-cover"
									alt="events"
									layout="fill"
									/>
								</figure>
								<div className="bg-white p-6">
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
          			</Splide>
					{/* <Link href="#">
						<article className="rounded-2xl overflow-hidden flex flex-row max-w-[620px] h-[240px]">
							<figure className="relative w-[240px] h-[240px] flex-shrink-0">
								<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/noticia.webp" className="object-cover" alt="events" fill />
							</figure>
							<div className="bg-white p-6">
								<header>
									<time dateTime="2024-11-16" className="text-dark-blue-2 text-sm leading-[21px] mb-1">Viernes, 16 de noviembre</time>
									<h3 className="line-clamp-3 text-xl text-dark-blue font-semibold leading-[30px]">Ingreso Libre a las Salas del Museo de Arte de San Marcos - noviembre 2024</h3>
								</header>
								<p className="line-clamp-3 text-dark-blue-2 text-sm leading-[21px] mt-1">El Centro Cultural de San Marcos, en colaboración con la Dirección de Cine y Producción Audiovisual presentan el «Ciclo de cine peruano restaurado» busca visibilizar la importancia de la preservación y restauración del patrimonio cinematográfico nacional.</p>
							</div>
						</article>
					</Link> */}
				</div>
			</div>
		</section>
	)
}

export default News