import Link from 'next/link'
import React from 'react'

const Contact: React.FC = () => {
	return (
		<>
			<div className="px-[104px] gap-5 bg-green text-white py-[45px]">
				<div className="container flex flex-row items-center justify-between">
					<div className="flex flex-row items-center justify-center">
						<h2 className="text-[32px] font-semibold leading-[normal] max-w-[337px]">Reserva una visita guiada</h2>
						<p className="font-medium leading-[24px] max-w-[523px]">Vive una experiencia única en el corazón de la universidad más antigua de América ¡Te esperamos!</p>
					</div>
					<Link className="p-4 border-[1px] border-white rounded-lg flex items-center" href="/contactanos">
						<span className="leading-[16px] font-semibold inline-block">Contáctanos</span>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Contact