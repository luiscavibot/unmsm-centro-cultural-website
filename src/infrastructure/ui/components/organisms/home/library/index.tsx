import React from 'react'
import Image from 'next/image'
import OutlineButton from '@/infrastructure/ui/components/atoms/buttons/outline-button'

const Library = () => {
	return (
		<section id="biblioteca" className="scroll-mt-28">
			<div className="relative px-[104px] pt-[96px] pb-[56px] h-[720px] group">
				<figure className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
					<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/library-home.webp" className="object-cover transform group-hover:scale-[1.086] transition-transform duration-[800ms] ease-out" alt="events" fill />
				</figure>
				<div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
				<div className="container h-full flex items-center justify-center">
					<div className="max-w-[606px] text-center">
						<h2 className="text-[32px] font-bold leading-[normal]">Biblioteca España de las Artes</h2>
						<p className="mt-2 leading-[24px]">Contamos con una gran variedad de recursos bibliográficos en diferentes formatos y disciplinas; siendo también un espacio de recreación y fomento de actividades culturales.</p>
						<OutlineButton type="internal-link" href="#" theme="light" label="Explorar" className="mt-8" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Library