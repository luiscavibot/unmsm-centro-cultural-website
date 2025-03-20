import SecondaryButton from '@/ui/components/atoms/buttons/secondary-button';
import Title from '@/ui/components/atoms/title';
import Layout from '@/ui/components/organisms/shared/layout';
import React from 'react';
// import GaleriaDeImagenes from '@/infrastructure/ui/components/organisms/nosotros/historia/galeria-de-imagenes';
// import useSplideControls from '@/infrastructure/ui/hooks/useSplideControls';
// import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import Image from 'next/image';

// interface ExtendedSplideType extends SplideType {
// 	splide: SplideType;
// }

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

	// const splideRefGaleria = React.createRef<ExtendedSplideType>();
	// const { handlePrev: handlePrevGaleria, handleNext: handleNextGaleria, handleMove: handleMoveGaleria, isPrevDisabled: isPrevDisabledGaleria, isNextDisabled: isNextDisabledGaleria } = useSplideControls(splideRefGaleria);

	// const splideOptions: ResponsiveOptions = {
	// 	type: 'slide',
	// 	width: '100%',
	// 	fixedWidth: '390px',
	// 	arrows: false,
	// 	pagination: false,
	// 	gap: '24px',
	// 	perMove: 1,
	// 	breakpoints: {
	// 		1024: {
	// 			fixedWidth: "100%",
	// 			perMove: 1,
	// 		},
	// 	},
	// };

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
									Fue creado oficialmente el 29 de noviembre
									de 1995, constituyéndose en uno de los
									principales puntos de encuentro de la vida
									cultural limeña, mediante exposiciones y
									presentaciones artísticas, producciones
									literarias y otras expresiones culturales.
									Desarrolla proyectos culturales con cada de
									las dependencias que alberga en conexión con
									las huellas históricas que representa el
									monumento que habita y resguarda, donde
									confluyen múltiples experiencias y saberes
									como parte de un país culturalmente diverso.
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
									<h3 className="text-2xl font-bold leading-[36px] lg:max-w-[220px] flex-shrink-0">
										Orígenes coloniales (Siglo XVI)
									</h3>
									<div className="flex-grow font-normal leading-[24px]">
										<p className="mb-4">
											<span className="font-bold">
												Construcción inicial:
											</span>{' '}
											La Casona fue construida durante el
											periodo colonial a mediados del
											siglo XVI en Lima, siendo utilizada
											originalmente por la Compañía de
											Jesús como una residencia y centro
											de estudios para sus misioneros.
										</p>
										<p>
											<span className="font-bold">
												Función educativa:
											</span>{' '}
											Se convirtió en uno de los primeros
											centros educativos del virreinato,
											permitiendo la formación religiosa y
											académica.
										</p>
									</div>
								</div>
								<div className="max-lg:relative max-lg:left-1/2 lg:pl-16 my-6">
									<div className="bg-dark-white-3 w-[1px] h-8"></div>
								</div>
								<div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
									<h3 className="text-2xl font-bold leading-[36px] lg:max-w-[220px] flex-shrink-0">
										Expulsión de los jesuitas (1767)
									</h3>
									<div className="flex-grow font-normal leading-[24px]">
										<p className="mb-4">
											<span className="font-bold">
												Expulsión:
											</span>{' '}
											En 1767, los jesuitas fueron
											expulsados del Perú por orden del
											rey Carlos III de España, lo cual
											dejó el edificio desocupado.
										</p>
										<p>
											<span className="font-bold">
												Nueva función:
											</span>{' '}
											Tras la expulsión, La Casona fue
											utilizada para diversos fines
											administrativos y educativos bajo el
											control del virreinato y más tarde
											por la república peruana.
										</p>
									</div>
								</div>
								<div className="max-lg:relative max-lg:left-1/2 lg:pl-16 my-6">
									<div className="bg-dark-white-3 w-[1px] h-8"></div>
								</div>
								<div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
									<h3 className="text-2xl font-bold leading-[36px] lg:max-w-[220px] flex-shrink-0">
										Inicio de su relación con San Marcos
										(Siglo XIX)
									</h3>
									<div className="flex-grow font-normal leading-[24px]">
										<p className="mb-4">
											<span className="font-bold">
												Asociación con la universidad:
											</span>{' '}
											Durante el siglo XIX, el edificio
											fue utilizado eventualmente por la
											Universidad de San Marcos como
											espacio de enseñanza.
										</p>
										<p>
											<span className="font-bold">
												Ampliación de su uso académico:
											</span>{' '}
											Con el tiempo, La Casona fue
											adoptada de manera oficial como un
											lugar central de actividades
											académicas para la universidad.
										</p>
									</div>
								</div>
								<div className="max-lg:relative max-lg:left-1/2 lg:pl-16 my-6">
									<div className="bg-dark-white-3 w-[1px] h-8"></div>
								</div>
								<div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
									<h3 className="text-2xl font-bold leading-[36px] lg:max-w-[220px] flex-shrink-0">
										Reformas y restauración (Siglo XX)
									</h3>
									<div className="flex-grow font-normal leading-[24px]">
										<p className="mb-4">
											<span className="font-bold">
												Deterioro y restauración:
											</span>{' '}
											A inicios del siglo XX, el edificio
											se encontraba en mal estado debido
											al tiempo y varios cambios en su
											uso.
										</p>
										<p>
											<span className="font-bold">
												Restauración:
											</span>{' '}
											En 1946, fue sometida a una
											restauración importante, preservando
											su arquitectura colonial y detalles
											originales para devolverle su
											esplendor.
										</p>
									</div>
								</div>
								<div className="max-lg:relative max-lg:left-1/2 lg:pl-16 my-6">
									<div className="bg-dark-white-3 w-[1px] h-8"></div>
								</div>
								<div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
									<h3 className="text-2xl font-bold leading-[36px] lg:max-w-[220px] flex-shrink-0">
										Reconocimiento como Patrimonio Cultural
										(1989)
									</h3>
									<div className="flex-grow font-normal leading-[24px]">
										<p className="mb-4">
											<span className="font-bold">
												Reconocimiento de la UNESCO:
											</span>{' '}
											En 1989, La Casona fue reconocida
											como parte del Patrimonio Cultural
											de la Humanidad por la UNESCO,
											siendo parte del centro histórico de
											Lima.
										</p>
										<p>
											<span className="font-bold">
												Preservación histórica:
											</span>{' '}
											Este reconocimiento consolidó el
											estatus de La Casona como un
											monumento importante a nivel
											internacional y le aseguró futuras
											labores de preservación.
										</p>
									</div>
								</div>
								<div className="max-lg:relative max-lg:left-1/2 lg:pl-16 my-6">
									<div className="bg-dark-white-3 w-[1px] h-8"></div>
								</div>
								<div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
									<h3 className="text-2xl font-bold leading-[36px] lg:max-w-[220px] flex-shrink-0">
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
								</div>
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
									layout="fill"
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
									layout="fill"
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
									layout="fill"
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
									layout="fill"
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
									layout="fill"
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
									layout="fill"
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
									layout="fill"
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
									layout="fill"
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
									layout="fill"
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
									layout="fill"
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
									layout="fill"
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
								Dependencias administrativas
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
								href="/nosotros/dependencias-administrativas"
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
