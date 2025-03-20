import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArtisticDirections: React.FC = () => {
	return (
		<section
			className="px-6 lg:px-[104px] pt-[36px] pb-[96px] lg:py-[104px] bg-black-custom scroll-mt-28"
			id="direcciones-artisticas"
		>
			<div className="container grid lg:grid-cols-3 gap-4 lg:gap-6">
				<div className="space-y-4 lg:space-y-6 lg:order-1 order-2">
					<Link
						href="/direcciones-artisticas/ballet"
						className="relative w-full max-lg:h-[200px] lg:aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden group"
					>
						<div className="absolute top-0 left-0 w-full h-full transition duration-300 ease-in-out group-hover:brightness-50">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/ballet_af1aa51a37.png"
								className="object-cover"
								alt="Ballet"
								fill
							/>
						</div>
						<h3 className="relative text-2xl font-bold text-center text-white">
							Ballet
						</h3>
					</Link>
					<Link
						href="/direcciones-artisticas/folklore"
						className="relative w-full max-lg:h-[200px] lg:aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden group"
					>
						<div className="absolute top-0 left-0 w-full h-full transition duration-300 ease-in-out group-hover:brightness-50">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/folfklore_9bc15b5189.png"
								className="object-cover"
								alt="Folklore"
								fill
							/>
						</div>
						<h3 className="relative text-2xl font-bold text-center text-white">
							Folklore
						</h3>
					</Link>
				</div>
				<div className="space-y-4 lg:space-y-6 lg:order-2 order-1">
					<div className="text-center text-white mb-8 lg:mb-12">
						<h2 className="font-messiri leading-[normal] lg:leading-[40px] text-[24px] lg:text-[40px] font-semibold">
							Direcciones artísticas
						</h2>
						<p className="mt-[14px] max-lg:mb-[14px] text-sm lg:text-base leading-[21px] lg:leading-[24px]">
							Esta sección celebra el talento y la creatividad de
							estudiantes y maestros que dan vida a expresiones
							únicas.
						</p>
						{/* <Link href="#" className="link">
							Leer más
						</Link> */}
					</div>
					<Link
						href="/direcciones-artisticas/cine"
						className="relative w-full max-lg:h-[200px] lg:aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden group"
					>
						<div className="absolute top-0 left-0 w-full h-full transition duration-300 ease-in-out group-hover:brightness-50">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/cine_4386cce50d.png"
								className="object-cover"
								alt="Cine y Dirección audiovisual"
								fill
							/>
						</div>
						<h3 className="relative text-2xl font-bold text-center text-white max-w-[211px]">
							Cine y Dirección audiovisual
						</h3>
					</Link>
					<Link
						href="/banda-universitaria"
						className="relative w-full max-lg:h-[200px] lg:aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden group"
					>
						<div className="absolute top-0 left-0 w-full h-full transition duration-300 ease-in-out group-hover:brightness-50">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/banda_2350d3997d.png"
								className="object-cover"
								alt="Banda Universitaria"
								fill
							/>
						</div>
						<h3 className="relative text-2xl font-bold text-center text-white">
							Banda Universitaria
						</h3>
					</Link>
				</div>
				<div className="space-y-4 lg:space-y-6 lg:order-3 order-3">
					<Link
						href="/direcciones-artisticas/musica"
						className="relative w-full max-lg:h-[200px] lg:aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden group"
					>
						<div className="absolute top-0 left-0 w-full h-full transition duration-300 ease-in-out group-hover:brightness-50">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/direccion_musica_ccsm_portada_2270b39dbd.jpg"
								className="object-cover"
								alt="Música"
								fill
							/>
						</div>
						<h3 className="relative text-2xl font-bold text-center text-white">
							Música
						</h3>
					</Link>
					<Link
						href="/direcciones-artisticas/teatro"
						className="relative w-full max-lg:h-[200px] lg:aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden group"
					>
						<div className="absolute top-0 left-0 w-full h-full transition duration-300 ease-in-out group-hover:brightness-50">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/teatro_2a62a910e8.png"
								className="object-cover"
								alt="Teatro"
								fill
							/>
						</div>
						<h3 className="relative text-2xl font-bold text-center text-white">
							Teatro
						</h3>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ArtisticDirections;
