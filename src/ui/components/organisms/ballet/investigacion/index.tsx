import Image from 'next/image'
import React from 'react'

const Investigacion = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<div className="max-w-[641px] leading-[24px] text-dark-blue-2">
						<p>
							Descubre cómo nuestra compañía investiga las raíces de la danza peruana y crea nuevas propuestas artísticas.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-blue-2 relative">
				<div
					className="px-6 lg:px-[104px] overflow-hidden relative"
				>
					<div className="container">
						<div className="relative pt-[56px] lg:pt-[96px] pb-[56px] md:pb-[96px] lg:pr-16 lg:w-[705px] mr-auto h-full text-white flex flex-col md:flex-row gap-7 leading-[24px] font-normal">
							<div className="md:basis-[47%]">
								<p className="mb-5 font-bold">
									Más que danza, un legado de investigación
								</p>
								<p>
									El Ballet San Marcos no solo es reconocido por sus impactantes presentaciones, sino también por su incansable búsqueda de conocimiento y la preservación de elementos de la danza peruana. A través de nuestro Centro de Investigación, exploramos las raíces históricas del ballet y la danza moderna y contemporánea en nuestro país, rescatamos coreografías de repertorio y desarrollamos nuevas propuestas artísticas.
								</p>
							</div>
							<div className="md:basis-[53%]">
								<p className="font-bold mb-5">Actualmente, estamos desarrollando varios proyectos de investigación que buscan:</p>
								<ul className="list-outside list-disc pl-6 space-y-2">
									<li><span className="font-medium">Recuperar coreografías de repertorio:</span> Rescatamos y reconstruimos obras de gran impacto hechas en el Ballet de San Marcos en las décadas de los años 70 a los años 2000.</li>
									<li><span className="font-medium">Desarrollar nuevas propuestas creativas:</span> A través de nuevas tendencias y propiciando la fusión con elementos tradicionales y de otras vertientes artísticas.</li>
									<li><span className="font-medium">Estudiar la influencia de la danza en la sociedad:</span> Analizamos el papel de la danza en la construcción de nuestra identidad nacional y su impacto en las diferentes comunidades.</li>
									<li><span className="font-medium">Desarrollar nuevas metodologías de enseñanza:</span> Investigamos y experimentamos con nuevas formas de enseñar danza, adaptándonos a las necesidades físicas y emocionales de las nuevas generaciones.</li>
									<li><span className="font-medium">Contribuir con la construcción de la historia de la danza clásica y contemporánea en el Perú:</span> Rescatando fuentes documentales existentes y construyendo un archivo físico y virtual que propicie la investigación de estudiosos de la historia de la danza peruana.</li>
								</ul>
							</div>
						</div>

					</div>
				</div>
				<div className="shrink-0 absolute right-0 top-0 h-full max-lg:hidden w-[180px] xl:w-[300px] min-[1439.9px]:w-[544px]">
					<figure className="relative w-full h-full mx-auto">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/ballet_compania_grid_7_e28ec3c9e8.jpg"
							className="object-cover h-full"
							alt="Ballet Investigación"
							fill
							quality={100}
						/>
					</figure>
				</div>
			</div>
		</>
	)
}

export default Investigacion