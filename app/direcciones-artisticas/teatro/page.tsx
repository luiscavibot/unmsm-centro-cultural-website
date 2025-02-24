import PrimaryButton from '@/infrastructure/ui/components/atoms/buttons/primary-button';
import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
import ExternalLinkIcon from '@/infrastructure/ui/components/atoms/icons/external-link-icon';
import Tab from '@/infrastructure/ui/components/atoms/tab';
import Title from '@/infrastructure/ui/components/atoms/title';
import Layout from '@/infrastructure/ui/components/organisms/shared/layout';
import Image from 'next/image';
import Link from 'next/link';
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
		title: 'Dirección de Teatro universitario',
		path: '/direcciones-artisticas/teatro',
	},
];

export default function Teatro() {
	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/teatro_universitario_ccsm_1_83ea3157b5.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white">
					<div className="container">
						<div className="max-w-[814px] mx-auto pb-14">
							<Title className="text-center">
								Dirección de Teatro universitario
							</Title>
							<div className="leading-[24px] text-dark-blue-2 mb-4">
								<p className="mb-5">
									Como base de la actividad humana, el teatro
									potencia el desarrollo de la expresión oral
									y corporal, elementos fundamentales de la
									comunicación y hace la metodología más
									participativa y democrática. El teatro es un
									valioso instrumento para la formación
									integral del ser humano, por lo tanto,
									también es un excelente complemento para la
									educación y el desarrollo de la vida misma.
									Asimismo, fomenta la cooperación, el trabajo
									en grupo y estimula la reflexión sobre las
									distintas actividades, convirtiéndose en un
									vehículo para transmitir valores de
									tolerancia, respeto, solidaridad, crítica y
									denuncia.
								</p>
								<p className="mb-5">
									Siendo el teatro el arte en el que confluyen
									las otras artes, este nos permite
									desarrollar múltiples capacidades y valores
									a través del proceso creativo o la dinámica
									del juego. Gracias al teatro, el ser humano
									ha logrado mejorar su sociabilización,
									haciéndola más natural; el trabajo teatral
									permite mejorar la autoestima, la
									disciplina, el manejo de la frustración, la
									adquisición de hábitos responsables, el
									incremento de valores y normas de
									convivencia, el respeto por el otro, el
									desarrollo de la seguridad en sí mismo y de
									las relaciones con los otros.
								</p>
								<p className="mb-5">
									Igualmente, permite afianzar los hábitos de
									lectura y de escritura, fomentar el
									pensamiento y el diálogo interno, la
									estimulación de la imaginación, la
									agudización de los sentidos y la
									potenciación de la creatividad.
								</p>
								<p className="mb-5">
									Uno de los logros del Teatro Universitario
									de San Marcos, durante su gestión, ha sido
									la reincorporación al Centro Cultural de San
									Marcos de la sala “Guillermo Ugarte
									Chamorro”, histórico local ubicado en el Jr.
									Lampa N° 833, en el Centro Histórico de
									Lima. Además, otra de las gestiones más
									resaltantes es la de lograr que esta
									dependencia está conformada íntegramente por
									estudiantes sanmarquinos, fomentando la
									unidad e identificación con la institución.
								</p>
							</div>
							<Link
								className="link text-dark-red font-medium"
								href="/direcciones-artisticas/teatro/historia"
							>
								Conoce la historia
							</Link>
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
				<div className="px-4 lg:px-[104px] bg-white pt-[56px] pb-[24px]">
					<div className="container">
						<div className="flex gap-x-4">
							<Tab label="Equipo" selected={true} />
							<Tab
								label="Investigación"
								icon={<ExternalLinkIcon className="w-4 h-4 mb-[1px]" />}
								type="internal-link"
								link="#"
							/>
							<Tab
								label="Entrevistas"
								icon={<ExternalLinkIcon className="w-4 h-4 mb-[1px]" />}
								type="internal-link"
								link="#"
							/>
						</div>
					</div>
				</div>
				<div>
					<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
						<div className="container flex flex-row justify-between gap-x-[68px]">
							<div className="max-w-[641px] leading-[24px] text-dark-blue-2">
								<p className="mb-5">
									El TUSM está integrado por alumnos y
									trabajadores de la UNMSM. Con base en el
									compromiso, dedicación y esfuerzo para su
									crecimiento artístico y personal.
								</p>
								<p className="mb-3">Actualmente contamos con:</p>
								<ul className="mb-5 list-disc list-outside pl-5">
									<li>Elenco de Teatro</li>
									<li>Elenco de Improvisación Teatral</li>
								</ul>
								<p className="mb-5 font-bold">
									🎭 ¡Únete al Elenco de Teatro de La Casona!
									🎭
								</p>
								<p className="mb-5">
									¿Tienes una pasión por la actuación y el
									arte escénico? ¡Esta es tu oportunidad! Te
									invitamos a registrarte y formar parte del
									Elenco de Teatro de La Casona de la UNMSM.
									Aquí encontrarás un espacio donde podrás
									expresar tu creatividad, explorar nuevos
									personajes y compartir el escenario con
									otros entusiastas del teatro.
								</p>
								<PrimaryButton
									type="external-link"
									href="#"
									label="Registrarse"
									theme="light"
								/>
							</div>
							<div className="shrink-0">
								<figure className="relative w-[523px] h-[444px] mx-auto">
									<Image
										src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/equipo-teatro-1.webp"
										className="object-cover h-full"
										alt="ballet 2"
										layout="fill"
										quality={100}
									/>
								</figure>
							</div>
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
}
