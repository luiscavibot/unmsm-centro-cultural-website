import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
import Title from '@/infrastructure/ui/components/atoms/title';
import Layout from '@/infrastructure/ui/components/organisms/shared/layout'
import Image from 'next/image';
import React from 'react'

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
		title: 'Dirección de Teatro universitario',
		path: '/direcciones-artisticas/teatro',
	},
	{
		title: 'Historia de la dirección de Teatro universitario',
		path: '/direcciones-artisticas/teatro/historia',
	},
];

export default function TeatroHistoria() {
  return (
	<Layout
		portadaImage="https://ccsm.unmsm.edu.pe/ccsm/agenda_banner_8a74d62f5c.jpg"
		breadcrumbItems={breadcrumbItems}
	>
		<>
			<div className="px-4 lg:px-[104px] bg-white">
				<div className="container">
					<div className="max-w-[814px] mx-auto pb-14">
						<Title className="text-center max-w-[482px] mx-auto">
							Historia de la dirección del Teatro universitario
						</Title>
						<div className="leading-[24px] text-dark-blue-2 mb-4 space-y-14">
							<div>
								<p className="mb-5">
									Los orígenes del Teatro de San Marcos se remontan a la Dirección de Extensión Universitaria de esta casa de estudios, que en el año 1946 tenía como Director al literato Manuel Beltroy. Éste recibió a un grupo de inquietos estudiantes sanmarquinos del Centro Federado de la Facultad de Letras que había decidido formar el Teatro Universitario de San Marcos, encargando la tutela de este proyecto a Don Mario Rivera (posteriormente reconocido Director Teatral y Director de la Escuela Nacional de Arte Dramático).
								</p>
								<p className="mb-5">
									Consta en el Archivo Histórico de la Universidad, el 4 de septiembre como la fecha formal de fundación del Teatro Universitario de San Marcos (TUSM). Su primera presentación fue “La Numancia” de don Miguel De Cervantes Saavedra, con la dirección de Mario Rivera, en el Teatro Municipal, ese mismo año. Siguieron posteriormente otros trabajos como “El convidado de Piedra”, “El burlador de Sevilla”, “Asesinato en la catedral”, entre otras.
								</p>
								<p className="mb-5">
									Los ensayos y reuniones del naciente Teatro de San Marcos se realizaban en el Salón de Grados de la Casona Sanmarquina; luego se les asignó un espacio en el Instituto de Filología y Lingüística de la Facultad de Letras, ubicado en la antigua calle Fano N° 833 (hoy Jirón Lampa, donde se ubica actualmente la Dirección de Teatro de San Marcos (TUSM).
								</p>
							</div>
							<div>
								<figure className="relative h-[400px] w-[644px] rounded-3xl overflow-hidden mx-auto">
									<Image
										src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-teatro-1.webp"
										className="object-cover h-full"
										alt="ballet 1"
										layout="fill"
										quality={100}
									/>
								</figure>
							</div>
							<div>
								<p className="mb-5">
									Los orígenes del Teatro de San Marcos se remontan a la Dirección de Extensión Universitaria de esta casa de estudios, que en el año 1946 tenía como Director al literato Manuel Beltroy. Éste recibió a un grupo de inquietos estudiantes sanmarquinos del Centro Federado de la Facultad de Letras que había decidido formar el Teatro Universitario de San Marcos, encargando la tutela de este proyecto a Don Mario Rivera (posteriormente reconocido Director Teatral y Director de la Escuela Nacional de Arte Dramático).
								</p>
								<p className="mb-5">
									Consta en el Archivo Histórico de la Universidad, el 4 de septiembre como la fecha formal de fundación del Teatro Universitario de San Marcos (TUSM). Su primera presentación fue “La Numancia” de don Miguel De Cervantes Saavedra, con la dirección de Mario Rivera, en el Teatro Municipal, ese mismo año. Siguieron posteriormente otros trabajos como “El convidado de Piedra”, “El burlador de Sevilla”, “Asesinato en la catedral”, entre otras.
								</p>
								<p className="mb-5">
									Los ensayos y reuniones del naciente Teatro de San Marcos se realizaban en el Salón de Grados de la Casona Sanmarquina; luego se les asignó un espacio en el Instituto de Filología y Lingüística de la Facultad de Letras, ubicado en la antigua calle Fano N° 833 (hoy Jirón Lampa, donde se ubica actualmente la Dirección de Teatro de San Marcos (TUSM).
								</p>
								<p className="mb-5">
									No se tiene un registro detallado del trabajo del Teatro Universitario de San Marcos en los siguientes años, pero en 1956, el Dr. Fernando Tola, Director del Instituto de Filología y Lingüística le encargó la Dirección del TUSM, a Humberto Napurí, un joven estudiante de la Facultad de Medicina, que compartía sus estudios en San Fernando con el trabajo escénico, asumiendo dicha responsabilidad durante dos años. Cuando éste asumió sus funciones sólo encontró una habitación apilada de trajes que pertenecían al último montaje. Esta habitación se convirtió entonces en la sala de ensayos y el vestuario pasó a formar parte de los bienes del Teatro Universitario de San Marcos. Fue entonces cuando se integró un nuevo grupo de trabajo compuesto por estudiantes sanmarquinos de diferentes facultades.
								</p>
							</div>
							<div>
								<figure className="relative h-[400px] w-[644px] rounded-3xl overflow-hidden mx-auto">
									<Image
										src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-teatro-2.webp"
										className="object-cover h-full"
										alt="ballet 2"
										layout="fill"
										quality={100}
									/>
								</figure>
							</div>
							<div>
								<p className="mb-5">
									“Todos los Hijos de Dios Tienen Alas” de Eugene O&apos;Neill fue la primera obra que se presentó y fue dirigida por Humberto Napurí. Los montajes se desarrollaban en el Salón General de la Casona de San Marcos y luego en el Teatro Segura. Es durante esta gestión que también se da inicio a la formación de la Biblioteca del Teatro que poco a poco fue enriqueciendo su bibliografía, con textos y revistas de la época, documentos que hoy se encuentran en el Archivo de Teatro Peruano de la Biblioteca España de las Artes.
								</p>
								<p className="mb-5">
									En 1958, asumió la Dirección del Teatro Universitario, Guillermo Ugarte Chamorro (quien hasta 1957 había sido Director de la desaparecida Escuela Nacional de Arte Escénico - ENAE), iniciando así un largo periodo de 30 años de gestión a su cargo. Tiempo durante el cual el TUSM tuvo una labor permanente, donde la promoción y difusión de las actividades teatrales se trasladaron a sectores alejados de la población.
								</p>
								<p className="mb-5">
									Cuando en 1988, Ugarte Chamorro entregó el cargo, el TUSM se hallaba consolidado. Había adquirido renombre nacional e internacional y lo más importante: su trabajo había llegado a los rincones más alejados del país. Posteriormente -hasta el año 1992- asumió la gestión del TUSM, Eduardo Hopkins, profesor de la Facultad de Letras y Ciencias Humanas de la UNMSM.
								</p>
							</div>
							<div>
								<p className="mb-5">
									En 1992, la Dirección del TUSM se transfiere al actor y docente Hernando Cortés, quién presentó y dirigió “Bansi ha muerto”, “Voy a hablar de la esperanza”, “El Teatro de la antigua farsa”, “Con los pies de barro”, “Fin de semana”, etc. Su gestión terminó en 1997.
								</p>
								<p className="mb-5">
									La historia del TUSM se ve asociada desde 1995 al Centro Cultural de San Marcos, cuando este es creado mediante Resolución Rectoral luego de la varios sucesos históricos para la propia Universidad, siendo entre ellos, el ser reconocida como la universidad más antigua de América, y la Casona en sí misma como Patrimonio Cultural de la Humanidad.
								</p>
							</div>
							<div>
								<figure className="relative h-[400px] w-[644px] rounded-3xl overflow-hidden mx-auto">
									<Image
										src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-teatro-3.webp"
										className="object-cover h-full"
										alt="ballet 2"
										layout="fill"
										quality={100}
									/>
								</figure>
							</div>
							<div>
								<p className="mb-5">
									En 1998, la Dirección del TUSM es asumida por el actor Walter Zambrano, quien durante su gestión realizó una ardua labor de difusión cultural a través de producciones teatrales, presentaciones de teatro para niños y adultos con elencos independientes, diversos talleres de teatro, festivales e intercambios culturales, así como charlas y exposiciones periódicas. Durante este periodo se organizaron también diversos festivales, así en 1999, organizó el Festival de Teatro Universitario Sanmarquino (FETUSM). Posteriormente se organizó el Primer Festival Metropolitano de Teatro Universitario a fin de intercambiar experiencias con las diferentes universidades de la capital. En noviembre del 2000 el TUSM realizó el Encuentro Universitario de Unipersonal de Teatro, que contó con la participación de actores independientes, reconocidos intérpretes del unipersonal y de diversas universidades de Lima. En este periodo se continuó con el trabajo de intercambio cultural con invitaciones a grupos y actores extranjeros. Asimismo, en julio del 2001, el TUSM participó en la Décimo Segunda Edición del Festival Internacional de Teatro en Mónaco. Igualmente, el TUSM logró obtener su ingreso a la Asociación Internacional de teatro Amateur (AITA/IATA) y tuvo bajo su responsabilidad la dirección de la Alianza Regional Sudamericana de Teatro Amateur (SARA), siendo invitado periódicamente a participar en diferentes festivales internacionales. En enero de 2002, asume la Dirección del Teatro, Ana Zavala, coreógrafa y bailarina del Grupo de Teatro Experimental Integro, uno de los más reconocidos a nivel internacional por su trabajo de investigación en Teatro Contemporáneo. En julio del 2007, asume la Dirección del Teatro de San Marcos, el actor y Director de Teatro Luis Ramírez, quien establece como lema de trabajo “De la tradición a la experimentación”; con la finalidad de estimular la creación desde sus más diversas búsquedas, formas o modos. En el año 2007, la reconocida actriz Gabriela Velásquez asumió la dirección del TUSM y posteriormente hicieron lo propio los reconocidos directores teatrales Ernesto Ráez y Mario Delgado.
								</p>
								<p className="mb-5">
									En el 2012 es designado el actor Augusto Cáceres Álvarez, quien inicia sus actividades realizando una convocatoria abierta para alumnos sanmarquinos, logrando conformar el Elenco del TUSM. Teniendo como producciones “La Excepción y la Regla”, “La Casa de Bernarda Alba”, “Ipacankure”, “El Curioso Caso del Cuerno de San Dios”, “Nina”, “Dos Viejas Van por la Calle”, “Medea”, “Muerte Accidental de un Anarquista”, “El Cóndor Pasa”, “Prohibido Suicidarse en Primavera”, ¿Qué Tiene Miguel? entre otras. Asimismo, conformó el Elenco de Clown del TUSM, realizando obras como: “Te amo”, “Defectos”, “Los raros”, “Varieté” y ¿Están ahí?.
								</p>
							</div>
							<div>
								<figure className="relative h-[400px] w-[644px] rounded-3xl overflow-hidden mx-auto">
									<Image
										src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-teatro-4.webp"
										className="object-cover h-full"
										alt="ballet 2"
										layout="fill"
										quality={100}
									/>
								</figure>
							</div>
							<div>
								<p className="mb-5">
									Desde mayo del 2024 asume la dirección del Teatro Universitario de San Marcos, doña Cristina Lozano Cuba, Licenciada en Formación Artística, Especialidad Teatro, Mención Actuación, con el firme objetivo de ampliar el ámbito de trabajo del TUSM. De esta manera se apertura un espacio de investigación junto con el Elenco TUSM, el “Centro de Investigación Teatral del Teatro Universitario de San Marcos” (CITTUSM) y se impulsa la realización del “PRIMER INTERFACULTADES DE TEATRO SANMARQUINO”. Evento que tuvo como jurado al destacado dramaturgo peruano, César de María, a la escritora y artista escénica Gimena Vartu y a uno de nuestros actores más reconocidos del Perú, Reynaldo Arenas. Asimismo, con el objetivo de motivar, promocionar y difundir la creatividad en el arte escénico universitario, se gestionó, en el marco del 78° Aniversario del TUSM, la participación de los elencos de Teatro de la Universidad Nacional de Ingeniería, Universidad Nacional Federico Villarreal, Universidad Nacional de Cañete, Universidad Norbert Wiener y la Universidad César Vallejo.
								</p>
								<p className="mb-5">
									Se continua con las producciones teatrales, de las cuales han destacado “Mal de amores” obteniendo el premio a “Mejor Montaje” en el FESTUNI - 2023 y “Don Dimas de La Tijereta” adaptación de la tradición peruana de Ricardo Palma por Áureo Sotelo Huerta obteniendo el premio a “Mejor Montaje y Mejor Actriz” en el FESTUNI - 2024.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-green text-white py-8 lg:py-[45px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-contactanos.svg')] bg-no-repeat bg-[-123px_10px]">
				<div className="container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
					<div className="flex flex-col lg:flex-row lg:items-center justify-center gap-2 lg:gap-8">
						<h2 className="text-[24px] lg:text-[32px] font-semibold leading-[normal] lg:max-w-[416px]">Explora y aprende en el Centro Cultural San Marcos</h2>
						<p className="max-lg:text-sm font-normal leading-[24px] lg:max-w-[464px]">Descubre un mundo de conocimiento, arte y cultura con nuestras actividades exclusivas ¡Únete y sé parte de nuestra comunidad!</p>
					</div>
					<div className="flex flex-col gap-y-4">
						<SecondaryButton type="internal-link" href="/cursos-y-talleres" theme="dark" label="Cursos y talleres" />
						<SecondaryButton type="internal-link" href="/agenda-cultural" theme="dark" label="Eventos" />
					</div>
				</div>
			</div>
		</>
	</Layout>
  )
}
