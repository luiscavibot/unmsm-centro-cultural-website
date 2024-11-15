import Image from 'next/image'
import React from 'react'

const CoursesAndWorkshops = () => {
	return (
		<>
			<h2 className="hidden sr-only">Cursos y Talleres</h2>
			<div>
				<div className="relative px-[104px] pt-[96px] pb-[56px]">
					<div className="absolute top-0 left-0 w-full h-full -z-10">
						<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/talleres.jpg" className="object-cover" alt="events" fill />
					</div>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="container h-[720px]">
						<div className="max-w-[459px]">
							<span className="inline-block px-2 py-[6px] bg-light-info-color text-dark-info-color rounded-md font-medium mb-2">Taller</span>
							<h3 className="text-[40px] font-bold leading-[normal]">Euphonio, tuba, trompeta y trombón</h3>
							<p className="mt-2 text-xl font-semibold leading-[20px]">Dirección de Música UNMSM</p>
							<p className="mt-6 font-medium leading-[24px]">El presente programa pedagógico busca dotar al alumno de herramientas técnicas para la interpretación adecuada de los instrumentos de metales a través de recursos pedagógicos, técnicas de estudio, libros de estudio y exploración de repertorio universal propio del instrumento. </p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CoursesAndWorkshops