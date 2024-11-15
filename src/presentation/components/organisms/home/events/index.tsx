import Image from 'next/image'
import React from 'react'

const Events: React.FC = () => {
	return (
		<>
			<h2 className="hidden sr-only">Eventos</h2>
			<div className="grid grid-cols-[57%_auto] h-[720px]">
				<div className="relative">
					<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/default-image.jpg" className="object-cover" alt="events" fill />
				</div>
				<div className="bg-white text-dark-text-color pl-16 pr-[104px] py-14 flex items-end">
					<div className="max-w-[450px]">
						<h3 className="text-[40px] font-bold leading-[normal] mb-4">Cine al aire libre: «Capitalismos capitales»</h3>
						<p className="leading-6">En colaboración con la Dirección de Cine y Producción Audiovisual buscamos visibilizar la importancia de la preservación y restauración del patrimonio cinematográfico nacional.</p>
						<div className="leading-[normal] text-sm font-semibold mt-5 space-y-3">
							<p>Viernes, 16 de noviembre</p>
							<p>3:30 p.m.</p>
							<p>Virtual (Vía transmisión Facebook Live)</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Events