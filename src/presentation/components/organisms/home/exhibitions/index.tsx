import Image from 'next/image'
import React from 'react'

const Exhibitions = () => {
	return (
		<section id="exposiciones" className="scroll-mt-28">
			<h2 className="hidden sr-only">Exposiciones</h2>
			<div className="grid grid-cols-2 grid-rows-[repeat(3,360px)]">
				<article className="row-span-2 pl-[104px] h-full relative group">
					<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
						<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/tesoros-arqueologicos.webp" className="object-cover transform group-hover:scale-110 transition-transform duration-1000" alt="Tesoros Arqueológicos de San Marcos" fill />
					</figure>
					{/* <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(28,6,7,0.64)]"></div> */}
					<div className="relative pt-[96px] pb-[56px] pr-16 semi-container-l h-full flex items-end">
						<header className="max-w-[512px]">
							<h3 className="text-[32px] font-bold leading-[39px]">Tesoros Arqueológicos de San Marcos</h3>
							<p className="mt-2 font-medium leading-[24px]">Exposición permanente</p>
						</header>
					</div>
				</article>
				<article className="pr-[104px] h-full relative group">
					<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
						<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/casa-del-saber.webp" className="object-cover transform group-hover:scale-110 transition-transform duration-1000" alt="La universidad como «casa del saber»: Religiosos y laicos" fill />
					</figure>
					{/* <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(28,6,7,0.64)]"></div> */}
					<div className="relative pt-[96px] pb-[56px] pl-16 semi-container-r h-full flex items-end">
						<header className="max-w-[512px]">
							<h3 className="text-[32px] font-bold leading-[39px]">La universidad como «casa del saber»: Religiosos y laicos</h3>
							<p className="mt-2 font-medium leading-[24px]">Exposición permanente</p>
						</header>
					</div>
				</article>
				<article className="pr-[104px] h-full relative group">
					<div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
						<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/arte-moderno.webp" className="object-cover transform group-hover:scale-110 transition-transform duration-1000" alt="Arte moderno y contemporáneo" fill />
					</div>
					{/* <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(28,6,7,0.64)]"></div> */}
					<div className="relative pt-[96px] pb-[56px] pl-16 semi-container-r h-full flex items-end">
						<header className="max-w-[512px]">
							<h3 className="text-[32px] font-bold leading-[39px]">Arte moderno y contemporáneo</h3>
							<p className="mt-2 font-medium leading-[24px]">Exposición permanente</p>
						</header>
					</div>
				</article>
				<article className="pl-[104px] h-full relative group">
					<div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
						<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/buen-vivir.webp" className="object-cover transform group-hover:scale-110 transition-transform duration-1000" alt="Buen Vivir / Sumaq Kawsay / Suma Qamaña / Jakonax jatikaxbi jati" fill />
					</div>
					{/* <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(28,6,7,0.64)]"></div> */}
					<div className="relative pt-[96px] pb-[56px] pr-16 semi-container-l h-full flex items-end">
						<header className="max-w-[512px]">
							<h3 className="text-[32px] font-bold leading-[39px]">Buen Vivir / Sumaq Kawsay / Suma Qamaña / Jakonax jatikaxbi jati</h3>
							<p className="mt-2 font-medium leading-[24px]">Exposición permanente</p>
						</header>
					</div>
				</article>
				<article className="pr-[104px] h-full relative group">
					<div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
						<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/mario-vargas-llosa.webp" className="object-cover transform group-hover:scale-110 transition-transform duration-1000" alt="Mario Vargas Llosa" fill />
					</div>
					{/* <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(28,6,7,0.64)]"></div> */}
					<div className="relative pt-[96px] pb-[56px] pl-16 semi-container-r h-full flex items-end">
						<header className="max-w-[512px]">
							<h3 className="text-[32px] font-bold leading-[39px]">Mario Vargas Llosa</h3>
							<p className="mt-2 font-medium leading-[24px]">Sala</p>
						</header>
					</div>
				</article>
			</div>
		</section>
	)
}

export default Exhibitions