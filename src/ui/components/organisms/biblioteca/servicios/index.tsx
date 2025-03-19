import Image from 'next/image'
import React from 'react'

const Servicios = () => {
	return (
		<>
			<div className="bg-dark-red-2 relative">
				<div
					className="px-6 lg:px-[104px] h-[380px] lg:h-full overflow-hidden relative"
				>
					<div className="container">
						<div className="relative pt-[56px] lg:pt-[96px] pb-[96px] lg:pr-16 lg:w-[705px] mr-auto h-full text-white flex flex-row gap-6 leading-[24px] font-medium">
							<div className="basis-1/2">
								<ul className="list-outside list-disc pl-6">
									<li className="font-bold">Lectura y préstamo en sala</li>
									<p className="mb-4">
										Ofrece a los usuarios los ambientes para lectura, estudio e investigación, y brinda la oportunidad de consultar en la sala de lectura sus colecciones.
									</p>
									<p className="mb-5">
										Pueden también realizar consultas en línea a las bases de datos, repositorios, gestores bibliográficos, y recursos virtuales.
									</p>
									<li className="font-bold">Referencia InfoArte</li>
									<p className="break-words mb-5">
										El público podrá realizar consultas en línea a través del correo biblioteca.ccsm@unmsm.edu.pe y también a través del <a href="https://www.facebook.com/BibliotecaEspanaDeLasArtes" rel="noopener noreferrer" target="_blank" className="link">Facebook de BEA</a>.
									</p>
									<li className="font-bold">Capacitación de recursos de información</li>
									<p>
										Su finalidad es proporcionar apoyo y asesoramiento al usuario para el mejor aprovechamiento de los recursos de información que se brinda.
									</p>
								</ul>
							</div>
							<div className="basis-1/2">
								<ul className="list-outside list-disc pl-6">
									<li className="font-bold">Actividades y Talleres</li>
									<p>
										Acceso a cursos y/o talleres organizados por la Biblioteca España de las Artes, en temas culturales, de investigación, de acceso a fuentes de información y temas relacionados al área.
									</p>
									<li className="font-bold">Servicio de Wi-fi</li>
									<p>
										Se brinda acceso a Internet gratuito en la sala de lectura, para fines de trabajo y/o investigación, así como el acceso al catálogo en línea y bases de datos virtuales.
									</p>
								</ul>
								<div className="mt-8 bg-dark-red-3 rounded-2xl p-6">
									<p className="font-bold">Carné de lector anual:</p>
									<ul className="list-outside list-disc pl-6 mb-3">
										<li>Público en general: S/30.00</li>
										<li>Escolares: S/. 5.00</li>
									</ul>
									<p className="font-bold">Pase temporal diario:</p>
									<ul className="list-outside list-disc pl-6 mb-3">
										<li>General: S/1.00</li>
									</ul>
									<p className="font-bold">Comunidad Sanmarquina:</p>
									<p>Ingreso libre presentando carné de estudiante o de la Biblioteca Central</p>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div className="shrink-0 w-[523px] absolute right-0 top-0 h-full">
					<figure className="relative w-full h-full mx-auto">
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/biblioteca-servicios.webp"
							className="object-cover h-full"
							alt="biblioteca servicios"
							layout="fill"
							quality={100}
						/>
					</figure>
				</div>
			</div>
		</>
	)
}

export default Servicios