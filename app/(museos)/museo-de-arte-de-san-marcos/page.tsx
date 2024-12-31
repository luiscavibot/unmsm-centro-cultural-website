import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
import ClockIcon from '@/infrastructure/ui/components/atoms/icons/clock-icon';
import OutlinePlaceIcon from '@/infrastructure/ui/components/atoms/icons/outilne-place-icon';
import OutlineEmailIcon from '@/infrastructure/ui/components/atoms/icons/outline-email-icon';
import FacebookIcon from '@/infrastructure/ui/components/atoms/icons/social/facebook-icon';
import InstagramIcon from '@/infrastructure/ui/components/atoms/icons/social/instagram-icon';
import TiktokIcon from '@/infrastructure/ui/components/atoms/icons/social/tiktok-icon';
import YoutubeIcon from '@/infrastructure/ui/components/atoms/icons/social/youtube-icon';
import Title from '@/infrastructure/ui/components/atoms/title';
import Layout from '@/infrastructure/ui/components/organisms/shared/layout';
import React from 'react'

const breadcrumbItems = [
	{
		title: 'Inicio',
		path: '/'
	},
	{
		title: 'Museo de Arte de San Marcos',
		path: '/museo-de-arte-de-san-marcos'
	},
]

export default function MuseoDeArteDeSanMarcos() {
	return (
		<Layout portadaImage="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-agenda-cultural.webp" breadcrumbItems={breadcrumbItems}>
			<>
				<div className="px-4 lg:px-[104px] bg-white pb-6">
					<div className="container">
						<div className="max-w-[814px] mx-auto mb-[80px]">
							<Title className="text-center">Museo de Arte de San Marcos</Title>
							<div className="leading-[24px] text-dark-blue-2">
								<p className="mb-3">El Museo de Arte de San Marcos tiene como misión vincular sus colecciones con los diversos públicos facilitando su apreciación, conocimiento, identificación y reflexión, en tanto patrimonio cultural artístico, representativo de la memoria intercultural del Perú. Para ello, pone en valor a su valioso acervo, con una adecuada conservación, sostenida investigación y eficaz gestión.</p>
								<p className="mb-3">Asimismo, como institución universitaria, tiene la visión de ser un espacio que acoja a los estudiantes interesados en la investigación del arte peruano, con enfoque intercultural, y con la vocación de compartir, debatir y ampliar sus particulares interpretaciones sobre el patrimonio cultural del museo y su rol en la formación de nuestra ciudadanía.</p>
								<p className="mb-3">El MASM alberga importantes ejemplares de arte peruano organizados en cuatro colecciones: la de retratos, la de arte popular, la de arte moderno y contemporáneo; así como el archivo de dibujo y pintura campesina.</p>
								<p>Estos conjuntos de obras, que ilustran la gran variedad de arte que se produce en el Perú, se han ido incrementando a lo largo de la trayectoria del museo, ya sea por la individual adquisición o donación de artistas, como resultado de concursos, salones o exposiciones; o mediante el ingreso de un solo gran conjunto, tal es el caso del archivo de dibujo y pintura campesina que es custodiado por el museo desde el año 2004.</p>
							</div>
							<div className="max-w-[639px] mx-auto mt-14">
								<div className="leading-[24px] space-y-1 text-dark-blue-2">
									<div className="flex p-1 gap-2 items-start">
										<OutlinePlaceIcon className="shrink-0 mt-[2px]" ariaLabel="Lugar" color="dark" />
										<div>
											<p className="font-bold">Lugar</p>
											<p className="font-medium">
												Centro cultural UNMSM
												<br />
												Av. Nicolás de Piérola 1222. Parque Universitario. Centro Histórico de Lima
											</p>
										</div>
									</div>
									<div className="flex p-1 gap-2 items-start">
										<ClockIcon className="shrink-0 mt-[2px]" ariaLabel="Horario" color="dark" />
										<div>
											<p className="font-bold">Horario</p>
											<p className="font-medium">
												Lunes a viernes, 10:00 a.m. a 1:00 pm y de 2:00 p.m. a 4:00 p.m.
											</p>
										</div>
									</div>
									<div className="flex p-1 gap-2 items-start">
										<OutlineEmailIcon className="shrink-0 mt-[2px]" ariaLabel="Contacto" color="dark" />
										<div>
											<p className="font-bold">Contacto</p>
											<p className="font-medium">
												museoarte.ccsm@unmsm.edu.pe
											</p>
										</div>
									</div>
								</div>
								<div className="flex flex-row items-center gap-2 mt-5 ml-7">
									<a className="p-1 rounded-[4px] bg-dark-gray-2" href="" rel="noreferrer noopener" target="_blank">
										<FacebookIcon />
									</a>
									<a className="p-1 rounded-[4px] bg-dark-gray-2" href="" rel="noreferrer noopener" target="_blank">
										<InstagramIcon />
									</a>
									<a className="p-1 rounded-[4px] bg-dark-gray-2" href="" rel="noreferrer noopener" target="_blank">
										<TiktokIcon />
									</a>
									<a className="p-1 rounded-[4px] bg-dark-gray-2" href="" rel="noreferrer noopener" target="_blank">
										<YoutubeIcon />
									</a>
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
				<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[56px] pb-[104px]">
					<div className="container">

					</div>
				</div>
			</>
		</Layout>
	)
}
