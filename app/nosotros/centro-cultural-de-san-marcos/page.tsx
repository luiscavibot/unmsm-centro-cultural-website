import SecondaryButton from '@/ui/components/atoms/buttons/secondary-button';
import Title from '@/ui/components/atoms/title';
import Layout from '@/ui/components/organisms/shared/layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const breadcrumbItems = [
	{
		title: 'Inicio',
		path: '/',
	},
	{
		title: 'Nosotros',
		path: '',
	},
	{
		title: 'Centro Cultural de San Marcos',
		path: '/nosotros/centro-cultural-de-san-marcos',
	},
];

export default function DependenciasAdministrativas() {
	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/ccsm_portada_7eac6e60a4.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white">
					<div className="container">
						<div className="max-w-[814px] mx-auto pb-14">
							<Title className="text-center">
								Centro Cultural de San Marcos
							</Title>
							<div className="leading-[24px] text-dark-blue-2">
								<p>
									El Centro Cultural de San Marcos (CCSM), fundado el 29 de noviembre de 1995, es un espacio clave en la vida cultural limeña, albergando exposiciones, producciones artísticas y literarias. Viene desarrollando proyectos en conexión con la historia sanmarquina, integrando reconocidos elencos como el Coro, Teatro, Folklore, Ballet y la Banda Sinfónica Universitaria de San Marcos. Además, cuenta con la Biblioteca España de las Artes, la Dirección de Cine y Producción Audiovisual, y la Dirección de Turismo, que promueve el patrimonio sanmarquino. Sus dos museos, el de Arqueología y Antropología y el de Arte de San Marcos, resguardan valiosas colecciones. Con una intensa actividad artística que incluye talleres, conciertos y presentaciones escénicas, el CCSM vincula el pasado con el presente cultural y fomenta el turismo, consolidándose como un referente cultural y académico en el país.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div id="test" className="bg-white flex flex-col max-md:gap-y-6 max-md:px-4 max-md:[&>div]:rounded-2xl max-md:[&>div]:overflow-hidden [&>div]:z-0 max-md:pb-20">
					<div className="relative md:px-6 lg:px-[104px] md:py-[56px] lg:py-[86px] h-[200px] md:h-[360px] lg:h-[384px] group">
						<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/banda_universitaria_ccsm_portada_5fdd4aad8a.webp"
								className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
								alt="events"
								fill
								quality={100}
							/>
						</figure>
						<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
						<div className="container h-full flex items-center justify-center max-md:hidden">
							<div className="max-w-[652px] text-center text-white">
								<h2 className="text-[24px] font-bold leading-[36px]">
									Banda Universitaria de Música
								</h2>
								<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
									Es una unidad artística, cultural y protocolar. Su creación data del año 1996, cuando las autoridades sanmarquinas concibieron la idea de dotar a nuestra alma máter con una banda de música, con la finalidad de que esta agrupe a los alumnos interesados en este rubro y así el conjunto pueda participar en los actos protocolares e invitaciones oficiales de diversa índole.
								</p>
								<SecondaryButton
									type="internal-link"
									href="/direcciones-artisticas/banda-universitaria"
									theme="dark"
									label="Explorar"
									className="mt-6"
								/>
							</div>
						</div>
						<Link className="md:hidden" href="/direcciones-artisticas/banda-universitaria">
							<span className="text-[24px] font-bold leading-[36px] text-white text-center grid place-items-center w-full h-full p-4">
								Banda Universitaria de Música
							</span>
						</Link>
					</div>
					<div className="relative md:px-6 lg:px-[104px] md:py-[56px] lg:py-[86px] h-[200px] md:h-[360px] lg:h-[384px] group">
						<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/ballet_ccsm_portada_b28c850aa6.webp"
								className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
								alt="events"
								fill
								quality={100}
							/>
						</figure>
						<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
						<div className="container h-full flex items-center justify-center max-md:hidden">
							<div className="max-w-[652px] text-center text-white">
								<h2 className="text-[24px] font-bold leading-[36px]">
									Ballet San Marcos
								</h2>
								<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
									Es la primera compañía profesional de danza que se establece en el Perú y en la UNMSM en el año de 1964. Desde sus inicios impulsó la excelencia artística con una sólida labor de investigación, rescatando y renovando el patrimonio dancístico peruano.
								</p>
								<SecondaryButton
									type="internal-link"
									href="/direcciones-artisticas/ballet"
									theme="dark"
									label="Explorar"
									className="mt-6"
								/>
							</div>
						</div>
						<Link className="md:hidden" href="/direcciones-artisticas/ballet">
							<span className="text-[24px] font-bold leading-[36px] text-white text-center grid place-items-center w-full h-full p-4">
								Ballet San Marcos
							</span>
						</Link>
					</div>
					<div className="relative md:px-6 lg:px-[104px] md:py-[56px] lg:py-[86px] h-[200px] md:h-[360px] lg:h-[384px] group">
						<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/cuf_portada_a1817a5bdd.jpg"
								className="object-cover object-top transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
								alt="events"
								fill
								quality={100}
							/>
						</figure>
						<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
						<div className="container h-full flex items-center justify-center max-md:hidden">
							<div className="max-w-[652px] text-center text-white">
								<h2 className="text-[24px] font-bold leading-[36px]">
									Centro Universitario de Folklore
								</h2>
								<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
									Es una dependencia dedicada al trabajo exclusivo
									en el tema de las expresiones culturales de
									nuestro país en materia de música y danza. A sus
									53 años de creación, tiene constituida una
									Escuela de Capacitación en danza folklórica y
									elencos artísticos que desarrollan espectáculos
									de música y danza de alto nivel, los que a su
									vez promocionan y difunden las costumbres
									populares del Perú.
								</p>
								<SecondaryButton
									type="internal-link"
									href="/direcciones-artisticas/folklore"
									theme="dark"
									label="Explorar"
									className="mt-6"
								/>
							</div>
						</div>
						<Link className="md:hidden" href="/direcciones-artisticas/folklore">
							<span className="text-[24px] font-bold leading-[36px] text-white text-center grid place-items-center w-full h-full p-4">
								Centro Universitario de Folklore
							</span>
						</Link>
					</div>
					<div className="relative md:px-6 lg:px-[104px] md:py-[56px] lg:py-[86px] h-[200px] md:h-[360px] lg:h-[384px] group">
						<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/biblioteca_ccsm_depedencia_administrativa_c40348a24f.webp"
								className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
								alt="events"
								fill
								quality={100}
							/>
						</figure>
						<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
						<div className="container h-full flex items-center justify-center max-md:hidden">
							<div className="max-w-[652px] text-center text-white">
								<h2 className="text-[24px] font-bold leading-[36px]">
									Biblioteca España de las Artes
								</h2>
								<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
									La Biblioteca España de las Artes, en adelante
									BEA, empieza sus actividades y servicios en la
									década de 1970, dando servicios a todo el
									público que acudía a La Casona. Posteriormente,
									el año 2002 cambió su nombre de “Biblioteca
									España” a “Biblioteca España de las Artes” y a
									su vez fue declarada como biblioteca
									especializada en todas las artes, sobre todas
									las especialidades de las direcciones del CCSM
									de: Arte, Ballet, Cine, Folklore, Historia,
									Música, Literatura, Teatro y Humanidades.
								</p>
								<SecondaryButton
									type="internal-link"
									href="/biblioteca"
									theme="dark"
									label="Explorar"
									className="mt-6"
								/>
							</div>
						</div>
						<Link className="md:hidden" href="/biblioteca">
							<span className="text-[24px] font-bold leading-[36px] text-white text-center grid place-items-center w-full h-full p-4">
								Biblioteca España de las Artes
							</span>
						</Link>
					</div>
					<div className="relative md:px-6 lg:px-[104px] md:py-[56px] lg:py-[86px] h-[200px] md:h-[360px] lg:h-[384px] group">
						<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/cine_ccsm_dependencia_administrativa_d16677d54f.webp"
								className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
								alt="events"
								fill
								quality={100}
							/>
						</figure>
						<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
						<div className="container h-full flex items-center justify-center max-md:hidden">
							<div className="max-w-[652px] text-center text-white">
								<h2 className="text-[24px] font-bold leading-[36px]">
									Dirección de Cine y Producción Audiovisual
								</h2>
								<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
									Es un órgano de línea que se encarga de la
									producción investigación, realización,
									transmisión, exhibición y capacitación por
									medios audiovisuales de las diferentes
									expresiones culturales y artísticas en el CCSM.
									Fue creada el 20 de abril de 1998 como Dirección
									de Cine de San Marcos, teniendo sus inicios en
									el antiguo Cine- Arte de la Facultad de Letras.
								</p>
								<SecondaryButton
									type="internal-link"
									href="/direcciones-artisticas/cine"
									theme="dark"
									label="Explorar"
									className="mt-6"
								/>
							</div>
						</div>
						<Link className="md:hidden" href="/direcciones-artisticas/cine">
							<span className="text-[24px] font-bold leading-[36px] text-white text-center grid place-items-center w-full h-full p-4">
								Dirección de Cine y Producción Audiovisual
							</span>
						</Link>
					</div>
					<div className="relative md:px-6 lg:px-[104px] md:py-[56px] lg:py-[86px] h-[200px] md:h-[360px] lg:h-[384px] group">
						<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/musica_ccsm_dependencia_administrativa_1469ae4b83.webp"
								className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
								alt="events"
								fill
								quality={100}
							/>
						</figure>
						<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
						<div className="container h-full flex items-center justify-center max-md:hidden">
							<div className="max-w-[652px] text-center text-white">
								<h2 className="text-[24px] font-bold leading-[36px]">
									Dirección de Música
								</h2>
								<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
									Es una dependencia del CCSM, que cumple un rol
									de difusión de la música, a través de sus
									talleres académicos y el Coro Universitario
									(CUSM), el cual fue fundado en noviembre de
									1954, a propuesta de la Federación de
									Estudiantes de San Marcos (FUSM), por la
									musicóloga, arreglista y compositora Rosa Alarco
									Larrabure, quien dedicó su vida a la
									investigación de la música tradicional.
								</p>
								<SecondaryButton
									type="internal-link"
									href="/direcciones-artisticas/musica"
									theme="dark"
									label="Explorar"
									className="mt-6"
								/>
							</div>
						</div>
						<Link className="md:hidden" href="/direcciones-artisticas/musica">
							<span className="text-[24px] font-bold leading-[36px] text-white text-center grid place-items-center w-full h-full p-4">
								Dirección de Música
							</span>
						</Link>
					</div>
					<div className="relative md:px-6 lg:px-[104px] md:py-[56px] lg:py-[86px] h-[200px] md:h-[360px] lg:h-[384px] group">
						<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/turismo_ccsm_dependencia_administrativa_7f96e435e8.webp"
								className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
								alt="events"
								fill
								quality={100}
							/>
						</figure>
						<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
						<div className="container h-full flex items-center justify-center max-md:hidden">
							<div className="max-w-[652px] text-center text-white">
								<h2 className="text-[24px] font-bold leading-[36px]">
									Dirección de Turismo
								</h2>
								<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
									Fue creada por una iniciativa administrativa en
									mayo de 1996, posteriormente en junio, inician
									las labores los promotores turísticos a los
									estudiantes diversas instituciones, llegando
									atender visitas programadas a los colegios y
									público en general, con el fin de dar a conocer
									el patrimonio sanmarquino desde la histórica
									Casona de San Marcos.
								</p>
								<SecondaryButton
									type="internal-link"
									href="/nosotros/centro-cultural-de-san-marcos/direccion-de-turismo"
									theme="dark"
									label="Explorar"
									className="mt-6"
								/>
							</div>
						</div>
						<Link className="md:hidden" href="/nosotros/centro-cultural-de-san-marcos/direccion-de-turismo">
							<span className="text-[24px] font-bold leading-[36px] text-white text-center grid place-items-center w-full h-full p-4">
								Dirección de Turismo
							</span>
						</Link>
					</div>
					<div className="relative md:px-6 lg:px-[104px] md:py-[56px] lg:py-[86px] h-[200px] md:h-[360px] lg:h-[384px] group">
						<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/museo_arqueologia_antropologia_ccsm_dependencia_administrativa_71ccba02d3.webp"
								className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
								alt="events"
								fill
								quality={100}
							/>
						</figure>
						<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
						<div className="container h-full flex items-center justify-center max-md:hidden">
							<div className="max-w-[652px] text-center text-white">
								<h2 className="text-[24px] font-bold leading-[36px]">
									Museo de Arqueología y Antropología
								</h2>
								<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
									Es uno de los museos universitarios más antiguos
									y destacados del país, custodia invaluables
									artefactos cerámicos, textiles y líticos, siendo
									su principal pieza el Manto Blanco de Paracas.
									Fue fundado el 21 de octubre de 1919 por el
									reconocido arqueólogo peruano, Julio César
									Tello.
								</p>
								<SecondaryButton
									type="internal-link"
									href="/museo-de-arqueologia-y-antropologia"
									theme="dark"
									label="Explorar"
									className="mt-6"
								/>
							</div>
						</div>
						<Link className="md:hidden" href="/museo-de-arqueologia-y-antropologia">
							<span className="text-[24px] font-bold leading-[36px] text-white text-center grid place-items-center w-full h-full p-4">
								Museo de Arqueología y Antropología
							</span>
						</Link>
					</div>
					<div className="relative md:px-6 lg:px-[104px] md:py-[56px] lg:py-[86px] h-[200px] md:h-[360px] lg:h-[384px] group">
						<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/museo_arte_san_marcos_ccsm_dependencia_administrativa_0ab1037160.webp"
								className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
								alt="events"
								fill
								quality={100}
							/>
						</figure>
						<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
						<div className="container h-full flex items-center justify-center max-md:hidden">
							<div className="max-w-[652px] text-center text-white">
								<h2 className="text-[24px] font-bold leading-[36px]">
									Museo de Arte de San Marcos
								</h2>
								<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
									Es el encargado de reunir, conservar, exhibir y
									estudiar el patrimonio histórico y artístico de
									la Universidad, se fundó en el año 1970 con el
									nombre de Museo de Arte y de Historia, bajo la
									dirección de su propulsor y fundador, el
									reconocido historiador de arte Francisco
									Stastny. Actualmente, el MASM cuenta con cuatro
									importantes colecciones: Retratos (siglos
									XVI-XXI), Arte popular, Arte moderno y
									contemporáneo, Archivo de dibujo y pintura
									campesina.
								</p>
								<SecondaryButton
									type="internal-link"
									href="/museo-de-arte-de-san-marcos"
									theme="dark"
									label="Explorar"
									className="mt-6"
								/>
							</div>
						</div>
						<Link className="md:hidden" href="/museo-de-arte-de-san-marcos">
							<span className="text-[24px] font-bold leading-[36px] text-white text-center grid place-items-center w-full h-full p-4">
								Museo de Arte de San Marcos
							</span>
						</Link>
					</div>
					<div className="relative md:px-6 lg:px-[104px] md:py-[56px] lg:py-[86px] h-[200px] md:h-[360px] lg:h-[384px] group">
						<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/teatro_ccsm_dependencia_administrativa_9caa8c8474.webp"
								className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
								alt="events"
								fill
								quality={100}
							/>
						</figure>
						<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
						<div className="container h-full flex items-center justify-center max-md:hidden">
							<div className="max-w-[652px] text-center text-white">
								<h2 className="text-[24px] font-bold leading-[36px]">
									Teatro Universitario de San Marcos
								</h2>
								<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
									Sus orígenes se remontan a la Dirección de
									Extensión Universitaria de esta casa de
									estudios, que en el año 1946 tenía como director
									a Manuel Beltroy, quien recibió a un grupo de
									inquietos estudiantes sanmarquinos del Centro
									Federado de la Facultad de Letras, formándose
									así el TUSM. Actualmente, sigue promoviendo las
									funciones de teatro para todas las edades, en su
									local ubicado en el Jr. Lampa 833 - Centro
									Histórico de Lima.
								</p>
								<SecondaryButton
									type="internal-link"
									href="/direcciones-artisticas/teatro"
									theme="dark"
									label="Explorar"
									className="mt-6"
								/>
							</div>
						</div>
						<Link className="md:hidden" href="/direcciones-artisticas/teatro">
							<span className="text-[24px] font-bold leading-[36px] text-white text-center grid place-items-center w-full h-full p-4">
								Teatro Universitario de San Marcos
							</span>
						</Link>
					</div>
				</div>
			</>
		</Layout>
	);
}
