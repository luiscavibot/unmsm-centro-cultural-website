import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
import ExternalLinkIcon from '@/infrastructure/ui/components/atoms/icons/external-link-icon';
import Image from 'next/image';
import React from 'react';

const RecursosEducativos = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2">
						¡Descubre el fascinante mundo de la antropología y
						arqueología peruana de manera interactiva! En esta
						sección de recursos educativos de la Casona de la UNMSM,
						te invitamos a explorar:
					</p>
				</div>
			</div>
			<div className="lg:grid lg:grid-cols-2 lg:h-[480px]">
				<article className="px-6 lg:pl-[104px] h-[380px] lg:h-full relative bg-black-custom overflow-hidden">
					<figure className="absolute -bottom-[92%] -left-[162px] transition-transform duration-[800ms] ease-out">
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-1.svg"
							alt="Museo de Arte de San Marcos"
							width={801}
							height={621}
						/>
					</figure>
					<div className="relative pt-[56px] lg:pt-[96px] pb-[56px] lg:pr-16 semi-container-l h-full">
						<header className="max-w-[459px] text-white">
							<span className="block mb-1 font-semibold leading-[24px]">
								Rompecabezas
							</span>
							<h3 className="text-[24px] lg:text-[32px] font-bold leading-[normal]">
								Juega Comparte Museo
							</h3>
							<p className="max-lg:text-sm mt-6 font-medium leading-[24px]">
								A través de la plataforma jigsawplanet, el museo
								ha implementado un espacio lúdico, publicando
								112 rompecabezas que puedes armar en el menor
								tiempo posible.
							</p>
						</header>
						<SecondaryButton
							type="external-link"
							href="https://www.jigsawplanet.com/MAAUNMSM"
							theme="dark"
							label="Explorar"
							className="mt-8"
							icon={<ExternalLinkIcon className="w-4 h-4 mb-[1px]" />}
						/>
					</div>
				</article>
				<article className="px-6 lg:pr-[104px] h-[380px] lg:h-full relative bg-dark-red-2 overflow-hidden">
					<figure className="absolute -top-[46%] -right-[270px] transition-transform duration-[800ms] ease-out">
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-2.svg"
							alt="Museo de Arqueología y Antropología"
							width={801}
							height={621}
						/>
					</figure>
					<div className="relative pt-[56px] lg:pt-[96px] pb-[56px] lg:pl-16 semi-container-r h-full">
						<header className="max-w-[459px] text-white">
							<span className="block mb-1 font-semibold leading-[24px]">
								Interactivo
							</span>
							<h3 className="text-[24px] lg:text-[32px] font-bold leading-[normal]">
								Línea del tiempo
							</h3>
							<p className="max-lg:text-sm mt-6 font-medium leading-[24px]">
								Sobre el proceso de musealización de uno de los
								objetos emblemáticos del museo. El Manto Blanco
								de Parcas, desde su recuperación por Julio C.
								Tello hasta su exposición hoy en día.
							</p>
						</header>
						<SecondaryButton
							type="external-link"
							href="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1UuqL_lSMbl23EAOkYs44i3aNXNIBg3ioFEyWQ4Qxlmg&font=Default&lang=en&initial_zoom=2&height=650"
							theme="dark"
							label="Explorar"
							className="mt-8"
							icon={<ExternalLinkIcon className="w-4 h-4 mb-[1px]" />}
						/>
					</div>
				</article>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-blue-2 text-white py-8 lg:py-[45px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-blue-2.svg')] bg-no-repeat bg-[-47px_-100px]">
				<div className="container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
					<div className="flex flex-col lg:flex-row lg:items-center justify-center gap-2 lg:gap-6">
						<div>
							<span className="block mb-1 font-semibold leading-[24px]">
								Youtube
							</span>
							<h2 className="text-[24px] lg:text-[32px] font-semibold leading-[normal] lg:max-w-[418px]">
								Museo de Arqueología y Antropología UNMSM
							</h2>
						</div>
						<p className="max-lg:text-sm font-medium leading-[24px] lg:max-w-[510px]">
							Aquí encontrarás contenido exclusivo que conecta el
							pasado con el presente, fomentando el conocimiento y
							la valorización de nuestra rica herencia cultural.
						</p>
					</div>
					<SecondaryButton
						type="external-link"
						href="https://www.youtube.com/@museodearqueologiayantropo1140/videos"
						theme="dark"
						label="Explorar"
						icon={<ExternalLinkIcon className="w-4 h-4 mb-[1px]" />}
					/>
				</div>
			</div>
		</>
	);
};

export default RecursosEducativos;
