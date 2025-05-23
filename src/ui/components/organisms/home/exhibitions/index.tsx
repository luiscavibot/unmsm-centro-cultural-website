import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';

const Exhibitions = () => {
	return (
		<section id="exposiciones" className="scroll-mt-28">
			<h2 className="hidden sr-only">Exposiciones</h2>
			<div className="grid lg:grid-cols-2 auto-rows-[360px] lg:grid-rows-[repeat(3,360px)]">
				<div
					className="lg:row-span-2 group"
					// href="/museo-de-arte-de-san-marcos/arte-moderno-y-contemporaneo"
				>
					<article className="relative h-full px-6 lg:pl-[104px] group-hover:bg-black/50 transition-colors duration-300">
						<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/tesoros_a5843db8a3.jpg"
								className="object-cover transform origin-[left_center] group-hover:scale-[1.204] transition-transform duration-[800ms] ease-out"
								alt="Tesoros Arqueológicos de San Marcos"
								fill
							/>
						</figure>
						<div className="relative pt-[56px] lg:pt-[96px] pb-[56px] lg:pr-16 lg:semi-container-l h-full flex items-end">
							<header className="max-w-[512px] text-white">
								<h3 className="text-[24px] lg:text-[32px] font-bold leading-[normal] lg:leading-[39px]">
									Tesoros Arqueológicos de San Marcos
								</h3>
								<p className="mt-2 font-medium leading-[24px]">
									Exposición permanente
								</p>
							</header>
						</div>
					</article>
				</div>
				<div
					// href="/museo-de-arte-de-san-marcos/arte-moderno-y-contemporaneo"
					className="group"
				>
					<article className="px-6 lg:pr-[104px] h-full relative group-hover:bg-black/50 transition-colors duration-300">
						<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/la_universidad_ca330c65a0.jpg"
								className="object-cover transform origin-[right_top] group-hover:scale-[1.194] transition-transform duration-[800ms] ease-out"
								alt="La Universidad como «Casa del Saber»: Religiosos y Laicos"
								fill
							/>
						</figure>
						<div className="relative pt-[56px] lg:pt-[96px] pb-[56px] lg:pl-16 lg:semi-container-r h-full flex items-end">
							<header className="max-w-[512px] text-white">
								<h3 className="text-[24px] lg:text-[32px] font-bold leading-[normal] lg:leading-[39px]">
									La Universidad como «Casa del Saber»: Religiosos y Laicos
								</h3>
								<p className="mt-2 font-medium leading-[24px]">
									Exposición permanente
								</p>
							</header>
						</div>
					</article>
				</div>
				<div
					// href="/museo-de-arte-de-san-marcos/arte-moderno-y-contemporaneo"
					className="group"
				>
					<article className="px-6 lg:pr-[104px] h-full relative group-hover:bg-black/50 transition-colors duration-300">
						<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/arte_moderno_86b0ecdc26.jpg"
								className="object-cover transform origin-[right_center] group-hover:scale-[1.194] transition-transform duration-[800ms] ease-out"
								alt="Arte Moderno y Contemporáneo"
								fill
							/>
						</figure>
						<div className="relative pt-[56px] lg:pt-[96px] pb-[56px] lg:pl-16 lg:semi-container-r h-full flex items-end">
							<header className="max-w-[512px] text-white">
								<h3 className="text-[24px] lg:text-[32px] font-bold leading-[normal] lg:leading-[39px]">
									Arte Moderno y Contemporáneo
								</h3>
								<p className="mt-2 font-medium leading-[24px]">
									Exposición permanente
								</p>
							</header>
						</div>
					</article>
				</div>
				<div
					// href="/museo-de-arte-de-san-marcos/arte-moderno-y-contemporaneo"
					className="group"
				>
					<article className="px-6 lg:pl-[104px] h-full relative group-hover:bg-black/50 transition-colors duration-300">
						<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/buen_vivir_9c2a59f9d2.jpg"
								className="object-cover transform origin-[left_bottom] group-hover:scale-[1.194] transition-transform duration-[800ms] ease-out"
								alt="Buen Vivir / Sumaq Kawsay / Suma Qamaña / Jakonax Jatikaxbi Jati"
								fill
							/>
						</figure>
						<div className="relative pt-[56px] lg:pt-[96px] pb-[56px] lg:pr-16 lg:semi-container-l h-full flex items-end">
							<header className="max-w-[512px] text-white">
								<h3 className="text-[24px] lg:text-[32px] font-bold leading-[normal] lg:leading-[39px]">
									Buen Vivir / Sumaq Kawsay / Suma Qamaña / Jakonax Jatikaxbi Jati
								</h3>
								<p className="mt-2 font-medium leading-[24px]">
									Exposición permanente
								</p>
							</header>
						</div>
					</article>
				</div>
				<div
					// href="/exposiciones/sala-mario-vargas-llosa"
					className="group"
				>
					<article className="px-6 lg:pr-[104px] h-full relative group-hover:bg-black/50 transition-colors duration-300">
						<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/vargas_llosa_5ba2050a06.jpg"
								className="object-cover transform origin-[right_bottom] group-hover:scale-[1.194] transition-transform duration-[800ms] ease-out"
								alt="Mario Vargas Llosa"
								fill
							/>
						</figure>
						<div className="relative pt-[56px] lg:pt-[96px] pb-[56px] lg:pl-16 lg:semi-container-r h-full flex items-end">
							<header className="max-w-[512px] text-white">
								<h3 className="text-[24px] lg:text-[32px] font-bold leading-[normal] lg:leading-[39px]">
									Mario Vargas Llosa
								</h3>
								<p className="mt-2 font-medium leading-[24px]">
									Sala
								</p>
							</header>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Exhibitions;
