import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
import Title from '@/infrastructure/ui/components/atoms/title';
import Layout from '@/infrastructure/ui/components/organisms/shared/layout';
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
		title: 'Dirección de ballet',
		path: '/direcciones-artisticas/ballet',
	},
];

export default function Ballet() {
	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/ballet_ccsm_portada_b28c850aa6.webp"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white">
					<div className="container">
						<div className="max-w-[814px] mx-auto pb-14">
							<Title className="text-center">
								Dirección de Ballet
							</Title>
							<div className="leading-[24px] text-dark-blue-2 mb-4">
								<p className="mb-5">
									A lo largo de sus 59 años de trayectoria, la
									compañía ha sido pionera en integrar el
									ballet clásico y la danza contemporánea en
									su repertorio, promoviendo la investigación
									artística y colaborando con reconocidos
									coreógrafos nacionales e internacionales.
									Además, ha expandido su impacto más allá de
									los auditorios universitarios, llevando el
									arte de la danza a comunidades en diversos
									distritos y ofreciendo talleres accesibles
									para todas las edades y niveles.
								</p>
								<p>
									El Ballet San Marcos no solo representa una
									rica tradición de excelencia artística, sino
									también una apuesta por el desarrollo
									cultural, social y académico, reafirmando el
									papel de la danza como un lenguaje universal
									y esencial en la evolución del ser humano.
								</p>
							</div>
							<Link
								className="link text-dark-red font-medium"
								href="/direcciones-artisticas/ballet/historia"
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
			</>
		</Layout>
	);
}
