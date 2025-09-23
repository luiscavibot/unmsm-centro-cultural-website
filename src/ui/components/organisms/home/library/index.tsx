import React from 'react';
import Image from 'next/image';
import SecondaryButton from '@/ui/components/atoms/buttons/secondary-button';
// import SecondaryButton from '@/ui/components/atoms/buttons/secondary-button';

const Library = () => {
	return (
		<section id="biblioteca" className="scroll-mt-28">
			<div className="relative px-6 lg:px-[104px] pt-[56px] lg:pt-[96px] pb-[56px] h-[360px] lg:h-[720px] group">
				<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
					<Image
						src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/ccsm/biblioteca_ccsm_1_a502c76148.png"
						className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out"
						alt="events"
						fill
					/>
				</figure>
				{/* <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div> */}
				<div className="container h-full flex items-center justify-center">
					<div className="max-w-[606px] text-center text-white">
						<h2 className="text-[24px] lg:text-[32px] font-bold leading-[normal]">
							Biblioteca España de las Artes
						</h2>
						<p className="text-sm lg:text-base mt-2 leading-[21px] lg:leading-[24px]">
							Contamos con una gran variedad de recursos
							bibliográficos en diferentes formatos y disciplinas;
							siendo también un espacio de recreación y fomento de
							actividades culturales.
						</p>
						<SecondaryButton
							type="internal-link"
							href="/biblioteca"
							theme="dark"
							label="Explorar"
							className="mt-6 lg:mt-8"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Library;
