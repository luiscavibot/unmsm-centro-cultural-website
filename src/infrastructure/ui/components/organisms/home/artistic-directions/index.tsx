import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArtisticDirections: React.FC = () => {
	return (
		<section className="px-6 lg:px-[104px] pt-[36px] pb-[96px] lg:py-[104px] bg-black-custom scroll-mt-28" id="direcciones-artisticas">
			<div className="container grid lg:grid-cols-3 gap-4 lg:gap-6">
				<div className="space-y-4 lg:space-y-6 lg:order-1 order-2">
					<div className="relative w-full max-lg:h-[200px] lg:aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-full">
							<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/ballet.webp" className="object-cover" alt="Ballet" fill />
						</div>
						<h3 className="relative text-2xl font-bold text-center text-white">Ballet</h3>
					</div>
					<div className="relative w-full max-lg:h-[200px] lg:aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-full">
							<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/ballet.webp" className="object-cover" alt="Ballet" fill />
						</div>
						<h3 className="relative text-2xl font-bold text-center text-white">Folklore</h3>
					</div>
				</div>
				<div className="space-y-4 lg:space-y-6 lg:order-2 order-1">
					<div className="text-center text-white mb-8 lg:mb-12">
						<h2 className="font-messiri leading-[normal] lg:leading-[40px] text-[24px] lg:text-[40px] font-semibold">Direcciones artísticas</h2>
						<p className="mt-[14px] max-lg:mb-[14px] text-sm lg:text-base leading-[21px] lg:leading-[24px]">Esta sección celebra el talento y la creatividad de estudiantes y maestros que dan vida a expresiones únicas.</p>
						<Link href="/direcciones-artisticas" className="link">Leer más</Link>
					</div>
					<div className="relative w-full max-lg:h-[200px] lg:aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-full">
							<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/ballet.webp" className="object-cover" alt="Ballet" fill />
						</div>
						<h3 className="relative text-2xl font-bold text-center text-white max-w-[211px]">Cine y Dirección audiovisual</h3>
					</div>
					<div className="relative w-full max-lg:h-[200px] lg:aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-full">
							<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/ballet.webp" className="object-cover" alt="Ballet" fill />
						</div>
						<h3 className="relative text-2xl font-bold text-center text-white">Banda universitaria</h3>
					</div>
				</div>
				<div className="space-y-4 lg:space-y-6 lg:order-3 order-3">
					<div className="relative w-full max-lg:h-[200px] lg:aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-full">
							<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/ballet.webp" className="object-cover" alt="Ballet" fill />
						</div>
						<h3 className="relative text-2xl font-bold text-center text-white">Música</h3>
					</div>
					<div className="relative w-full max-lg:h-[200px] lg:aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-full">
							<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/ballet.webp" className="object-cover" alt="Ballet" fill />
						</div>
						<h3 className="relative text-2xl font-bold text-center text-white">Teatro</h3>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ArtisticDirections