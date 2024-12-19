import React from 'react'
import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button'

const Contact: React.FC = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] gap-5 bg-green text-white py-8 lg:py-[45px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-contactanos.svg')] bg-no-repeat bg-[-47px_-100px]">
				<div className="container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
					<div className="flex flex-col lg:flex-row lg:items-center justify-center gap-2 lg:gap-6">
						<h2 className="text-[24px] lg:text-[32px] font-semibold leading-[normal] lg:max-w-[337px]">Reserva una visita guiada</h2>
						<p className="max-lg:text-sm font-medium leading-[24px] lg:max-w-[523px]">Vive una experiencia única en el corazón de la universidad más antigua de América ¡Te esperamos!</p>
					</div>
					<SecondaryButton type="internal-link" href="/contactanos" theme="dark" label="Contáctanos" />
				</div>
			</div>
		</>
	)
}

export default Contact