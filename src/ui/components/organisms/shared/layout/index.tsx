import Image from 'next/image';
import React from 'react';
import Breadcrumb from '@/ui/components/molecules/breadcrumb';

interface BreadcrumbItem {
	title: string;
	path: string;
}

interface LayoutProps {
	children: React.ReactNode;
	breadcrumbItems: BreadcrumbItem[];
	portadaImage: string;
	theme?: 'dark' | 'light';
}

const Layout = ({
	children,
	breadcrumbItems,
	portadaImage,
	theme = 'light',
}: LayoutProps) => {
	const colors = {
		dark: 'bg-gray-2 text-white',
		light: 'bg-white',
	};

	return (
		<section className="relative h-full">
			<div
				id="imagen"
				className="fixed top-[--total-header-height] left-0 w-full h-[--portada-space-height-md] md:h-[--portada-image-height] -z-50"
			>
				<Image
					src={portadaImage}
					alt="background"
					fill
					className="object-cover object-top"
					quality={100}
				/>
			</div>
			<div id="contenido" className="pt-[--portada-space-height-md] md:pt-[--padding-top-to-portada-image]">
				<div
					className={
						'px-4 lg:px-[104px] pt-[46px] md:pt-16 md:rounded-t-[--border-top-radius-layout] overflow-hidden ' +
						colors[theme]
					}
				>
					<div className="container">
						<Breadcrumb theme={theme} items={breadcrumbItems} />
					</div>
				</div>
				{children}
			</div>
		</section>
	);
};

export default Layout;
