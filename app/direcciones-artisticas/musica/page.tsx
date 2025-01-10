import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
import Title from '@/infrastructure/ui/components/atoms/title';
import Layout from '@/infrastructure/ui/components/organisms/shared/layout'
import Link from 'next/link';
import React from 'react'

const breadcrumbItems = [
	{
		title: 'Inicio',
		path: '/',
	},
	{
		title: 'Direcciones artisticas',
		path: '',
	},
	{
		title: 'Dirección de Música',
		path: '/direcciones-artisticas/musica',
	},
];

export default function Musica() {
  return (
	<Layout
		portadaImage="https://ccsm.unmsm.edu.pe/ccsm/agenda_banner_8a74d62f5c.jpg"
		breadcrumbItems={breadcrumbItems}
	>
		<>
			<div className="px-4 lg:px-[104px] bg-white">
				<div className="container">
					<div className="max-w-[814px] mx-auto pb-14">
						<Title className="text-center">
							Dirección de Música
						</Title>
						<div className="leading-[24px] text-dark-blue-2 mb-4">
							<p className="mb-5">
								El Coro Universitario (CUSM) fue fundado en noviembre de 1954, a propuesta de la Federación de Estudiantes de San Marcos (FUSM), por la musicóloga, arreglista y compositora Rosa Alarco Larrabure, quien dedicó su vida a la investigación de la música tradicional peruana.
							</p>
							<p className="mb-5">
								Durante todos estos años de difusión musical, el Coro Universitario ha ofrecido innumerables presentaciones en diversos lugares de nuestro país, ha sido parte de festivales nacionales e internacionales y participa activamente de las actividades organizadas por la Universidad.
							</p>
							<p className="mb-5">
								El coro de San Marcos es el coro universitario más antiguo del Perú y su actual elenco prepara, Obras escénico-musicales, de carácter clásico y popular. Está próximo a celebrar 70 años de fundado (Bodas de Titanio) por lo cual están preparando los eventos y actividades en celebración de dicha efeméride.
							</p>
							<p>
								En la actualidad el Coro Universitario está bajo la dirección de los Maestros José Mendieta Echevarría y Rafael González Carranza, quienes tienen a su cargo los cursos de Técnica vocal y lectura musical de la Dirección de Música del Centro Cultural de San Marcos.
							</p>
						</div>
						<Link className="link text-dark-red font-medium" href="/direcciones-artisticas/musica/historia">
							Conoce la historia
						</Link>
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
