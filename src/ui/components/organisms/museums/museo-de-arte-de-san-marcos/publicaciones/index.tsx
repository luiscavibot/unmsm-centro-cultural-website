import SecondaryButton from '@/ui/components/atoms/buttons/secondary-button';
import ExternalLinkIcon from '@/ui/components/atoms/icons/external-link-icon';
import Image from 'next/image';
import React from 'react';

const Publicaciones = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2">
						El área de Investigación del museo elabora publicaciones
						que contienen información clave acerca de cada
						exposición temporal llevada a cabo desde el año 2018.
					</p>
				</div>
			</div>
			<div className="lg:grid lg:grid-cols-2 lg:h-[480px]">
				<article className="px-6 lg:pl-[104px] h-[380px] lg:h-full relative bg-dark-red-2 overflow-hidden">
					<figure className="absolute -bottom-[92%] -left-[162px] transition-transform duration-[800ms] ease-out">
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-2.svg"
							alt="Museo de Arte de San Marcos"
							width={801}
							height={621}
						/>
					</figure>
					<div className="relative pt-[56px] lg:pt-[96px] pb-[56px] lg:pr-16 semi-container-l h-full">
						<header className="max-w-[459px] text-white">
							<span className="block mb-1 font-semibold leading-[24px]">
								Documentos
							</span>
							<h3 className="text-[24px] lg:text-[32px] font-bold leading-[normal]">
								Cuadernillos MASM
							</h3>
							<p className="max-lg:text-sm mt-6 font-medium leading-[24px]">
								En sus páginas el lector encontrará textos,
								fotografías, planos y documentos sobre las
								propuestas del arte actual difundido en los
								espacios del MASM
							</p>
						</header>
						<SecondaryButton
							type="external-link"
							href="https://independent.academia.edu/museoarteunmsm"
							theme="dark"
							label="Explorar"
							className="mt-8"
							icon={
								<ExternalLinkIcon className="h-4 w-4 inline mb-[1px]" />
							}
						/>
					</div>
				</article>
				<figure className="relative w-full h-full mx-auto">
					<Image
						src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/cuadernilos-masm.webp"
						className="object-cover h-full"
						alt="cuadernillos MASM"
						layout="fill"
						quality={100}
					/>
				</figure>
			</div>
		</>
	);
};

export default Publicaciones;
