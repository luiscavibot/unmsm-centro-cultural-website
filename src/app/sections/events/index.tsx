import Image from 'next/image'
import React from 'react'

const Events: React.FC = () => {
	return (
		<>
			<div className="grid grid-cols-[57%_auto]">
				<div className="relative aspect-[822/720]">
					<Image src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/default-image.jpg" className="object-cover" alt="events" fill />
				</div>
				<div className="bg-white"></div>
			</div>
		</>
	)
}

export default Events