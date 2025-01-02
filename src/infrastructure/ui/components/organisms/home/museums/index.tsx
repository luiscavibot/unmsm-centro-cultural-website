'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
import { useRouter } from 'next/navigation';

const Museums = () => {
	const router = useRouter();
	const bgRef1 = useRef<HTMLDivElement>(null);
	const coverRef1 = useRef<HTMLDivElement>(null);

	const bgRef2 = useRef<HTMLDivElement>(null);
	const coverRef2 = useRef<HTMLDivElement>(null);

	const handleEnter1 = () => {
		if (bgRef1.current) {
			bgRef1.current.style.transform = 'scale(1.05)';
		}
		if (coverRef1.current) {
			coverRef1.current.style.transform = 'scale(3.16)';
		}
	};

	const handleLeave1 = () => {
		if (bgRef1.current) {
			bgRef1.current.style.transform = 'scale(1)';
		}
		if (coverRef1.current) {
			coverRef1.current.style.transform = 'scale(1)';
		}
	};

	const handleEnter2 = () => {
		if (bgRef2.current) {
			bgRef2.current.style.transform = 'scale(1.05)';
		}
		if (coverRef2.current) {
			coverRef2.current.style.transform = 'scale(3.16)';
		}
	};

	const handleLeave2 = () => {
		if (bgRef2.current) {
			bgRef2.current.style.transform = 'scale(1)';
		}
		if (coverRef2.current) {
			coverRef2.current.style.transform = 'scale(1)';
		}
	};

	return (
		<section id="museos" className="scroll-mt-28">
			<h2 className="hidden sr-only">Museos</h2>
			<div className="lg:grid lg:grid-cols-2 lg:h-[480px]">
				<article
					onClick={() => router.push('/museo-de-arte-de-san-marcos')}
					onMouseEnter={handleEnter1}
					onMouseLeave={handleLeave1}
					className="cursor-pointer px-6 lg:pl-[104px] h-[380px] lg:h-full relative bg-black-custom overflow-hidden"
				>
					<figure
						ref={bgRef1}
						className="absolute -bottom-[25%] -right-[20px] origin-bottom-left transition-transform duration-[800ms] ease-out grayscale opacity-20 md:opacity-50"
					>
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/masm_home_356d15dbe1.png"
							alt="Museo de Arte de San Marcos"
							width={350}
							height={504}
						/>
					</figure>
					<figure
						ref={coverRef1}
						className="absolute -bottom-[92%] -left-[162px] transition-transform duration-[800ms] ease-out"
					>
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-museo-arte-san-marcos-2.svg"
							alt="Museo de Arte de San Marcos"
							width={801}
							height={621}
						/>
					</figure>
					<div className="relative pt-[56px] lg:pt-[96px] pb-[56px] lg:pr-16 semi-container-l h-full">
						<header className="max-w-[459px] text-white">
							<h3 className="text-[24px] lg:text-[32px] font-bold leading-[normal]">
								Museo de Arte de San Marcos
							</h3>
							<p className="max-lg:text-sm mt-6 font-medium leading-[24px]">
								Tiene como misión vincular sus colecciones con
								los diversos públicos facilitando su
								apreciación, conocimiento, identificación y
								reflexión, en tanto patrimonio cultural
								artístico, representativo de la memoria
								intercultural del Perú.
							</p>
						</header>
						<SecondaryButton
							type="internal-link"
							href="/museo-de-arte-de-san-marcos"
							theme="dark"
							label="Explorar"
							className="mt-8"
						/>
					</div>
				</article>
				<article
					onMouseEnter={handleEnter2}
					onMouseLeave={handleLeave2}
					onClick={() =>
						router.push('/museo-de-arqueologia-y-antropologia')
					}
					className="cursor-pointer px-6 lg:pr-[104px] h-[380px] lg:h-full relative bg-dark-red-2 overflow-hidden"
				>
					<figure
						ref={bgRef2}
						className="absolute -bottom-[7%] -right-[164px] origin-bottom-left transition-transform duration-[800ms] ease-out grayscale opacity-20 md:opacity-50"
					>
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/maa_home_d26cd88048.png"
							alt="Museo de Arqueología y Antropología"
							width={432}
							height={464}
						/>
					</figure>
					<figure
						ref={coverRef2}
						className="absolute -top-[46%] -right-[270px] transition-transform duration-[800ms] ease-out"
					>
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-museo-arqueologia-antropologia-2.svg"
							alt="Museo de Arqueología y Antropología"
							width={801}
							height={621}
						/>
					</figure>
					<div className="relative pt-[56px] lg:pt-[96px] pb-[56px] lg:pl-16 semi-container-r h-full">
						<header className="max-w-[459px] text-white">
							<h3 className="text-[24px] lg:text-[32px] font-bold leading-[normal]">
								Museo de Arqueología y Antropología
							</h3>
							<p className="max-lg:text-sm mt-6 font-medium leading-[24px]">
								Es uno de los museos universitarios más antiguos
								y destacados del país y de la región, tanto por
								la custodia de sus invaluables artefactos
								cerámicos, textiles y líticos, así como por
								proporcionar una vista panorámica de todo el
								proceso histórico prehispánico.
							</p>
						</header>
						<SecondaryButton
							type="internal-link"
							href="/museo-de-arqueologia-y-antropologia"
							theme="dark"
							label="Explorar"
							className="mt-8"
						/>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Museums;
