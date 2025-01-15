import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
import Title from '@/infrastructure/ui/components/atoms/title';
import Layout from '@/infrastructure/ui/components/organisms/shared/layout';
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
		title: 'Dirección de ballet',
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
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/ballet_unmsm_25d0dcad56.jpg"
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
										La Universidad Nacional Mayor de San
										Marcos fue la primera universidad en el
										país en apoyar la danza cuando, en 1964,
										creó por resolución Rectoral Nº 22024
										una Compañía y una escuela de danza, que
										llevaron el nombre de Ballet
										Universitario y Conservatorio de danza
										de San Marcos, contratando al maestro
										Roger Fenonjois, de la Ópera de París,
										para dirigir el proyecto.
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
										A fin de llegar a esas metas propuestas
										por su director fundador, el Ballet San
										Marcos se ha dedicado a ser creativo y
										original en sus propuestas
										coreográficas, estimular la
										investigación de la realidad nacional y
										también mantenerse informado de las
										tendencias artísticas internacionales
										del momento.
									</p>
									<p className="mb-5">
										En los primeros años, el Ballet San
										Marcos se dedicó al Ballet Clásico y a
										principios de los años 1970 incorporó la
										técnica de la Danza Contemporánea al
										entrenamiento del elenco y al currículo
										de su escuela. Reconocidos coreógrafos
										fueron invitados a trabajar con el joven
										elenco y así el repertorio de la
										compañía empezó a desarrollarse. Gracias
										al camino trazado por estos
										experimentados creadores, los bailarines
										formados en la escuela y los miembros de
										la Compañía empezaron a trabajar sus
										propias propuestas artísticas. En la
										actualidad, el elenco ha seguido
										recibiendo de manera continua la visita
										de importantes coreógrafos invitados que
										refuerzan la superación y el crecimiento
										de una generación de coreógrafos
										inspirados en la cultura nacional y
										universal.
									</p>
									<p className="mb-5">
										Una de las metas del Ballet San Marcos
										está dirigida a la difusión de la danza
										entre los estudiantes sanmarquinos en el
										campus universitario. Esto se ha hecho
										posible gracias a los auditorios y otros
										espacios con los que cuenta la
										Universidad.
									</p>
								</div>
								<div>
									<figure className="relative h-[400px] w-[644px] rounded-3xl overflow-hidden mx-auto">
										<Image
											src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-ballet-1.webp"
											className="object-cover h-full"
											alt="ballet 1"
											layout="fill"
											quality={100}
										/>
									</figure>
								</div>
								<div>
									<p className="mb-5">
										Desde el año 2003, el Ballet San Marcos
										realiza una importante labor social,
										presentándose en distritos como Comas,
										Los Olivos, Independencia, entre otros,
										además de muchas otras actividades de
										proyección hacia la comunidad.
									</p>
									<p className="mb-5">
										La Escuela de Ballet San Marcos funciona
										todo el año. Se imparten talleres de
										danza clásica y danza contemporánea
										dirigidos tanto a los miembros de la
										comunidad sanmarquina, como al público
										en general, abarcando diferentes edades
										y niveles.
									</p>
									<p className="mb-5">
										La danza es, y ha sido siempre, un
										importante medio de comunicación para el
										hombre. Desde las danzas rituales,
										pasando por los cortejos y llegando a la
										pura expresión artística teatral, la
										danza juega un importante papel en el
										desarrollo del ser humano.
									</p>
									<p className="mb-5">
										El ballet surge en las cortes del
										Renacimiento en el siglo XVI. Gracias al
										auspicio de Luis XIV de Francia, quien
										en 1661 establece la Real Academia de la
										Danza, aparecen los primeros bailarines
										profesionales que llevan la danza de las
										cortes hacia los teatros. Igualmente
										surgen los primeros teóricos, Jean
										Georges Noverre y Carlo Blasis. Durante
										los siglos XVIII y XIX, llegan a Rusia
										profesores de ballet italianos y
										franceses quienes, apoyados por la
										Corona de los Romanov, llevan el ballet
										a su máximo esplendor. Para el siglo XX,
										el ballet se populariza en Rusia, de
										donde se exportaron algunos de los más
										grandes exponentes hacia todo el mundo.
									</p>
								</div>
								<div>
									<figure className="relative h-[400px] w-[644px] rounded-3xl overflow-hidden mx-auto">
										<Image
											src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-ballet-2.webp"
											className="object-cover h-full"
											alt="ballet 2"
											layout="fill"
											quality={100}
										/>
									</figure>
								</div>
								<div>
									<p className="mb-5">
										Al mismo tiempo surge en Estados Unidos
										y Alemania, la Danza Moderna, una nueva
										forma de bailar que potenciaba la libre
										expresión representativa del nuevo
										siglo. Es precisamente en los Estados
										Unidos donde Margaret D'Houbler, quien
										trabaja en la Universidad de Wisconsin,
										en el departamento de Educación Física,
										introduce el estudio de la danza en el
										ámbito universitario. Desde allí se han
										constituido los programas de danza en
										las universidades en los Estados Unidos
										y en países en todo el mundo.
									</p>
									<p className="mb-5">
										La danza es posiblemente una de las
										primeras artes a través de la cual se
										comunica el ser humano, y es importante
										destacar que tal vez sea la más
										simbólica ya que, al prescindir
										básicamente de la palabra, acentúa tal
										necesidad por medio de la trasmisión
										gestual. Es tan antigua como el hombre,
										y siempre ha estado en estrecha relación
										con el contexto en el cual se ha
										desarrollado.
									</p>
									<p className="mb-5">
										La vanguardia universitaria en el Perú,
										dentro de la Universidad Nacional Mayor
										de San Marcos, ha quedado representada
										con Ballet San Marcos con una labor
										constante e ininterrumpida, artística,
										seria y comprometida por más de 57 años.
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
								Explora y aprende en el Centro Cultural San
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
