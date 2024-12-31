import Image from 'next/image'
import React from 'react'
import Breadcrumb from '@/infrastructure/ui/components/molecules/breadcrumb'

interface BreadcrumbItem {
	title: string
	path: string
}

interface LayoutProps {
	children: React.ReactNode
	breadcrumbItems: BreadcrumbItem[]
	portadaImage: string
}

const Layout = ({ children, breadcrumbItems, portadaImage }: LayoutProps) => {
	return (
		<section className="relative h-full">
			<div id="imagen" className="fixed top-[--header-top-height] left-0 w-full h-[544px] z-[-1]">
				<Image
					// src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-agenda-cultural.webp"
					src={portadaImage}
					alt="background"
					fill
					objectFit="cover"
				/>
			</div>
			<div id="contenido" className="pt-[369px]">
				<div className="px-4 lg:px-[104px] bg-white pt-16 rounded-t-[32px] overflow-hidden">
					<div className="container">
						<Breadcrumb items={breadcrumbItems} />
					</div>
				</div>
				{children}
			</div>
		</section>
	)
}

export default Layout