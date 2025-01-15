import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button'
import ExternalLinkIcon from '@/infrastructure/ui/components/atoms/icons/external-link-icon'
import Image from 'next/image'
import React from 'react'

const Colecciones = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2">¡Descubre el fascinante mundo de la antropología y arqueología peruana de manera interactiva! En esta sección de recursos educativos de la Casona de la UNMSM, te invitamos a explorar:</p>
				</div>
			</div>
			<div className="lg:grid lg:grid-cols-2 lg:h-[480px]">
				<article
					className="px-6 lg:pl-[104px] h-[380px] lg:h-full relative bg-black-custom overflow-hidden"
				>
					<figure
						className="absolute -bottom-[92%] -left-[162px] transition-transform duration-[800ms] ease-out"
					>
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
								Revista
							</span>
							<h3 className="text-[24px] lg:text-[32px] font-bold leading-[normal]">
								Folklore: Arte cultura y sociedad
							</h3>
							<p className="max-lg:text-sm mt-6 font-medium leading-[24px]">
								En 2007, el Centro Universitario de Folklore de la UNMSM lanzó la revista FOLKLORE: Arte, cultura y sociedad, con el propósito de llenar vacíos en la investigación de las manifestaciones folklóricas del Perú y consolidarse como referente en el ámbito académico.
							</p>
						</header>
						<SecondaryButton
							type="external-link"
							href="https://cedoc.sisbib.unmsm.edu.pe/biblioteca-digital/revistas/folklore?pagina=1"
							theme="dark"
							label="Explorar"
							className="mt-8"
						/>
					</div>
				</article>
				<article
					className="px-6 lg:pr-[104px] h-[380px] lg:h-full relative bg-dark-red-2 overflow-hidden"
				>
					<figure
						className="absolute -top-[46%] -right-[270px] transition-transform duration-[800ms] ease-out"
					>
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
								Boletín
							</span>
							<h3 className="text-[24px] lg:text-[32px] font-bold leading-[normal]">
								Haylli
							</h3>
							<p className="max-lg:text-sm mt-6 font-medium leading-[24px]">
								A través de análisis, entrevistas y debates, este espacio profundiza en el arte cinematográfico, explorando temas de estética, narrativa y técnica en películas de todos los géneros y épocas.
							</p>
						</header>
						<SecondaryButton
							type="external-link"
							href="#"
							theme="dark"
							label="Explorar"
							className="mt-8"
						/>
					</div>
				</article>
			</div>
		</>
	)
}

export default Colecciones