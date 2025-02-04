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
		title: 'Nosotros',
		path: '',
	},
	{
		title: 'Dependencias administrativas',
		path: '/nosotros/dependencias-administrativas',
	},
];

export default function DependenciasAdministrativas() {
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
								Dependencias administrativas
							</Title>
							<div className="leading-[24px] text-dark-blue-2 mb-4">
								<p className="mb-5">
									El Centro Cultural de la Universidad Nacional Mayor de San Marcos (UNMSM) es un punto de encuentro para la difusión del arte, la historia y la cultura. Sus diversas dependencias ofrecen espacios dedicados al desarrollo artístico, académico y comunitario, fomentando el acceso a la cultura y el conocimiento.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="relative px-6 lg:px-[104px] py-[56px] lg:py-[86px] h-[360px] lg:h-[384px] group">
					<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/biblioteca_ccsm_1_a502c76148.png"
							className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
							alt="events"
							fill
						/>
					</figure>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="container h-full flex items-center justify-center">
						<div className="max-w-[652px] text-center text-white">
							<h2 className="text-[24px] font-bold leading-[36px]">
								Banda Universitaria de Música
							</h2>
							<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
								Es una unidad artística, cultural, y protocolar, su creación data al año 1996, cuando las autoridades sanmarquinas concibieron la idea de dotar a nuestra alma máter con una banda de música, con la finalidad de que esta agrupe a los alumnos interesados en este rubro y así, el conjunto pueda participar en los actos protocolares e invitaciones oficiales de diversa índole.
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
				</div>
				<div className="relative px-6 lg:px-[104px] py-[56px] lg:py-[86px] h-[360px] lg:h-[384px] group">
					<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/biblioteca_ccsm_1_a502c76148.png"
							className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
							alt="events"
							fill
						/>
					</figure>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="container h-full flex items-center justify-center">
						<div className="max-w-[652px] text-center text-white">
							<h2 className="text-[24px] font-bold leading-[36px]">
								Ballet San Marcos
							</h2>
							<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
								Es la más antigua compañía profesional de danza en el Perú con 59 años de existencia. A sus inicios en 1964, se dedicó al ballet clásico y posteriormente, ha incorporado la técnica de la danza contemporánea al entrenamiento del elenco y al currículo de su escuela.
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
				</div>
				<div className="relative px-6 lg:px-[104px] py-[56px] lg:py-[86px] h-[360px] lg:h-[384px] group">
					<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/biblioteca_ccsm_1_a502c76148.png"
							className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
							alt="events"
							fill
						/>
					</figure>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="container h-full flex items-center justify-center">
						<div className="max-w-[652px] text-center text-white">
							<h2 className="text-[24px] font-bold leading-[36px]">
								Centro Universitario de Folklore
							</h2>
							<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
								Es una dependencia dedicada al trabajo exclusivo en el tema de las expresiones culturales de nuestro país en materia de música y danza. A sus 53 años de creación, tiene constituida una Escuela de Capacitación en danza folklórica y elencos artísticos que desarrollan espectáculos de música y danza de alto nivel, los que a su vez promocionan y difunden las costumbres populares del Perú.
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
				</div>
				<div className="relative px-6 lg:px-[104px] py-[56px] lg:py-[86px] h-[360px] lg:h-[384px] group">
					<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/biblioteca_ccsm_1_a502c76148.png"
							className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
							alt="events"
							fill
						/>
					</figure>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="container h-full flex items-center justify-center">
						<div className="max-w-[652px] text-center text-white">
							<h2 className="text-[24px] font-bold leading-[36px]">
								Biblioteca España de las Artes
							</h2>
							<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
								La Biblioteca España de las Artes, en adelante BEA, empieza sus actividades y servicios en la década de 1970, dando servicios a todo el público que acudía a La Casona. Posteriormente, el año 2002 cambió su nombre de “Biblioteca España” a “Biblioteca España de las Artes” y a su vez fue declarada como biblioteca especializada en todas las artes, sobre todas las especialidades de las direcciones del CCSM de: Arte, Ballet, Cine, Folklore, Historia, Música, Literatura, Teatro y Humanidades.
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
				</div>
				<div className="relative px-6 lg:px-[104px] py-[56px] lg:py-[86px] h-[360px] lg:h-[384px] group">
					<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/biblioteca_ccsm_1_a502c76148.png"
							className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
							alt="events"
							fill
						/>
					</figure>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="container h-full flex items-center justify-center">
						<div className="max-w-[652px] text-center text-white">
							<h2 className="text-[24px] font-bold leading-[36px]">
								Dirección de Cine y Producción Audiovisual
							</h2>
							<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
								Es un órgano de línea que se encarga de la producción investigación, realización, transmisión, exhibición y capacitación por medios audiovisuales de las diferentes expresiones culturales y artísticas en el CCSM. Fue creada el 20 de abril de 1998 como Dirección de Cine de San Marcos, teniendo sus inicios en el antiguo Cine- Arte de la Facultad de Letras.
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
				</div>
				<div className="relative px-6 lg:px-[104px] py-[56px] lg:py-[86px] h-[360px] lg:h-[384px] group">
					<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/biblioteca_ccsm_1_a502c76148.png"
							className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
							alt="events"
							fill
						/>
					</figure>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="container h-full flex items-center justify-center">
						<div className="max-w-[652px] text-center text-white">
							<h2 className="text-[24px] font-bold leading-[36px]">
								Dirección de Música
							</h2>
							<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
								Es una dependencia del CCSM, que cumple un rol de difusión de la música, a través de sus talleres académicos y el Coro Universitario (CUSM), el cual fue fundado en noviembre de 1954, a propuesta de la Federación de Estudiantes de San Marcos (FUSM), por la musicóloga, arreglista y compositora Rosa Alarco Larrabure, quien dedicó su vida a la investigación de la música tradicional.
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
				</div>
				<div className="relative px-6 lg:px-[104px] py-[56px] lg:py-[86px] h-[360px] lg:h-[384px] group">
					<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/biblioteca_ccsm_1_a502c76148.png"
							className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
							alt="events"
							fill
						/>
					</figure>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="container h-full flex items-center justify-center">
						<div className="max-w-[652px] text-center text-white">
							<h2 className="text-[24px] font-bold leading-[36px]">
								Dirección de Turismo
							</h2>
							<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
								Fue creada por una iniciativa administrativa en mayo de 1996, posteriormente en junio, inician las labores los promotores turísticos a los estudiantes diversas instituciones, llegando atender visitas programadas a los colegios y público en general, con el fin de dar a conocer el patrimonio sanmarquino desde la histórica Casona de San Marcos.
							</p>
							<SecondaryButton
								type="internal-link"
								href="/nosotros/dependencias-administrativas/direccion-de-turismo"
								theme="dark"
								label="Explorar"
								className="mt-6"
							/>
						</div>
					</div>
				</div>
				<div className="relative px-6 lg:px-[104px] py-[56px] lg:py-[86px] h-[360px] lg:h-[384px] group">
					<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/biblioteca_ccsm_1_a502c76148.png"
							className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
							alt="events"
							fill
						/>
					</figure>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="container h-full flex items-center justify-center">
						<div className="max-w-[652px] text-center text-white">
							<h2 className="text-[24px] font-bold leading-[36px]">
								Museo de Arqueología y Antropología
							</h2>
							<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
								Es uno de los museos universitarios más antiguos y destacados del país, custodia invaluables artefactos cerámicos, textiles y líticos, siendo su principal pieza el Manto Blanco de Paracas. Fue fundado el 21 de octubre de 1919 por el reconocido arqueólogo peruano, Julio César Tello.
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
				</div>
				<div className="relative px-6 lg:px-[104px] py-[56px] lg:py-[86px] h-[360px] lg:h-[384px] group">
					<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/biblioteca_ccsm_1_a502c76148.png"
							className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
							alt="events"
							fill
						/>
					</figure>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="container h-full flex items-center justify-center">
						<div className="max-w-[652px] text-center text-white">
							<h2 className="text-[24px] font-bold leading-[36px]">
								Museo de Arte de San Marcos
							</h2>
							<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
								Es el encargado de reunir, conservar, exhibir y estudiar el patrimonio histórico y artístico de la Universidad, se fundó en el año 1970 con el nombre de Museo de Arte y de Historia, bajo la dirección de su propulsor y fundador, el reconocido historiador de arte Francisco Stastny. Actualmente, el MASM cuenta con cuatro importantes colecciones: Retratos (siglos XVI-XXI), Arte popular, Arte moderno y contemporáneo, Archivo de dibujo y pintura campesina.
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
				</div>
				<div className="relative px-6 lg:px-[104px] py-[56px] lg:py-[86px] h-[360px] lg:h-[384px] group">
					<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/biblioteca_ccsm_1_a502c76148.png"
							className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
							alt="events"
							fill
						/>
					</figure>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="container h-full flex items-center justify-center">
						<div className="max-w-[652px] text-center text-white">
							<h2 className="text-[24px] font-bold leading-[36px]">
								Teatro Universitario de San Marcos
							</h2>
							<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
								Sus orígenes se remontan a la Dirección de Extensión Universitaria de esta casa de estudios, que en el año 1946 tenía como director a Manuel Beltroy, quien recibió a un grupo de inquietos estudiantes sanmarquinos del Centro Federado de la Facultad de Letras, formándose así el TUSM. Actualmente, sigue promoviendo las funciones de teatro para todas las edades, en su local ubicado en el Jr. Lampa 833 - Centro Histórico de Lima.
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
				</div>
			</>
		</Layout>
	);
}
