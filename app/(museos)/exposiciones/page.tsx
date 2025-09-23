'use client';

import Tab from '@/ui/components/atoms/tab';
import Title from '@/ui/components/atoms/title';
import Layout from '@/ui/components/organisms/shared/layout';
import React, { Suspense, useState } from 'react';

const tabs = {
	exposiciones: React.lazy(
		() => import('@/ui/components/organisms/museums/exposiciones')
	),
} as const;

type TabKeys = keyof typeof tabs;

const breadcrumbItems = [
	{
		title: 'Inicio',
		path: '/',
	},
	{
		title: 'Exposiciones',
		path: '/exposiciones',
	},
];

export default function Exposiciones() {
	const [currentTab, setCurrentTab] = useState<TabKeys>('exposiciones');

	const handleClick = (tab: TabKeys) => {
		setCurrentTab(tab);
	};

	return (
		<Layout
			portadaImage="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/ccsm/exposiciones_portada_91ad764bf1.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white pb-20">
					<div className="container">
						<div className="max-w-[814px] mx-auto">
							<Title className="text-center">Exposiciones</Title>
							<div className="leading-[24px] text-dark-blue-2">
								<p className="mb-3">
									Te invitamos a sumergirte en un viaje
									fascinante a través del arte, la historia y
									la cultura. Descubre nuestras exposiciones
									permanentes y temporales, donde conviven
									piezas emblemáticas de nuestro patrimonio
									con obras contemporáneas que desafían la
									imaginación.
								</p>
								<p>
									Cada espacio está diseñado para ofrecerte
									una experiencia única, desde los vestigios
									arqueológicos hasta las propuestas más
									vanguardistas del arte actual. Ven y recorre
									los pasillos de nuestros museos, donde cada
									exhibición es una puerta abierta al
									conocimiento, la reflexión y el disfrute
									cultural.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[56px] pb-[24px]">
					<div className="container">
						<div className="flex gap-x-4">
							<Tab
								label="Exposiciones"
								selected={currentTab === 'exposiciones'}
								onClick={() => {
									handleClick('exposiciones');
								}}
							/>
						</div>
					</div>
				</div>
				<div>
					<Suspense
						fallback={
							<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[24px]">
								<div className="container">
									<p className="max-w-[641px] leading-[24px] text-dark-blue-2">
										Cargando...
									</p>
								</div>
							</div>
						}
					>
						{React.createElement(tabs[currentTab])}
					</Suspense>
				</div>
			</>
		</Layout>
	);
}
