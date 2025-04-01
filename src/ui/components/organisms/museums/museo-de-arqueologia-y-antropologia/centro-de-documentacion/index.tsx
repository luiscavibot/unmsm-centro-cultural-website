import Image from 'next/image';
import React from 'react';

const CentroDeDocumentacion = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<div className="max-w-[641px] leading-[24px] text-dark-blue-2">
						<p className="mb-3">
							El 25 de mayo de 1970, mediante Resolución Rectoral N.° 30766, se crea el Centro Documentación Antropológica y Archivo Julio C. Tello con la finalidad de centralizar informes, trabajos y documentos relacionados a la antropología y arqueología hechas en el Perú para realizar investigaciones y publicaciones más amplias.
						</p>
						<p>
							Tiene además como funciones inventariar, conservar y resguardar los fondos documentarios que actualmente tiene bajo su custodia, tales como los archivos personales de Julio César Tello y de Rebeca Carrión Cachot, la colección bibliográfica de Rosa Fung Pineda, entre otros. El Centro de Documentación también podrá recibir nueva documentación de investigadores nacionales y extranjeros.
						</p>
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-dark-red-2 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-2.svg')] bg-no-repeat bg-[35%_170%]">
 				<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
 					<div className="">
 						<h3 className="text-[32px] leading-[normal] font-semibold">
							Archivo Julio C. Tello
 						</h3>
 						<div className="font-medium leading-[24px] mt-6 max-lg:space-y-6 lg:flex flex-row gap-x-6">
 							<div className="flex-1">
 								<p className="mb-6">
									El Museo de Arqueología y Antropología (MAA) de la Universidad Nacional de San Marcos tiene en custodia el archivo personal del notable arqueólogo peruano, Dr. Julio César Tello Rojas, también fundador de este Museo. Fue entregado a la universidad, tal como consta en el testamento de Tello, el 3 de junio de 1947.
 								</p>
 								<p>
									El principal objetivo de este archivo es la difusión de su contenido a la comunidad académica y público en general. Los materiales documentarios reunidos son producto de las numerosas expediciones científicas que el Dr. Tello y su notable equipo de asistentes llevaron a cabo en diversas regiones del país entre 1915 y 1945.
 								</p>
							</div>
 							<div className="flex-1">
 								<p className="mb-6">
									Así, encontramos cuadernos de campo, un vasto archivo fotográfico, dibujos, acuarelas, planos y mapas de lugares como Paracas, Chavín, Casma, Pachacamac, valle de Lima, Marañón, Nepeña, Nasca, etc. Asimismo, el Archivo incluye textos inéditos, estudio de crónicas, traducciones, clisés y una vasta colección de negativos fotográficos.
 								</p>
 								<p>
									A fines de 1997, el MAA llevó a cabo una verificación total de los documentos del Archivo Tello, contando con la presencia de un representante de la familia del Dr. Tello, trabajo que concluyó a mediados de 1998. En la actualidad el Archivo Tello recibe investigadores nacionales y extranjeros para desarrollar y ampliar sus proyectos.
 								</p>
							</div>
						</div>
 					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-white py-8 lg:py-[96px] ">
 				<div className="container">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:grid-rows-[repeat(6,402px)]">
						<div className="md:col-span-2 md:row-span-2">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/centro_de_documentacion_1_00a307801c.webp"
									className="md:object-cover w-full md:h-full"
									alt="Centro de Documentación 1"
									width={1387}
									height={925}
									quality={100}
								/>
							</figure>
						</div>
						<div className="md:row-start-3">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/centro_de_documentacion_2_80f772e463.webp"
									className="md:object-cover w-full md:h-full"
									alt="Centro de Documentación 2"
									width={1387}
									height={925}
									quality={100}
								/>
							</figure>
						</div>
						<div className="md:row-span-2 md:row-start-3">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/centro_de_documentacion_3_33f0e9fc7d.webp"
									className="md:object-cover w-full md:h-full"
									alt="Centro de Documentación 3"
									width={1387}
									height={925}
									quality={100}
								/>
							</figure>
						</div>
						<div className="md:row-start-4">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/centro_de_documentacion_4_7633d3b406.webp"
									className="md:object-cover w-full md:h-full"
									alt="Centro de Documentación 4"
									width={1387}
									height={925}
									quality={100}
								/>
							</figure>
						</div>
						<div className="md:col-span-2 md:row-span-2 md:row-start-5">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/centro_de_documentacion_5_d38cfbf065.webp"
									className="md:object-cover w-full md:h-full"
									alt="Centro de Documentación 5"
									width={1387}
									height={925}
									quality={100}
								/>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CentroDeDocumentacion;
