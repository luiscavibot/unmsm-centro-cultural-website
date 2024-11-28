import Image from 'next/image'
import React from 'react'
import OutlineButton from '@/infrastructure/ui/components/atoms/buttons/outline-button'

const Museums = () => {
	return (
		<section id="museos" className="scroll-mt-28">
			<h2 className="hidden sr-only">Museos</h2>
			<div className="grid grid-cols-2 h-[480px]">
				<article className="pl-[104px] h-full relative">
					<figure className="absolute top-0 left-0 w-full h-full -z-10">
						<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/talleres.jpg" className="object-cover" alt="Museo de Arte de San Marcos" fill />
					</figure>
					<div aria-hidden="true" className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="relative pt-[96px] pb-[56px] pr-16 semi-container-l h-full">
						<header className="max-w-[459px]">
							<h3 className="text-[32px] font-bold leading-[normal]">Museo de Arte de San Marcos</h3>
							<p className="mt-6 font-medium leading-[24px]">Tiene como misión vincular sus colecciones con los diversos públicos facilitando su apreciación, conocimiento, identificación y reflexión, en tanto patrimonio cultural artístico, representativo de la memoria intercultural del Perú.</p>
						</header>
						<OutlineButton type="internal-link" href="#" theme="light" label="Explorar" className="mt-8" />
					</div>
				</article>
				<article className="pr-[104px] h-full relative">
					<figure className="absolute top-0 left-0 w-full h-full -z-10">
						<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/talleres.jpg" className="object-cover" alt="Museo de Arqueología y Antropología" fill />
					</figure>
					<div aria-hidden="true" className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
					<div className="relative pt-[96px] pb-[56px] pl-16 semi-container-r h-full">
						<header className="max-w-[459px]">
							<h3 className="text-[32px] font-bold leading-[normal]">Museo de Arqueología y Antropología</h3>
							<p className="mt-6 font-medium leading-[24px]">Es uno de los museos universitarios más antiguos y destacados del país y de la región, tanto por la custodia de sus invaluables artefactos cerámicos, textiles y líticos, así como por proporcionar una vista panorámica de todo el proceso histórico prehispánico.</p>
						</header>
						<OutlineButton type="internal-link" href="#" theme="light" label="Explorar" className="mt-8" />
					</div>
				</article>
			</div>
		</section>
	)
}

export default Museums