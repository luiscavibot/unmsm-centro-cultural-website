import Image from 'next/image'
import React from 'react'
import Facebook2Icon from '@/infrastructure/ui/components/atoms/icons/social/facebook-2-icon'
import Instagram2Icon from '@/infrastructure/ui/components/atoms/icons/social/instagram-2-icon'

const Escuela = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container flex flex-row justify-between gap-x-[68px]">
					<div className="max-w-[641px] leading-[24px] text-dark-blue-2">
						<p className="mb-5">
							La Escuela de Ballet San Marcos es un espacio de encuentro entre docentes y alumnos en el que se desarrollan estudios de danza desde los 03 años de edad en adelante. El avance de los alumnos es por niveles
						</p>
						<p className="mb-5">
							Si tienes pasión por la danza y deseas formar parte de esta gran familia, puedes ver todas nuestras convocatorias a través de nuestras redes sociales ¡te esperamos!
						</p>
						<ul className="list-none mb-5">
							<li className="">
								<a className="flex items-baseline gap-x-2" href="https://www.instagram.com/ballet_unmsm/" target="_blank" rel="noreferrer noopener">
									<span className="relative top-[1px]"><Instagram2Icon color="orange" /></span> <span className="underline">Instagram</span>
								</a>
							</li>
							<li className="">
								<a className="flex items-baseline gap-x-2" href="https://www.facebook.com/ballet.sanmarcos/" target="_blank" rel="noreferrer noopener">
									<span className="relative top-[1px]"><Facebook2Icon color="orange" /></span> <span className="underline">Facebook</span>
								</a>
							</li>
						</ul>
						<p className="mb-5 font-bold">
							¿Qué ofrecemos?
						</p>
						<ul className="mb-5 list-disc list-outside pl-5">
							<li>Clases de ballet clásico y contemporáneo para todos los niveles.</li>
							<li>Un equipo docente altamente cualificado.</li>
							<li>Un ambiente de aprendizaje creativo y estimulante.</li>
							<li>La oportunidad de participar en presentaciones y proyectos especiales.</li>
						</ul>
						<p>¡No te pierdas esta oportunidad de crecer como bailarín y de contribuir al desarrollo de la danza en el Perú!</p>
					</div>
					<div className="shrink-0">
						<figure className="relative w-[523px] h-[444px] mx-auto">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_b72feba2e0.jpg"
								className="object-cover h-full"
								alt="Ballet Escuela"
								layout="fill"
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
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_1_75ca4094eb.jpg"
									className="object-cover"
									alt="Escuela de Ballet 1"
									layout="fill"
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-span-2 row-start-3">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_2_ea766e3e7c.jpeg"
									className="object-cover"
									alt="Escuela de Ballet 2"
									layout="fill"
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-start-3">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_3_519a645ce4.jpg"
									className="object-cover"
									alt="Escuela de Ballet 3"
									layout="fill"
									quality={100}
								/>
							</figure>
						</div>
						<div className="col-start-2 row-start-4">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_4_59f28ec23a.jpg"
									className="object-cover"
									alt="Escuela de Ballet 4"
									layout="fill"
									quality={100}
								/>
							</figure>
						</div>
						<div className="col-span-2 row-span-2 row-start-5">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_5_041e295b52.jpg"
									className="object-cover"
									alt="Escuela de Ballet 5"
									layout="fill"
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-start-7">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_6_37324ffca8.jpg"
									className="object-cover"
									alt="Escuela de Ballet 6"
									layout="fill"
									quality={100}
								/>
							</figure>
						</div>
						<div className="col-start-1 row-start-8">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_7_58f2a87c8b.jpg"
									className="object-cover"
									alt="Escuela de Ballet 7"
									layout="fill"
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-span-2 col-start-2 row-start-7">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_8_19b6743686.jpg"
									className="object-cover"
									alt="Escuela de Ballet 8"
									layout="fill"
									quality={100}
								/>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Escuela