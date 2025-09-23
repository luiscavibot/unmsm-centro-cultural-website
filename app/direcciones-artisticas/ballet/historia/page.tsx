import SecondaryButton from '@/ui/components/atoms/buttons/secondary-button';
import Title from '@/ui/components/atoms/title';
import Layout from '@/ui/components/organisms/shared/layout';
import Image from 'next/image';
import React from 'react';

const breadcrumbItems = [
	{
		title: 'Inicio',
		path: '/',
	},
	{
		title: 'Direcciones artísticas',
		path: '',
	},
	{
		title: 'Ballet San Marcos',
		path: '/direcciones-artisticas/ballet',
	},
	{
		title: 'Historia de la dirección de Ballet',
		path: '/direcciones-artisticas/ballet/historia',
	},
];

export default function BalletHistoria() {
	return (
		<Layout
			portadaImage="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/ccsm/ballet_portada_fcf0b2ff53.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white">
					<div className="container">
						<div className="max-w-[814px] mx-auto pb-14">
							<Title className="text-center">
								Historia de la dirección de Ballet
							</Title>
							<div className="leading-[24px] text-dark-blue-2 mb-4 space-y-10">
								<div>
									<p className="mb-5">
										El Ballet San Marcos fue fundado en 1964
										por iniciativa de la Universidad
										Nacional Mayor de San Marcos,
										convirtiéndose en la primera institución
										universitaria en el Perú en crear una
										compañía y una escuela de danza. Bajo la
										dirección del maestro Roger Fenonjois,
										de la Ópera de París, se establecieron
										el Ballet Universitario y el
										Conservatorio de Danza de San Marcos con
										el objetivo de ofrecer una formación
										gratuita y completa a futuros
										bailarines, además de mantener en
										actividad un cuerpo de baile
										profesional.
									</p>
								</div>
								<div className="text-right mb-[72px] max-w-[592px] ml-[auto]">
									<q className="font-normal">
										El conservatorio de danza de San Marcos
										tiene por misión la preparación completa
										y gratuita de futuros bailarines, así
										como el mantenimiento en actividad de un
										cuerpo de baile profesional. Su ambición
										es la de crecer, superar y alcanzar esa
										calidad legítima que hace del arte de la
										danza el vehículo cultural más completo.
									</q>
									<cite className="block font-semibold">
										Roger Fenonjois (Director Fundador)
									</cite>
								</div>
								<div>
									<p className="mb-5">
										Desde sus inicios, el Ballet San Marcos
										se enfocó en el ballet clásico, contando
										con la guía de destacados maestros que
										marcaron su desarrollo. Entre ellos,
										Alexander Plisetski, reconocido pedagogo
										ruso y exbailarín del Bolshoi, quien
										aportó con su conocimiento técnico y
										estilístico en la formación de los
										bailarines. También fueron fundamentales
										en esta etapa Rosemary Helliwell,
										destacada pedagoga en la técnica
										clásica; Iacob Lascú, maestro rumano con
										una visión rigurosa de la enseñanza del
										ballet; y Sara Pardo, importante figura
										de la danza en el Perú. Otros maestros
										que contribuyeron con sus enseñanzas al
										Ballet San Marcos fueron Jane
										Devonshire, quien dejó su huella en la
										enseñanza del ballet dentro de la
										institución.
									</p>

									{/* <p className="mb-5">
										Una de las metas del Ballet San Marcos
										está dirigida a la difusión de la danza
										entre los estudiantes sanmarquinos en el
										campus universitario. Esto se ha hecho
										posible gracias a los auditorios y otros
										espacios con los que cuenta la
										Universidad.
									</p> */}
								</div>
								<div>
									<figure className="relative h-[400px] max-w-[644px] w-full md:w-[644px] rounded-3xl overflow-hidden mx-auto">
										<Image
											src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-ballet-1.webp"
											className="object-cover h-full"
											alt="ballet 1"
											fill
											quality={100}
										/>
									</figure>
								</div>
								<div>
									<p className="mb-5">
										En 1972, Vera Stastny asumió la
										dirección del Ballet San Marcos,
										marcando un hito en su historia al
										introducir la danza contemporánea en la
										compañía. Bajo su liderazgo, se
										diversificó el repertorio y se impulsó
										un enfoque innovador en la formación de
										los bailarines, alineado con las
										tendencias internacionales. Su gestión,
										que concluyó en 2018, consolidó al
										Ballet San Marcos como un referente en
										la danza contemporánea en el país,
										ampliando su impacto artístico y
										pedagógico.
									</p>
									<p className="mb-5">
										A partir de los años 70, el Ballet San
										Marcos incorporó la danza contemporánea
										a su entrenamiento y repertorio,
										ampliando así su propuesta artística.
										Desde entonces, la compañía ha apostado
										por la creatividad, la investigación en
										la danza y la actualización constante
										con las tendencias internacionales. Para
										ello, ha contado con la colaboración de
										reconocidos coreógrafos y maestros
										internacionales, como Royston Maldoom,
										coreógrafo británico famoso por su
										trabajo en danza comunitaria; Dana Tai
										Soon Burgess, coreógrafo estadounidense
										de origen coreano con una visión que
										fusiona la danza contemporánea con la
										exploración de la identidad cultural; y
										Christopher Roman, bailarín y coreógrafo
										que trabajó en el Frankfurt Ballet bajo
										la dirección de William Forsythe.
									</p>
									<p className="mb-5">
										También han contribuido Francisco
										Centeno, coreógrafo costarricense;
										Tamara McLorg, coreógrafa británica
										creadora de la obra &quot;Añoranza&quot;
										para el Ballet San Marcos; Marc
										Foeringer, coreógrafo suizo con
										propuestas innovadoras en la danza
										contemporánea; Rogelio López, coreógrafo
										costarricense que en 2001 creó las
										piezas &quot;Rojísimo sobre blanco&quot;
										y &quot;El abrazo nuestro de cada
										día&quot; durante su residencia en la
										compañía; Susana Linke, reconocida
										intérprete de la danza moderna alemana;
										Healther Cooper y Brian Fisher, ambos
										con importantes aportes a la danza
										contemporánea.
									</p>
									<p className="mb-5">
										En 2024, el Ballet San Marcos conmemoró
										sus 60 años de fundación institucional
										con el espectáculo Resurgir, presentado
										el 17 de junio en el Gran Teatro
										Nacional del Ministerio de Cultura. Este
										evento incluyó cuatro piezas
										coreográficas que reflejaron la
										diversidad y riqueza artística de la
										institución. Ese mismo año, el Ballet
										San Marcos participó en Danza Nueva,
										edición XXXVI, organizado, donde
										presentó Ello Sensible, obra compuesta
										por tres piezas coreográficas
										especialmente pensadas para el festival.
									</p>
								</div>
								<div>
									<figure className="relative h-[400px] max-w-[644px] w-full md:w-[644px] rounded-3xl overflow-hidden mx-auto">
										<Image
											src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-ballet-2.webp"
											className="object-cover h-full"
											alt="ballet 2"
											fill
											quality={100}
										/>
									</figure>
								</div>
								<div>
									<p className="mb-5">
										El Ballet San Marcos mantiene un firme
										compromiso con la difusión de la danza
										dentro y fuera del campus universitario,
										desarrollando una intensa labor de
										proyección nacional e internacional. En
										los últimos años, ha fortalecido su
										presencia en escenarios locales y ha
										establecido alianzas estratégicas con
										instituciones culturales y educativas
										que contribuyen al desarrollo de la
										danza en el país. A través de sus redes
										sociales y plataformas digitales, ha
										promovido la visibilidad de sus
										actividades y proyectos, logrando una
										mayor conexión con el público y la
										comunidad artística.
									</p>
									<p className="mb-5">
										Actualmente, el Ballet San Marcos
										continúa consolidándose como un
										referente en la escena dancística
										nacional. La Escuela de Ballet San
										Marcos ofrece formación continua en
										danza clásica y contemporánea a la
										comunidad sanmarquina y al público en
										general. Gracias a su labor constante e
										ininterrumpida, el Ballet San Marcos
										sigue siendo una institución clave en la
										promoción y desarrollo de la danza en el
										Perú.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-[104px] gap-5 bg-green text-white py-8 lg:py-[45px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-contactanos.svg')] bg-no-repeat bg-[-123px_10px]">
					<div className="container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
						<div className="flex flex-col lg:flex-row lg:items-center justify-center gap-2 lg:gap-8">
							<h2 className="text-[24px] lg:text-[32px] font-semibold leading-[normal] lg:max-w-[416px]">
								Explora y aprende en el Centro Cultural de San
								Marcos
							</h2>
							<p className="max-lg:text-sm font-normal leading-[24px] lg:max-w-[464px]">
								Descubre un mundo de conocimiento, arte y
								cultura con nuestras actividades exclusivas
								¡Únete y sé parte de nuestra comunidad!
							</p>
						</div>
						<div className="flex flex-col gap-y-4">
							<SecondaryButton
								type="internal-link"
								href="/cursos-y-talleres"
								theme="dark"
								label="Cursos y talleres"
							/>
							<SecondaryButton
								type="internal-link"
								href="/agenda-cultural"
								theme="dark"
								label="Eventos"
							/>
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
}
