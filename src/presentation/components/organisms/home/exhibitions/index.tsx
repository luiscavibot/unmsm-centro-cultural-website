import Image from 'next/image'
import React from 'react'

const Exhibitions = () => {
	return (
		<>
			<h2 className="hidden sr-only">Exposiciones</h2>
			<div className="grid grid-cols-2 grid-rows-[repeat(3,360px)]">
				<div className="row-span-2 pl-[104px] h-full relative">
					<div className="absolute top-0 left-0 w-full h-full -z-10">
						<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/talleres.jpg" className="object-cover" alt="events" fill />
					</div>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="relative pt-[96px] pb-[56px] pr-16 semi-container-l h-full flex items-end">
						<div className="max-w-[512px]">
							<h3 className="text-[32px] font-bold leading-[39px]">Tesoros Arqueológicos de San Marcos</h3>
							<p className="mt-2 font-medium leading-[24px]">Exposición permanente</p>
						</div>
					</div>
				</div>
				<div className="pr-[104px] h-full relative">
					<div className="absolute top-0 left-0 w-full h-full -z-10">
						<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/talleres.jpg" className="object-cover" alt="events" fill />
					</div>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="relative pt-[96px] pb-[56px] pl-16 semi-container-r h-full flex items-end">
						<div className="max-w-[512px]">
							<h3 className="text-[32px] font-bold leading-[39px]">La universidad como «casa del saber»: Religiosos y laicos</h3>
							<p className="mt-2 font-medium leading-[24px]">Exposición permanente</p>
						</div>
					</div>
				</div>
				<div className="pr-[104px] h-full relative">
					<div className="absolute top-0 left-0 w-full h-full -z-10">
						<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/talleres.jpg" className="object-cover" alt="events" fill />
					</div>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="relative pt-[96px] pb-[56px] pl-16 semi-container-r h-full flex items-end">
						<div className="max-w-[512px]">
							<h3 className="text-[32px] font-bold leading-[39px]">Arte moderno y contemporáneo</h3>
							<p className="mt-2 font-medium leading-[24px]">Exposición permanente</p>
						</div>
					</div>
				</div>
				<div className="pl-[104px] h-full relative">
					<div className="absolute top-0 left-0 w-full h-full -z-10">
						<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/talleres.jpg" className="object-cover" alt="events" fill />
					</div>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="relative pt-[96px] pb-[56px] pr-16 semi-container-l h-full flex items-end">
						<div className="max-w-[512px]">
							<h3 className="text-[32px] font-bold leading-[39px]">Buen Vivir / Sumaq Kawsay / Suma Qamaña / Jakonax jatikaxbi jati</h3>
							<p className="mt-2 font-medium leading-[24px]">Exposición permanente</p>
						</div>
					</div>
				</div>
				<div className="pr-[104px] h-full relative">
					<div className="absolute top-0 left-0 w-full h-full -z-10">
						<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/talleres.jpg" className="object-cover" alt="events" fill />
					</div>
					<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="relative pt-[96px] pb-[56px] pl-16 semi-container-r h-full flex items-end">
						<div className="max-w-[512px]">
							<h3 className="text-[32px] font-bold leading-[39px]">Mario Vargas Llosa</h3>
							<p className="mt-2 font-medium leading-[24px]">Sala</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Exhibitions