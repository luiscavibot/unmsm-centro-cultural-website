import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArtisticDirections: React.FC = () => {
	return (
		<section className="px-[104px] py-[104px] bg-black-custom scroll-mt-28" id="direcciones-artisticas">
			<div className="container grid grid-cols-3 gap-6">
				<div className="space-y-6">
					<div className="relative w-full aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-full">
							<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/ballet.webp" className="object-cover" alt="Ballet" fill />
						</div>
						<h3 className="relative text-2xl font-bold text-center">Ballet</h3>
					</div>
					<div className="relative w-full aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-full">
							<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/ballet.webp" className="object-cover" alt="Ballet" fill />
						</div>
						<h3 className="relative text-2xl font-bold text-center">Folklore</h3>
					</div>
				</div>
				<div className="space-y-6">
					<div className="text-center mb-12">
						<h2 className="font-messiri text-[40px] font-semibold">Direcciones artísticas</h2>
						<p className="mt-[14px] leading-[24px]">Esta sección celebra el talento y la creatividad de estudiantes y maestros que dan vida a expresiones únicas.</p>
						<Link href="/direcciones-artisticas" className="link">Leer más</Link>
					</div>
					<div className="relative w-full aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-full">
							<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/ballet.webp" className="object-cover" alt="Ballet" fill />
						</div>
						<h3 className="relative text-2xl font-bold text-center max-w-[211px]">Cine y Dirección audiovisual</h3>
					</div>
					<div className="relative w-full aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-full">
							<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/ballet.webp" className="object-cover" alt="Ballet" fill />
						</div>
						<h3 className="relative text-2xl font-bold text-center">Banda universitaria</h3>
					</div>
				</div>
				<div className="space-y-6">
					<div className="relative w-full aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-full">
							<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/ballet.webp" className="object-cover" alt="Ballet" fill />
						</div>
						<h3 className="relative text-2xl font-bold text-center">Música</h3>
					</div>
					<div className="relative w-full aspect-[394/420] flex items-center justify-center rounded-2xl overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-full">
							<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/ballet.webp" className="object-cover" alt="Ballet" fill />
						</div>
						<h3 className="relative text-2xl font-bold text-center">Teatro</h3>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ArtisticDirections