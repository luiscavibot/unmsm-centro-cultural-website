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
	theme?: 'dark' | 'light'
}

const Layout = ({ children, breadcrumbItems, portadaImage, theme = 'light' }: LayoutProps) => {

	const colors = {
		dark: 'bg-gray-2 text-white',
		light: 'bg-white'
	}

	return (
		<section className="relative h-full">
			<div id="imagen" className="fixed top-[--total-header-height] left-0 w-full h-[544px] -z-50">
				<Image
					// src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-agenda-cultural.webp"
					src={portadaImage}
					alt="background"
					fill
					objectFit="cover"
				/>
			</div>
			<div id="contenido" className="pt-[422px]">
				<div className={"px-4 lg:px-[104px] pt-16 rounded-t-[32px] overflow-hidden " + colors[theme]}>
					<div className="container">
						<Breadcrumb theme={theme} items={breadcrumbItems} />
					</div>
				</div>
				{children}
			</div>
		</section>
	)
}

export default Layout