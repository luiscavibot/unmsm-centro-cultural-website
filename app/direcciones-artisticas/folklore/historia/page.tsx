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
		title: 'Centro Universitario de Folklore UNMSM (CUF)',
		path: '/direcciones-artisticas/folklore',
	},
	{
		title: 'Historia de la dirección del Centro Universitario de Folklore (CUF)',
		path: '/direcciones-artisticas/folklore/historia',
	},
];

export default function FolkloreHistoria() {
	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/cuf_portada_a1817a5bdd.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white">
					<div className="container">
						<div className="max-w-[814px] mx-auto pb-14">
							<Title className="text-center max-w-[680px] mx-auto">
								Historia de la dirección del Centro
								Universitario de Folklore (CUF)
							</Title>
							<div className="leading-[24px] text-dark-blue-2 mb-4 space-y-14">
								<div>
									<p className="mb-5">
										La formación del Centro Universitario de
										Folklore (CUF) tiene sus raíces en la
										Peña Folklórica de San Marcos que
										dirigió la reconocida musicóloga Rosa
										Alarco Larrabure (1911 -1980). Sin
										embargo, este Centro se forja
										principalmente por la iniciativa e
										impulso decisivo de los estudiantes
										sanmarquinos de la década de los 70s,
										muchos de los cuales aún siguen
										desarrollando la ardua labor de trabajo
										con el folklore.
									</p>
									<p className="mb-5">
										El CUF, realizó como una de sus primeras
										actividades artísticas una función a
										beneficio de los damnificados del
										terremoto en el departamento de Ancash,
										la cual se llevó a cabo en el auditorio
										del Colegio Santa Úrsula de San Isidro
										el 16 de julio de 1970, cuyos fondos
										económicos recaudados fueron destinados
										a los damnificados. Siendo el punto de
										partida el año de 1970 ya para el año
										1971 el Elenco de Danzas Folklóricas y
										la Estudiantina de San Marcos debutan en
										el Teatro Segura en el mes de setiembre.
										Para 1974 la Universidad extiende el
										reconocimiento oficial mediante RR N°
										42819, al Centro Universitario de
										Estudio y Difusión del Folklore Nacional
										de la Universidad Nacional Mayor de San
										Marcos (CUEDFUSM), estableciendo la
										formalización necesaria para la
										continuación del trabajo artístico y
										siendo su primer director el Dr. Josafat
										Roel Pineda.
									</p>
								</div>
								<div>
									<figure className="relative h-[400px] max-w-[644px] w-full md:w-[644px] rounded-3xl overflow-hidden mx-auto">
										<Image
											src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-folklore-1.webp"
											className="object-cover h-full"
											alt="ballet 1"
											fill
											quality={100}
										/>
									</figure>
								</div>
								<div>
									<p className="mb-5">
										Los logros más saltantes de esta década
										de formación institucional es la
										creación —en 1975— de la Escuela de
										Capacitación en Folklore (que hasta el
										día de hoy se dedica a la enseñanza de
										la música y danza folklórica) y la
										implementación, en 1977, del Conjunto de
										Zampoñas de San Marcos, grupo de gran
										trayectoria artística y pionera del
										movimiento de sikuris en Lima
										Metropolitana.
									</p>
									<p className="mb-5">
										El desarrollo institucional del CUF y el
										trabajo artístico durante la década de
										los 80s, se apoya casi exclusivamente en
										el impulso de la difusión del folklore
										en los sectores y organizaciones
										populares. También existen esbozos de
										una teorización del folklore desde una
										perspectiva dialéctica de la sociedad.
										Esta década, conocida como la más
										radical ideológicamente, así como la
										represión estatal, la crisis económica y
										conceptual, enfrasca posibilidades
										mayores de desarrollo institucional.
									</p>
								</div>
								<div>
									<figure className="relative h-[400px] max-w-[644px] w-full md:w-[644px] rounded-3xl overflow-hidden mx-auto">
										<Image
											src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-folklore-2.webp"
											className="object-cover h-full"
											alt="ballet 2"
											fill
											quality={100}
										/>
									</figure>
								</div>
								<div>
									<p className="mb-5">
										A mediados de la década de los 90s, en
										1996, bajo el régimen de la Comisión
										Reorganizadora de San Marcos, es también
										reestructurado este centro,
										denominándose desde entonces Centro
										Universitario de Folklore (CUF) a pedido
										de su director Edgar Meza Aréstegui.
										Esta reestructuración significó grandes
										e importantes cambios en la conformación
										artística del CUF, que desde entonces
										empezó a contar con tres elencos de
										danzas y seis elencos de música. Además
										de reimpulsar la Escuela de Capacitación
										en Folklore, se inauguran novedosos
										cursos de gran trascendencia en el
										ámbito formativo, como es el caso de los
										Cursos Talleres de Capacitación y
										Actualización Docente en Folklore.
									</p>
									<p className="mb-5">
										A mediados de la década del 2000 el CUF
										ingresa a una nueva etapa en su
										desarrollo, bajo la dirección del
										Licenciado Carlos Sánchez Huaringa. Se
										establece su desarrollo estratégico
										sobre la potencialidad de tres
										principales áreas de acción:
									</p>
									<p className="mb-5">
										<span className="font-bold">
											1. Difusión
										</span>
										<br />
										<br />
										El desarrollo y la prolífica actividad
										de sus elencos artísticos desde el
										nacimiento de la institución,
										ciertamente ha contribuido a la
										formación de una sesgada imagen del CUF.
										Presentándola como una institución
										dedicada exclusivamente a la difusión de
										la danza y la música folklórica. Esto se
										debe a la potencialidad (sobre todo
										cuantitativa) de sus elencos de danza y
										música bastante reconocidos en el medio,
										con gran actividad y un buen nivel
										artístico.
									</p>
									<p className="mb-5">
										<span className="font-bold">
											2. Educación
										</span>
										<br />
										<br />
										La tarea educativa y formativa en esta
										oportunidad ha sido asumida con la
										seriedad y formalidad del caso por la
										Escuela de Capacitación Docente en
										Folklore del CUF, elaborando una
										reformulada, actualizada e integral
										currícula que viene funcionando con
										buena performance. Es bueno mencionar lo
										importantes que han sido el Cursos
										Taller Internacional de Capacitación
										Docente en Folklore y el Curso Especial
										de Actualización, que solo se dan una
										vez al año, ambos nos han servido para
										entender y atender la demanda de un
										público y un intenso mercado ávido en la
										relación educación-folklore. Esta
										renovada Escuela llega al público
										interesado vía dos modalidades:
										<br />
									</p>
									<ol className="list-decimal list-outside pl-5">
										<li>
											La Escuela de Capacitación Docente
											en Folklore, cuyo objetivo es la
											formación de profesionales
											(docentes) de nivel técnico mediante
											el desarrollo de un paquete de
											cursos integrales y de larga
											duración.
										</li>
										<li>
											Los Cursos de extensión o cursos
											libres, cuyo objetivo es la
											especialización mediante el dictado
											de cursos exclusivos y
											complementarios de corta duración.
										</li>
									</ol>
								</div>
								<div>
									<figure className="relative h-[400px] max-w-[644px] w-full md:w-[644px] rounded-3xl overflow-hidden mx-auto">
										<Image
											src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-folklore-3.webp"
											className="object-cover h-full"
											alt="ballet 2"
											fill
											quality={100}
										/>
									</figure>
								</div>
								<div>
									<p className="mb-5">
										<span className="font-bold">
											3. Investigación
										</span>
										<br />
										<br />
										La tarea de producción académica,
										teórica e intelectual del CUF ha sido
										muy poco desarrollado por lo complejo y
										conflictivo del tema y por la falta de
										presupuesto. Sin embargo, el impulso de
										esta área es una tarea indispensable por
										lo que lanzamos algunas acciones
										concretas:
										<br />
										<br />
										Publicación semestral del boletín
										“Haylli”, que contiene artículos cortos,
										avances de investigación, noticias,
										reseñas, resúmenes, informes de trabajo,
										etc. Realización del Ciclo de Impulso
										Teórico, que comprende pequeños eventos
										como conferencias y conversatorios
										especializados dirigidos a los alumnos,
										integrantes del CUF, profesores y
										público interesado.
										<br />
										<br />
										Publicación de materiales educativos
										exclusivos para profesores de danzas.
										Publicación de materiales audiovisuales
										de música y danza en formato DVD;
										realización de documentales de fiestas y
										danzas tradicionales del Perú y su
										edición digital en DVD así como para las
										redes. Publicación de la revista (libro)
										del CUF “Folklore: arte, cultura y
										sociedad”, donde se compilan artículos
										de gran nivel académico.
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
								Explora y aprende en el Centro Cultural de San Marcos
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
