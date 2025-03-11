import Image from 'next/image'
import React from 'react'

const Compania = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<div className="max-w-[641px] leading-[24px] text-dark-blue-2">
						<p className="mb-3">
							La Compañía de Ballet San Marcos es el conjunto de bailarines profesionales contratados por la universidad, encargados de representarla al más alto nivel.
						</p>
						<p>
							Históricamente y hasta la actualidad, es una de las pocas compañías limeñas con un elenco de bailarines contratados dedicados exclusivamente a su labor en danza.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-dark-red-2 relative">
				<div
					className="px-6 lg:px-[104px] h-[380px] lg:h-full overflow-hidden relative"
				>
					<div className="container">
						<div className="relative pt-[56px] lg:pt-[96px] pb-[96px] lg:pr-16 lg:w-[705px] mr-auto h-full text-white flex flex-row gap-9 leading-[24px] font-normal">
							<div className="basis-1/2">
								<p className="mb-5">
									<b>Los bailarines de la compañía profesional entrenan diariamente en el ballet clásico y danza contemporánea.</b> Su rutina continúa con la práctica diaria del repertorio que la agrupación tiene en su haber, nutrido, además, de nuevas creaciones planteadas por coreógrafos de la propia compañía y por colegas nacionales e internacionales invitados.
								</p>
								<p>
									<b>El trabajo de la compañía se basa en difundir el arte escénico a través de la danza contemporánea</b>, dando a conocer la expresividad y la trascendencia de esta forma dancística, sus posibilidades comunicativas y expresivas y, de ese modo, sensibilizar al público llevándolo a disfrutar de nuevas sensaciones y experimentaciones.
								</p>
							</div>
							<div className="basis-1/2">
								<p className="font-bold mb-5">Principales actividades</p>
								<ul className="list-outside list-disc pl-6 space-y-5">
									<li><b>Difusión para niños y jóvenes, mediante funciones didáctica</b>s donde el público puede participar activamente en cada sesión</li>
									<li><b>Realización de funciones artísticas en auditorios y teatros nacionales y extranjeros</b> y el intercambio con artistas de danza de diversos países, introduciendo recientes técnicas y elementos del lenguaje dancístico contemporáneo. Cada una de las presentaciones de la compañía profesional lleva el sello de calidad y excelencia que han plasmado sus directores y maestros de danza y que, en la actualidad, se mantiene en base a trabajo y exigencia diaria.</li>
								</ul>
							</div>
						</div>

					</div>
				</div>
				<div className="shrink-0 w-[544px] absolute right-0 top-0 h-full">
					<figure className="relative w-full h-full mx-auto">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/ballet_compania_cf5188393b.webp"
							className="object-cover h-full"
							alt="Ballet Compañía"
							layout="fill"
							quality={100}
						/>
					</figure>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-white py-8 lg:py-[96px] ">
				<div className="container">
					<div className="grid grid-cols-2 gap-6 auto-rows-[402px] lg:grid-rows-[repeat(8,402px)]">
						<div className="col-span-2 row-span-2">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_compania_grid_1_a394db6370.jpg"
									className="object-cover"
									alt="Compañia de Ballet 1"
									layout="fill"
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-span-2 row-start-3">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_compania_grid_2_abacbe5a2d.jpg"
									className="object-cover"
									alt="Compañia de Ballet 2"
									layout="fill"
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-start-3">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_compania_grid_3_caadbb241d.jpg"
									className="object-cover"
									alt="Compañia de Ballet 3"
									layout="fill"
									quality={100}
								/>
							</figure>
						</div>
						<div className="col-start-2 row-start-4">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_compania_grid_4_0b1578925c.jpg"
									className="object-cover"
									alt="Compañia de Ballet 4"
									layout="fill"
									quality={100}
								/>
							</figure>
						</div>
						<div className="col-span-2 row-span-2 row-start-5">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_compania_grid_5_53a0679014.jpg"
									className="object-cover"
									alt="Compañia de Ballet 5"
									layout="fill"
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-start-7">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_compania_grid_6_7ca135396a.jpg"
									className="object-cover"
									alt="Compañia de Ballet 6"
									layout="fill"
									quality={100}
								/>
							</figure>
						</div>
						<div className="col-start-1 row-start-8">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_compania_grid_7_e28ec3c9e8.jpg"
									className="object-cover"
									alt="Compañia de Ballet 7"
									layout="fill"
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-span-2 col-start-2 row-start-7">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_compania_grid_8_adb46e149b.jpg"
									className="object-cover"
									alt="Compañia de Ballet 8"
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

export default Compania