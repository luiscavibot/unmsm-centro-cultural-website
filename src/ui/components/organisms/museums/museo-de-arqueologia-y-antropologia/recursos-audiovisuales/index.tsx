import SecondaryButton from '@/ui/components/atoms/buttons/secondary-button';
import ExternalLinkIcon from '@/ui/components/atoms/icons/external-link-icon';
import Image from 'next/image';
import React from 'react';

const RecursosAudiovisuales = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2">
						¡Descubre el fascinante mundo de la antropología y
						arqueología peruana de manera interactiva! En esta
						sección de recursos visuales del MAA-UNMSM,
						te invitamos a explorar:
					</p>
				</div>
			</div>
			<div className="lg:grid lg:grid-cols-2 lg:grid-rows-[repeat(auto-fill,_480px)]">
				<article className="px-6 lg:pl-[104px] lg:h-full relative bg-black-custom overflow-hidden">
					<figure className="absolute -bottom-[92%] -left-[82px] transition-transform duration-[800ms] ease-out">
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-1.svg"
							alt="waves Juega Comparte Museo"
							width={801}
							height={621}
						/>
					</figure>
					<figure className="absolute -bottom-[100px] lg:-bottom-[10%] -right-[150px] md:-right-[100px] min-[1500px]:-right-[30px] transition-transform duration-[800ms] ease-out">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/Recursos_visuales_rompecabezas_8c006e5e99.png"
							alt="Juega Comparte Museo"
							width={415}
							height={258}
						/>
					</figure>
					<div className="relative pt-[56px] lg:pt-[96px] pb-24 md:pb-[56px] lg:pr-16 lg:semi-container-l h-full">
						<header className="max-w-[459px] text-white">
							<span className="block mb-1 max-md:text-sm font-semibold leading-[24px]">
								Rompecabezas
							</span>
							<h3 className="text-2xl lg:text-[32px] font-bold leading-[normal]">
								Juega Comparte Museo
							</h3>
							<p className="max-md:text-sm mt-6 font-medium leading-[24px]">
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
							icon={
								<ExternalLinkIcon className="w-4 h-4 mb-[1px]" />
							}
						/>
					</div>
				</article>
				<article className="px-6 lg:pr-[104px] lg:h-full relative bg-dark-red-2 overflow-hidden">
					<figure className="absolute -top-[46%] -right-[270px] transition-transform duration-[800ms] ease-out">
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-2.svg"
							alt="waves Línea del tiempo"
							width={801}
							height={621}
						/>
					</figure>
					<figure className="absolute -bottom-[150px] lg:-bottom-[19%] -right-[300px] md:-right-[250px] lg:-right-[280px] min-[1500px]:-right-[50px] transition-transform duration-[800ms] ease-out -rotate-[3.16deg]">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/Recursos_visuales_linea_del_tiempo_2c40c3dab0.png"
							alt="Línea del tiempo"
							width={544}
							height={285}
						/>
					</figure>
					<div className="relative pt-[56px] lg:pt-[96px] pb-24 md:pb-[56px] lg:pl-16 lg:semi-container-r h-full">
						<header className="max-w-[459px] text-white">
							<span className="block mb-1 max-md:text-sm font-semibold leading-[24px]">
								Interactivo
							</span>
							<h3 className="text-2xl lg:text-[32px] font-bold leading-[normal]">
								Línea del tiempo
							</h3>
							<p className="max-md:text-sm mt-6 font-medium leading-[24px]">
								Sobre el proceso de musealización de uno de los
								objetos más emblemáticos del museo. El Manto Blanco
								de Paracas, desde su recuperación por Julio C.
								Tello hasta su exposición hoy en día.
							</p>
						</header>
						<SecondaryButton
							type="external-link"
							href="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1UuqL_lSMbl23EAOkYs44i3aNXNIBg3ioFEyWQ4Qxlmg&font=Default&lang=en&initial_zoom=2&height=650"
							theme="dark"
							label="Explorar"
							className="mt-8"
							icon={
								<ExternalLinkIcon className="w-4 h-4 mb-[1px]" />
							}
						/>
					</div>
				</article>
				<article className="px-6 lg:pl-[104px] lg:h-full relative bg-blue-2 overflow-hidden">
					<figure className="absolute -bottom-[50px] min-[1500px]:-bottom-[2%] -right-[100px] md:-right-[50px] min-[1500px]:-right-[0px] transition-transform duration-[800ms] ease-out">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/Recursos_visuales_canal_youtube_59e0055fcb.png"
							alt="Youtube Museo de Arqueología y Antropología UNMSM"
							width={326}
							height={207}
						/>
					</figure>
					<figure className="absolute -bottom-[92%] -left-[82px] transition-transform duration-[800ms] ease-out transform scale-x-[-1]">
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-blue-2.svg"
							alt="waves Museo de Arqueología y Antropología UNMSM"
							width={801}
							height={621}
						/>
					</figure>
					<div className="relative pt-[56px] lg:pt-[96px] pb-24 md:pb-[56px] lg:pr-16 lg:semi-container-l h-full">
						<header className="max-w-[459px] text-white">
							<span className="block mb-1 max-md:text-sm font-semibold leading-[24px]">
								Canal de Youtube
							</span>
							<h3 className="text-2xl lg:text-[32px] font-bold leading-[normal]">
								Museo de Arqueología y Antropología UNMSM
							</h3>
							<p className="max-md:text-sm mt-6 font-medium leading-[24px]">
								Aquí encontrarás contenido exclusivo que conecta
								el pasado con el presente, fomentando el
								conocimiento y la valorización de nuestra rica
								herencia cultural.
							</p>
						</header>
						<SecondaryButton
							type="external-link"
							href="https://www.youtube.com/@museodearqueologiayantropo1140/videos"
							theme="dark"
							label="Explorar"
							className="mt-8"
							icon={
								<ExternalLinkIcon className="w-4 h-4 mb-[1px]" />
							}
						/>
					</div>
				</article>
				<article className="px-6 lg:pr-[104px] lg:h-full relative bg-green overflow-hidden">
					<figure className="absolute -top-[70%] -right-[270px] transition-transform duration-[800ms] ease-out">
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-4.svg"
							alt="waves Fichas informativas"
							width={801}
							height={621}
						/>
					</figure>
					<figure className="absolute -bottom-[90px] min-[1500px]:-bottom-[15%] -right-[90px] md:-right-[50px] lg:-right-[30px] transition-transform duration-[800ms] ease-out">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/Recursos_visuales_fichas_informativas_ebeada0e49.png"
							alt="Fichas informativas"
							width={326}
							height={207}
						/>
					</figure>
					<div className="relative pt-[56px] lg:pt-[96px] pb-24 md:pb-[56px] lg:pl-16 lg:semi-container-r h-full">
						<header className="max-w-[459px] text-white">
							<span className="block mb-1 max-md:text-sm font-semibold leading-[24px]">
								Fichas informativas
							</span>
							<h3 className="text-2xl lg:text-[32px] font-bold leading-[normal]">
								Profundiza en nuestras colecciones
							</h3>
							<p className="max-md:text-sm mt-6 font-medium leading-[24px]">
								Accede a más de 200 fichas descriptivas de los
								elementos que componen las diversas colecciones
								del museo.
							</p>
						</header>
						<SecondaryButton
							type="external-link"
							href="https://issuu.com/maa-unmsm"
							theme="dark"
							label="Explorar"
							className="mt-8"
							icon={
								<ExternalLinkIcon className="w-4 h-4 mb-[1px]" />
							}
						/>
					</div>
				</article>
			</div>
		</>
	);
};

export default RecursosAudiovisuales;
