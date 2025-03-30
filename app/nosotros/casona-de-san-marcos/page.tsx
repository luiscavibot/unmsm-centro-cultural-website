import SecondaryButton from '@/ui/components/atoms/buttons/secondary-button';
import Title from '@/ui/components/atoms/title';
import Layout from '@/ui/components/organisms/shared/layout';
import React from 'react';
import Image from 'next/image';

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
		title: 'Casona de San Marcos',
		path: '/nosotros/casona-san-marcos',
	},
];

export default function CasonaDeSanMarcos() {

	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/Museos_de_Arte_de_San_Marcos_portrait_a631148308.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white pb-14">
					<div className="container">
						<div className="max-w-[814px] mx-auto">
							<Title className="text-center">
								Casona de San Marcos
							</Title>
							<div className="leading-[24px] text-dark-blue-2">
								<p className="mb-3">
									La Casona de San Marcos es uno de los espacios más emblemáticos del Perú, no solo por su valor arquitectónico, sino por ser testigo y protagonista de más de cuatro siglos de historia nacional. Desde su origen como noviciado jesuita en el siglo XVII hasta su actual rol como Centro Cultural, la Casona ha sido escenario de grandes transformaciones sociales, políticas y educativas. Ha albergado a instituciones claves como el Real Convictorio de San Carlos y la Universidad Nacional Mayor de San Marcos, formando generaciones de pensadores, líderes e intelectuales que marcaron el rumbo del país.
								</p>
								<p className="mb-3">
									Esta línea de tiempo resume los hitos más importantes en la vida de la Casona, permitiendo recorrer de forma cronológica su evolución, sus momentos de esplendor, crisis, renovación y su actual misión como centro de difusión cultural para la comunidad sanmarquina y el país.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-[104px] bg-dark-red-2 text-white py-[104px]">
					<div className="container">
						<h2 className="hidden sr-only">Historia</h2>
						<div className="max-w-[814px] mx-auto">
							<div>
								<div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
									<h3 className="text-2xl font-bold leading-[36px] lg:w-[220px] flex-shrink-0">
										Siglos XVII - XVIII
									</h3>
									<div className="flex-grow font-normal leading-[24px]">
										<p className="mb-4">
											<span className="font-bold">
												1605:
											</span>{' '}
											Contrato notarial con Antonio Correa Ureña para la construcción del noviciado jesuita San Antonio Abad.
										</p>
										<p className="mb-4">
											<span className="font-bold">
												1610:
											</span>{' '}
											Inicia funciones como Casa de Probación y Noviciado San Antonio Abad de la Compañía de Jesús.
										</p>
										<p className="mb-4">
											<span className="font-bold">
												1746:
											</span>{' '}
											Terremoto obliga a la reconstrucción y reconfiguración espacial.
										</p>
										<p>
											<span className="font-bold">
												1767:
											</span>{' '}
											Expulsión de los jesuitas fue por orden del rey Carlos III y ejecutado aquí por el virrey Amat.
										</p>
									</div>
								</div>
								<div className="max-lg:relative max-lg:left-1/2 lg:pl-16 my-6">
									<div className="bg-dark-white-3 w-[1px] h-8"></div>
								</div>
								<div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
									<h3 className="text-2xl font-bold leading-[36px] lg:w-[220px] flex-shrink-0">
										Etapa del Convictorio Carolino
									</h3>
									<div className="flex-grow font-normal leading-[24px]">
										<p className="mb-4">
											<span className="font-bold">
												1770:
											</span>{' '}
											Fundación del Real Convictorio de San Carlos.
										</p>
										<p className="mb-4">
											<span className="font-bold">
												1771:
											</span>{' '}
											El convictorio se instala en la actual Casona de San Marcos.
										</p>
										<p>
											<span className="font-bold">
												Hasta 1866:
											</span>{' '}
											Funciona como institución educativa destacada; se forman figuras clave como José Faustino Sánchez Carrión y Pedro Gálvez.
										</p>
									</div>
								</div>
								<div className="max-lg:relative max-lg:left-1/2 lg:pl-16 my-6">
									<div className="bg-dark-white-3 w-[1px] h-8"></div>
								</div>
								<div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
									<h3 className="text-2xl font-bold leading-[36px] lg:w-[220px] flex-shrink-0">
										Incorporación a San Marcos
									</h3>
									<div className="flex-grow font-normal leading-[24px]">
										<p className="mb-4">
											<span className="font-bold">
												1866:
											</span>{' '}
											El Colegio San Carlos se incorpora a la Universidad de San Marcos.
										</p>
										<p className="mb-4">
											<span className="font-bold">
												1867:
											</span>{' '}
											Se traslada oficialmente la sede universitaria a la Casona.
										</p>
										<p className="mb-4">
											<span className="font-bold">
												1875:
											</span>{' '}
											Se crea la Facultad de Ciencias Políticas y Administrativas.
										</p>
										<p className="mb-4">
											<span className="font-bold">
												1866:
											</span>{' '}
											Reforma de nombres de facultades (Derecho, Ciencias, Letras).
										</p>
										<div className="mb-4">
											<span className="font-bold">
												1876:
											</span>{' '}
											<ul className="list-outside list-disc pl-5">
												<li>Inauguración de la Escuela Especial de Construcciones Civiles y de Minas.</li>
												<li>1879-1883: Uso militar durante la Guerra del Pacífico.</li>
											</ul>
										</div>
										<p>
											<span className="font-bold">
												1882:
											</span>{' '}
											Matrícula de la primera mujer: Margarita Muñoz Seguín.
										</p>
									</div>
								</div>
								<div className="max-lg:relative max-lg:left-1/2 lg:pl-16 my-6">
									<div className="bg-dark-white-3 w-[1px] h-8"></div>
								</div>
								<div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
									<h3 className="text-2xl font-bold leading-[36px] lg:w-[220px] flex-shrink-0">
										Siglo XX
									</h3>
									<div className="flex-grow font-normal leading-[24px]">
										<p className="mb-4">
											<span className="font-bold">
												1919:
											</span>{' '}
											Reforma Universitaria; auge del binomio universidad-sociedad.
										</p>
										<p className="mb-4">
											<span className="font-bold">
												1932-1936 y 1950s:
											</span>{' '}
											Recesos universitarios e intervenciones militares.
										</p>
										<p className="mb-4">
											<span className="font-bold">
												1943-1948:
											</span>{' '}
											Masificación universitaria; creación de nuevas facultades (Educación y Química).
										</p>
										<p className="mb-4">
											<span className="font-bold">
												1951:
											</span>{' '}
											Se coloca la primera piedra de la Ciudad Universitaria.
										</p>
										<p>
											<span className="font-bold">
												1960s:
											</span>{' '}
											Traslado progresivo a la Ciudad Universitaria; sismo de 1966 causa daños graves.
										</p>
									</div>
								</div>
								<div className="max-lg:relative max-lg:left-1/2 lg:pl-16 my-6">
									<div className="bg-dark-white-3 w-[1px] h-8"></div>
								</div>
								<div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
									<h3 className="text-2xl font-bold leading-[36px] lg:w-[220px] flex-shrink-0">
										Restauración y Centro Cultural
									</h3>
									<div className="flex-grow font-normal leading-[24px]">
										<p className="mb-4">
											<span className="font-bold">
												1967:
											</span>{' '}
											Primer proyecto de recuperación por encargo de la UNESCO (sin ejecución).
										</p>
										<p className="mb-4">
											<span className="font-bold">
												1984:
											</span>{' '}
											Proyecto de restauración del Salón General (no financiado).
										</p>
										<p className="mb-4">
											<span className="font-bold">
												1989-2008:
											</span>{' '}
											Restauración de la casona con la AECID.
										</p>
										<p>
											<span className="font-bold">
												1995:
											</span>{' '}
											Se crea el Centro Cultural de San Marcos.
										</p>
									</div>
								</div>
								{/* <div className="max-lg:relative max-lg:left-1/2 lg:pl-16 my-6">
									<div className="bg-dark-white-3 w-[1px] h-8"></div>
								</div>
								<div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
									<h3 className="text-2xl font-bold leading-[36px] lg:w-[220px] flex-shrink-0">
										Actualidad (Siglo XXI)
									</h3>
									<div className="flex-grow font-normal leading-[24px]">
										<p className="mb-4">
											<span className="font-bold">
												Centro Cultural de San Marcos:
											</span>{' '}
											Hoy en día, La Casona alberga el
											Centro Cultural de San Marcos, donde se realizan
											actividades culturales,
											exposiciones, y eventos académicos.
										</p>
										<p>
											<span className="font-bold">
												Atracción turística:
											</span>{' '}
											La Casona sigue siendo un lugar de
											atracción para visitantes y un
											símbolo de la historia académica y
											cultural de Lima y del Perú.
										</p>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
				{/* <GaleriaDeImagenes
					handleMoveGaleria={handleMoveGaleria}
					splideRefGaleria={splideRefGaleria}
					splideOptions={splideOptions}
					isPrevDisabledGaleria={isPrevDisabledGaleria}
					isNextDisabledGaleria={isNextDisabledGaleria}
					handlePrevGaleria={handlePrevGaleria}
					handleNextGaleria={handleNextGaleria}
				/> */}
				<div className="px-4 lg:px-[104px] bg-white py-8 lg:pt-[80px] lg:pb-[104px] pb-20">
					<div className="container grid grid-cols-2 grid-rows-[821px_403px_403px_821px_402px_402px_821px_905px] gap-6">
						<div className="col-span-2">
							<figure className="relative h-full w-full rounded-3xl overflow-hidden mx-auto">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/c311e26e22666cb8950d2966cb33a65a_4af15c8007.webp"
									className="object-cover h-full object-bottom"
									alt="visitanos 1"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-span-2 row-start-2">
							<figure className="relative h-full w-full rounded-3xl overflow-hidden mx-auto">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/a8237aa13d166d6ccadbfd088f7ab9cf_984df24f70.webp"
									className="object-cover h-full"
									alt="visitanos 2"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-start-2">
							<figure className="relative h-full w-full rounded-3xl overflow-hidden mx-auto">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/9932621fd5ce2b8a3c87254ef38a261c_c7c84533a2.webp"
									className="object-cover h-full"
									alt="visitanos 3"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="col-start-2 row-start-3">
							<figure className="relative h-full w-full rounded-3xl overflow-hidden mx-auto">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/6e96107d943cb492c69da75af3467218_209cb76c9f.webp"
									className="object-cover h-full"
									alt="visitanos 4"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="col-span-2 row-start-4">
							<figure className="relative h-full w-full rounded-3xl overflow-hidden mx-auto">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/bfe63e48db771e3a4afaafdf8e9a95f3_37fdeb297f.webp"
									className="object-cover h-full"
									alt="visitanos 5"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-start-5">
							<figure className="relative h-full w-full rounded-3xl overflow-hidden mx-auto">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/5d138e25516dbfdd81aeb6286dc5e417_f4c9de9305.webp"
									className="object-cover h-full"
									alt="visitanos 6"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="col-start-1 row-start-6">
							<figure className="relative h-full w-full rounded-3xl overflow-hidden mx-auto">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/84eba024515f0a8f050a18521b529b21_432a54d062.webp"
									className="object-cover h-full"
									alt="visitanos 7"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-span-2 col-start-2 row-start-5">
							<figure className="relative h-full w-full rounded-3xl overflow-hidden mx-auto">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/c9eeac414429e1fa9e0d3dd5821145ca_2ace594c5e.webp"
									className="object-cover h-full"
									alt="visitanos 8"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="col-span-2 row-start-7">
							<figure className="relative h-full w-full rounded-3xl overflow-hidden mx-auto">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/2403a539c22736f907a69f0cbe5ec6e1_3afb1460e2.webp"
									className="object-cover h-full"
									alt="visitanos 9"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-start-8">
							<figure className="relative h-full w-full rounded-3xl overflow-hidden mx-auto">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ee8fa74a14f10cedf2a00ef01e44e89d_5058b317d7.webp"
									className="object-cover h-full"
									alt="visitanos 10"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-start-8">
							<figure className="relative h-full w-full rounded-3xl overflow-hidden mx-auto">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/d66dec7050c0107411a8c2cbf97f978f_3edb59807e.webp"
									className="object-cover h-full"
									alt="visitanos 11"
									fill
									quality={100}
								/>
							</figure>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-[104px] gap-5 bg-green text-white py-8 lg:py-[45px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-contactanos.svg')] bg-no-repeat bg-[-123px_10px]">
					<div className="container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
						<div className="flex flex-col lg:flex-row lg:items-center justify-center gap-2 lg:gap-8">
							<h2 className="text-[24px] lg:text-[32px] font-semibold leading-[normal] lg:max-w-[416px]">
								Centro Cultural de San Marcos
							</h2>
							<p className="max-lg:text-sm font-normal leading-[24px] lg:max-w-[464px]">
								Ven y encuentra la inspiración que buscas, en un
								ambiente que respira historia y expresión
								cultural.
							</p>
						</div>
						<div className="flex flex-col gap-y-4">
							<SecondaryButton
								className="min-w-[167px]"
								type="internal-link"
								href="/nosotros/centro-cultural-de-san-marcos"
								theme="dark"
								label="Explorar"
							/>
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
}
