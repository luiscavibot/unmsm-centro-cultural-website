import Image from 'next/image';
import React from 'react';
import OutlineEmailIcon from '@/ui/components/atoms/icons/outline-email-icon';
import FacebookIcon from '@/ui/components/atoms/icons/social/facebook-icon';
import InstagramIcon from '@/ui/components/atoms/icons/social/instagram-icon';

const Escuela = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<div className="max-w-[641px] leading-[24px] text-dark-blue-2">
						<p>
							Es un espacio dedicado a la formación en danza clásica y contemporánea para diversas edades, desde niños hasta adultos. Ubicada en el Centro Histórico de Lima, combina rigor técnico con una visión artística integral.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-green relative">
				<div
					className="px-6 lg:px-[104px] h-[380px] lg:h-full overflow-hidden relative"
				>
					<div className="container">
						<div className="relative pt-[56px] lg:pt-[96px] pb-[96px] lg:pr-16 lg:w-[760px] mr-auto h-full text-white flex flex-row gap-7 leading-[24px] font-normal">
							<div className="basis-[47%]">
								<p className="mb-2 font-bold">
									Programas de Formación
								</p>
								<p className="mb-2">
									La escuela ofrece dos modalidades de estudio:
								</p>
								<ol className="list-outside list-decimal pl-5 space-y-2">
									<li>
										<strong>Programa de Formación en Danza:</strong> Un plan de estudios de cinco años con un enfoque intensivo en danza clásica y contemporánea. Este programa brinda una preparación estructurada, permitiendo a los estudiantes desarrollar habilidades técnicas y artísticas de manera sólida.
									</li>
									<li>
										<strong>Talleres Libres:</strong> Espacios de aprendizaje dirigidos a niños, jóvenes y adultos que desean acercarse a la danza sin necesidad de seguir un programa de formación profesional. Estos talleres incluyen ballet, danza contemporánea y otras disciplinas complementarias.
									</li>
								</ol>
							</div>
							<div className="basis-[53%]">
								<p className="mb-2 font-bold">
									Actividades y Presentaciones
								</p>
								<p className="mb-5">
									Los estudiantes del programa de formación tienen la oportunidad de participar en presentaciones y proyectos especiales, tanto dentro del Centro Cultural de San Marcos como en escenarios externos. Estas actividades permiten una experiencia escénica valiosa y contribuyen a la difusión del arte dancístico.
								</p>
								<p className="mb-2 font-bold">
									Equipo Docente
								</p>
								<p className="mb-2">
									El equipo de la escuela está conformado por docentes altamente calificados, con amplia trayectoria en la enseñanza y la práctica profesional de la danza. Su labor se enfoca en ofrecer una formación integral que abarque tanto la técnica como la interpretación artística.
								</p>
							</div>
						</div>

					</div>
				</div>
				<div className="shrink-0 w-[544px] absolute right-0 top-0 h-full">
					<figure className="relative w-full h-full mx-auto">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_06793377eb.jpg"
							className="object-cover h-full"
							alt="Ballet Investigación"
							fill
							quality={100}
						/>
					</figure>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] bg-white pt-[70px] pb-[26px]">
				<div className="container flex flex-row justify-between gap-x-[68px]">
					<div className="max-w-[664px] leading-[24px] text-dark-blue-2">
						<p className="font-bold">
							Compromiso con la Comunidad
						</p>
						<p>
							La Escuela de Ballet San Marcos reafirma su compromiso con la difusión de la danza a través de programas accesibles, promoviendo el desarrollo artístico y la formación de nuevas generaciones de bailarines en el Perú.
						</p>
						<p className="mb-5">
							De manera periódica, la escuela establece contacto con instituciones interesadas en incorporar la danza como una herramienta de expresión, inclusión y bienestar en la comunidad. Como parte de este compromiso, desarrolla presentaciones y muestras en hospitales, centros de asistencia para adultos mayores y otras instituciones, con el objetivo de acercar el arte a diferentes sectores de la sociedad y generar un impacto positivo a través del movimiento y la creatividad.
						</p>
						<p className="font-bold">
							Elenco de la Escuela de Ballet San Marcos
						</p>
						<p>
							El Elenco de la Escuela de Ballet San Marcos es una selección de alumnos destacados que representan a la institución en diversas presentaciones y proyectos artísticos. A través de esta agrupación, los estudiantes tienen la oportunidad de perfeccionar su formación escénica y experimentar el trabajo en un entorno similar al de una compañía profesional. Su repertorio incluye obras de ballet clásico y danza contemporánea, y su participación en eventos contribuye a la difusión de la danza y al fortalecimiento del vínculo entre la escuela y la comunidad artística.
						</p>
					</div>
					<div className="bg-green-2 text-white rounded-[20px] px-[56px] py-[70px] max-w-[516px]">
						<p className="font-bold">Inscripciones y contacto</p>
						<p className="mb-4">
							Para más información sobre horarios, requisitos y actividades, escríbenos o visita nuestras redes sociales, donde se publican actualizaciones y novedades:
						</p>
						<div className="flex flex-row items-center gap-2 mb-4">
							<a
								className="p-1 rounded-[4px] bg-dark-gray-2"
								href="https://www.facebook.com/ballet.sanmarcos/"
								rel="noreferrer noopener"
								target="_blank"
							>
								<FacebookIcon />
							</a>
							<a
								className="p-1 rounded-[4px] bg-dark-gray-2"
								href="https://www.instagram.com/ballet_unmsm/"
								rel="noreferrer noopener"
								target="_blank"
							>
								<InstagramIcon />
							</a>
							{/* <a
								className="p-1 rounded-[4px] bg-dark-gray-2"
								href={TIKTOK_URL}
								rel="noreferrer noopener"
								target="_blank"
							>
								<TiktokIcon />
							</a>
							<a
								className="p-1 rounded-[4px] bg-dark-gray-2"
								href={YOUTUBE_URL}
								rel="noreferrer noopener"
								target="_blank"
							>
								<YoutubeIcon />
							</a> */}
						</div>
						<div className="flex p-1 gap-2 items-start mb-4">
							<OutlineEmailIcon
								className="shrink-0 mt-[2px]"
								ariaLabel="Contacto"
								color="light"
							/>
							<div>
								<p className="font-bold">
									Contacto
								</p>
								<p className="font-medium break-words">
									ballet.ccsm@unmsm.edu.pe
								</p>
							</div>
						</div>
						<p>
							Actualmente, la coordinación de la Escuela de Ballet San Marcos está a cargo del docente José Luis Aceijas Silva, quien lidera la formación académica y artística del alumnado.
						</p>
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-white py-8 lg:py-[96px] ">
				<div className="container">
					<div className="grid grid-cols-2 gap-6 lg:grid-rows-[561px_403px_379px_821px_446px_431px] xl:grid-rows-[561px_525px_493px_1066px_582px_565px]">
					{/* <div className="grid grid-cols-2 gap-6 lg:grid-rows-[repeat(8,auto)]"> */}
						<div className="col-span-2">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_1_75ca4094eb.jpg"
									className="object-cover"
									// className="w-full"
									alt="Escuela de Ballet 1"
									fill
									quality={100}
									// width="1232"
									// height="561"
								/>
							</figure>
						</div>
						<div className="row-span-2 row-start-2">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_2_ea766e3e7c.jpeg"
									className="object-cover"
									alt="Escuela de Ballet 2"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-start-2">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_3_519a645ce4.jpg"
									className="object-cover"
									alt="Escuela de Ballet 3"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="col-start-2 row-start-3">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_4_59f28ec23a.jpg"
									className="object-cover"
									alt="Escuela de Ballet 4"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="col-span-2 row-start-4">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_5_041e295b52.jpg"
									className="object-cover"
									alt="Escuela de Ballet 5"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-start-5">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_6_37324ffca8.jpg"
									className="object-cover"
									alt="Escuela de Ballet 6"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="col-start-1 row-start-6">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_7_58f2a87c8b.jpg"
									className="object-cover"
									alt="Escuela de Ballet 7"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-span-2 col-start-2 row-start-5">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_escuela_grid_8_19b6743686.jpg"
									className="object-cover"
									alt="Escuela de Ballet 8"
									fill
									quality={100}
								/>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Escuela;
