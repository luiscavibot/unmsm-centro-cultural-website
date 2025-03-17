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
		title: 'Banda Universitaria',
		path: '/direcciones-artisticas/banda-universitaria',
	},
];

export default function BandaUniversitaria() {
	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/banda_universitaria_ccsm_portada_5fdd4aad8a.webp"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white">
					<div className="container">
						<div className="max-w-[814px] mx-auto pb-14">
							<Title className="text-center">
							Banda Universitaria
							</Title>
							<div className="leading-[24px] text-dark-blue-2 mb-4">
								<p className="mb-5">
									La Banda Universitaria de Música es una
									unidad artística, cultural, y protocolar de
									la Universidad Nacional Mayor de San Marcos.
									En este sentido, se constituye en la
									actualidad en una de las dependencias que
									forman parte del Centro Cultural de San
									Marcos.
								</p>
								<p>
									Su creación se remonta al año 1996, cuando
									las autoridades sanmarquinas concibieron la
									idea de dotar a nuestra universidad con una
									banda de música, con la finalidad de que
									esta agrupe a los alumnos sanmarquinos
									interesados en este rubro y así, el conjunto
									pueda participar en los actos protocolares e
									invitaciones oficiales de diversa índole. En
									la actualidad, la Banda Universitaria de
									Música realiza diversos proyectos artísticos
									que permiten llevar espectáculos de calidad
									al público en general, ejemplos de estos son
									Salsa Urbana, Boleros y Sones, El show del
									adulto mayor, entre otros.
								</p>
							</div>
							<Link
								className="link text-dark-red font-medium"
								href="/direcciones-artisticas/banda-universitaria/historia"
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
