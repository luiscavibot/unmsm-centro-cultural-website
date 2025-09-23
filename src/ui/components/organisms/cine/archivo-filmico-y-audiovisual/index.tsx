import Image from 'next/image';
import React from 'react';

const ArchivoFilmicoYAudiovisual = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container flex flex-col lg:flex-row justify-between gap-y-8 gap-x-[68px]">
					<div className="lg:max-w-[641px] leading-[24px] text-dark-blue-2">
						<p className="mb-2">
							La creación del archivo fílmico y audiovisual del
							Centro Cultural es una de las principales
							iniciativas de conservación del patrimonio
							audiovisual peruano.
						</p>
						<p className="mb-2">
							Este proyecto tiene como objetivo preservar material
							cinematográfico en diversos formatos (16mm, 35mm,
							entre otros), así como afiches y documentos
							relacionados con la historia del cine en Perú.
						</p>
						<p>
							A través de este archivo, se busca asegurar la
							preservación de la memoria audiovisual y facilitar
							su acceso a futuras generaciones de investigadores,
							cineastas y público en general.
						</p>
					</div>
					<div className="shrink-0 max-lg:hidden">
						<figure className="relative w-full max-md:max-w-[500px] md:w-[500px] xl:w-[602px] h-[243px] xl:h-[293px] mx-auto">
							<Image
								src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/ccsm/archivo_filmico_980cce6378.jpg"
								className="object-cover h-full"
								alt="Archivo fílmico y audiovisual"
								fill
								quality={100}
							/>
						</figure>
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-white py-8 lg:py-[96px] ">
				<div className="container">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 sm:grid-rows-[456px_340px_367px_412px]">
						<div className="sm:row-span-2">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/ccsm/archivo_filmico_grid_1_a60b298387.jpg"
									className="sm:object-cover w-full sm:h-full"
									alt="Archivo fílmico y audiovisual 1"
									width={617}
									height={925}
									quality={100}
								/>
							</figure>
						</div>
						<div className="">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/ccsm/archivo_filmico_grid_2_bebd562264.jpg"
									className="sm:object-cover w-full sm:h-full"
									alt="Archivo fílmico y audiovisual 2"
									width={1228}
									height={925}
									quality={100}
								/>
							</figure>
						</div>
						<div className="sm:col-start-2">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/ccsm/archivo_filmico_grid_3_711e8f0799.jpg"
									className="sm:object-cover w-full sm:h-full"
									alt="Archivo fílmico y audiovisual 3"
									width={1300}
									height={731}
									quality={100}
								/>
							</figure>
						</div>
						<div className="sm:row-start-3">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/ccsm/archivo_filmico_grid_4_7c2815ff61.jpg"
									className="sm:object-cover w-full sm:h-full"
									alt="Archivo fílmico y audiovisual 4"
									width={1228}
									height={925}
									quality={100}
								/>
							</figure>
						</div>
						<div className="sm:col-start-1 sm:row-start-4">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/ccsm/archivo_filmico_grid_5_7f0283138e.jpg"
									className="sm:object-cover w-full sm:h-full"
									alt="CArchivo fílmico y audiovisual 5"
									width={1228}
									height={925}
									quality={100}
								/>
							</figure>
						</div>
						<div className="sm:row-span-2 sm:col-start-2 sm:row-start-3">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/ccsm/archivo_filmico_grid_6_fa2f33be75.jpg"
									className="sm:object-cover w-full sm:h-full"
									alt="Archivo fílmico y audiovisual 6"
									width={696}
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

export default ArchivoFilmicoYAudiovisual;
