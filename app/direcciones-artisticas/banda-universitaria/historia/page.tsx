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
		title: 'Dirección de Banda universitaria',
		path: '/direcciones-artisticas/banda-universitaria',
	},
	{
		title: 'Historia de la dirección de Banda universitaria',
		path: '/direcciones-artisticas/banda-universitaria/historia',
	},
];

export default function BandaUniversitariaHistoria() {
  return (
	<Layout
		portadaImage="https://ccsm.unmsm.edu.pe/ccsm/agenda_banner_8a74d62f5c.jpg"
		breadcrumbItems={breadcrumbItems}
	>
		<>
			<div className="px-4 lg:px-[104px] bg-white">
				<div className="container">
					<div className="max-w-[814px] mx-auto pb-14">
						<Title className="text-center max-w-[437px] mx-auto">
							Historia de la dirección de la Banda universitaria
						</Title>
						<div className="leading-[24px] text-dark-blue-2 mb-4 space-y-10">
							<div>
								<p className="mb-5">
									La Dirección de Banda Universitaria de Música, es el resultado de un proceso ordenado y meticuloso. Sus antecedentes más remotos los encontramos en julio de 1996, cuando la UNMSM participó en el Gran Desfile de Fiestas Patrias. En aquel momento las autoridades de nuestra casa de estudios se percataron de que la universidad carecía de una Banda de Música, que antecediera la gallarda marcha del contingente sanmarquino. El reto estaba dado, era importante que la Decana de América pudiera contar con una Banda de Música propia. Fue por eso que a inicios del año siguiente (1997), nuestras autoridades decidieron contactarse con el Profesor Manuel León Alva.
								</p>
								<p className="mb-5">
									A este destacado músico, arreglista, compositor y experimentado conductor de bandas y agrupaciones orquestales se le encargó la elaboración del “Proyecto de la Banda de Música de la UNMSM”, el mismo que fue sustentado y aprobado en mayo de aquel año convirtiéndose este en su primer director. De este modo, fue que se iniciaron las gestiones comerciales a fin de adquirir los mejores instrumentos musicales del mercado estadounidense. Acto seguido se realizó una gran convocatoria dirigida a toda la comunidad sanmarquina que atrajo a un conjunto de 180 alumnos, 120 de los cuales comenzaron días después los ensayos con el Profesor León. No obstante, la falta de instrumentos -los cuales recién llegaron al Perú el 23 de julio de aquel año- los ensayos se realizaron con instrumentos que fueron prestados a la Banda Universitaria de Música de San Marcos, gracias a las gestiones del Director de la Banda.
								</p>
							</div>
							<div>
								<figure className="relative h-[400px] w-[644px] rounded-3xl overflow-hidden mx-auto">
									<Image
										src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-banda-universitaria-1.webp"
										className="object-cover h-full"
										alt="ballet 1"
										layout="fill"
										quality={100}
									/>
								</figure>
							</div>
							<div>
								<p className="mb-5">
									En 1999, nuestra banda de música llegó a ser considerada modelo en su género. La meta proyectada empezó con bríos y buen desempeño sin embargo estaban proyectados otros logros adicionales. En 1999 se formó el elenco de la BIG BAND de la UNMSM la cual logró un éxito rotundo con el extenso repertorio de música que abarcaba con géneros como el fox trox, danzones, boleros, sones, cha-cha-chas, swing, etc. además de los géneros de moda de ese momento.
								</p>
								<p className="mb-5">
									En el año 2000 se logró adquirir todos los módulos de audio, los cuales formarían parte de las Salas de Estudio y Grabación, respectivamente. Luego vendría la creación de otros elencos que conforman la Dirección de Banda y Orquesta, estos fueron: la Orquesta Internacional, el Grupo de Jazz Contempo y la Farandola. Quedando un plan maestro para el engrandecimiento de la unidad.
								</p>
								<p className="mb-5">
									La banda desde su fundación a través de todos estos años es un soporte musical para las diferentes actividades académicas, culturales, deportivas y protocolares tanto en el ámbito universitario como para instituciones del ámbito externo.
								</p>
								<p className="mb-5">
									La banda es un elenco vivo de San Marcos y durante toda su trayectoria de sus integrantes la gran mayoría son miembros de la comunidad sanmarquina y además de los alumnos de talleres dirigidos al público en general.
								</p>
								<p className="mb-5">
									Desde el mes de setiembre del año 2018, esta dependencia tiene como Director al destacado músico Juan Carlos Rodríguez Pomar, siguiendo con su labor de difusión cultural para brindar servicios a todos los grupos interesados en la música, así como el descubrimiento de nuevos talentos.
								</p>
								<p className="mb-5">
									A partir de 2019 la Banda Universitaria de San Marcos realizó presentaciones en diferentes teatros como “Ella Dunbar” UNMSM, en la plaza de armas en tiempos de navidad, teatro de la UNI y en diferentes ceremonias protocolares y actividades de la universidad.
								</p>
							</div>
							<div>
								<figure className="relative h-[400px] w-[644px] rounded-3xl overflow-hidden mx-auto">
									<Image
										src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-banda-universitaria-2.webp"
										className="object-cover h-full"
										alt="ballet 2"
										layout="fill"
										quality={100}
									/>
								</figure>
							</div>
							<div>
								<p className="mb-5">
									Contamos con capacitaciones, festivales, clases maestras con diferentes artistas internacionales y nacionales.
								</p>
								<p className="mb-5">
									Talleres de música donde los estudiantes descubran sus dones y talentos.
								</p>
								<p className="mb-1">
									Actualmente se cuenta con diferentes elencos:
								</p>
								<ul className="list-none">
									<li>San Marcos Big Band</li>
									<li>Banda Universitaria de San marcos</li>
									<li>Ensambles de profesores y estudiantes (MPP) significa Música popular peruana.</li>
								</ul>
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
