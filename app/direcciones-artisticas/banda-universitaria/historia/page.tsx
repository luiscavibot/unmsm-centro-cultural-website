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
		title: 'Banda Universitaria de Música de San Marcos',
		path: '/direcciones-artisticas/banda-universitaria',
	},
	{
		title: 'Historia de la dirección de Banda Universitaria de San Marcos',
		path: '/direcciones-artisticas/banda-universitaria/historia',
	},
];

export default function BandaUniversitariaHistoria() {
	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/banda_universitaria_de_san_marcos_portada_8fff97b572.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white">
					<div className="container">
						<div className="max-w-[814px] mx-auto pb-14">
							<Title className="text-center max-w-[437px] mx-auto">
								Historia de la dirección de la Banda
								Universitaria de San Marcos
							</Title>
							<div className="leading-[24px] text-dark-blue-2 mb-4 space-y-10">
								<div>
									<p className="mb-5">
										La dirección de la Banda Universitaria
										de Música, es el resultado de un proceso
										ordenado y meticuloso. Sus antecedentes
										más remotos los encontramos en julio de
										1996, cuando la UNMSM participó en el
										gran desfile de Fiestas Patrias. En
										aquel momento las autoridades de nuestra
										casa de estudios se percataron de que la
										universidad carecía de una banda de
										música, que antecediera la gallarda
										marcha del contingente sanmarquino. Por
										lo que consideraron importante que, la
										Decana de América contara con una
										agrupación propia. Fue por eso que, a
										inicios del año 1997, nuestras
										autoridades decidieron contactarse con
										el profesor Manuel León Alva.
									</p>
									<p className="mb-5">
										A este destacado músico, arreglista,
										compositor y experimentado conductor de
										bandas y agrupaciones orquestales se le
										encargó la elaboración del “Proyecto de
										la Banda de Música de la UNMSM”, el
										mismo que fue sustentado y aprobado en
										mayo de aquel año, convirtiéndose el
										maestro León en su primer director.
										Posteriormente, se iniciaron las
										gestiones para adquirir los mejores
										instrumentos musicales del mercado
										estadounidense y se realizó una gran
										convocatoria dirigida a toda la
										comunidad sanmarquina, en la cual
										participó un conjunto de 180 alumnos,
										llegando a consolidarse 120 de ellos, en
										los ensayos, teniendo que realizar sus
										primeros ensayos con instrumentos
										prestados, hasta que llegaron los
										implementos solicitados.
									</p>
								</div>
								<div>
									<figure className="relative h-[400px] max-w-[644px] w-full md:w-[644px] rounded-3xl overflow-hidden mx-auto">
										<Image
											src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-banda-universitaria-1.webp"
											className="object-cover h-full"
											alt="ballet 1"
											fill
											quality={100}
										/>
									</figure>
								</div>
								<div>
									<p className="mb-5">
										En 1999, la banda de música de la UNMSM
										llegó a ser considerada modelo en su
										género. La meta proyectada empezó con
										bríos y buen desempeño, sin embargo,
										faltaban concretarse algunos logros
										adicionales. Es por ello, que en 1999 se
										formó el elenco de la Big Band de la
										UNMSM, la cual logró tener un éxito
										rotundo con el extenso repertorio de
										música de diversos géneros de moda de
										ese momento. Posteriormente, en el año
										2000 se logró la creación de otros
										elencos que conforman la Dirección de
										Banda y Orquesta, estos fueron: la
										Orquesta Internacional, el Grupo de Jazz
										Contempo y la Farandola.
									</p>
									<p className="mb-5">
										La banda desde su fundación a través de
										estos años, se ha convertido en un
										soporte musical para las diferentes
										actividades académicas, culturales,
										deportivas y protocolares tanto en el
										ámbito universitario como para
										instituciones del ámbito externo. Siendo
										un elenco vivo de San Marcos y durante
										toda la trayectoria de los integrantes
										que la han conformado, en su gran
										mayoría son miembros de la comunidad
										sanmarquina y alumnos de los talleres.
									</p>
								</div>
								<div>
									<figure className="relative h-[400px] max-w-[644px] w-full md:w-[644px] rounded-3xl overflow-hidden mx-auto">
										<Image
											src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-banda-universitaria-2.webp"
											className="object-cover h-full"
											alt="ballet 2"
											fill
											quality={100}
										/>
									</figure>
								</div>
								<div>
									<p className="mb-5">
										Continuando con su labor de difusión
										cultural para brindar servicios a todos
										los grupos interesados en la música, así
										como el descubrimiento de nuevos
										talentos, la Banda Universitaria de
										Música ha realizado diversas
										presentaciones en ceremonias
										protocolares, eventos académicos y
										culturales, en lugares importantes como:
										el Auditorio “Ella Dunbar” de nuestra
										alma máter, en el Teatro de la
										Universidad Nacional de Ingeniería, el
										Gran Teatro Nacional, Plaza de Armas de
										Lima, entre otros escenarios de la
										ciudad.
									</p>
									<p className="mb-5">
										Asimismo, como actividades de nivel
										académico esta dependencia del Centro
										Cultural de San Marcos dicta talleres al
										público en general desde el nivel básico
										al avanzando, en los diferentes
										instrumentos musicales de viento-madera,
										viento-metales, cuerdas, producción
										musical, órgano electrónico y percusión,
										así también se realizan festivales de
										música, cursos de capacitación docente,
										clases maestras con artistas nacionales
										e internacionales.
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
