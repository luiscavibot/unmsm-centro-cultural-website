import React, { Suspense, useState } from 'react'
import VerticalTab from '../../../atoms/tab/vertical-tab'

const tabs = {
	libros: React.lazy(
		() =>
			import(
				'@/infrastructure/ui/components/organisms/biblioteca/colecciones/tabs/libros'
			)
	),
	folletos: React.lazy(
		() =>
			import(
				'@/infrastructure/ui/components/organisms/biblioteca/colecciones/tabs/folletos'
			)
	),
	'publicaciones-periodicas': React.lazy(
		() =>
			import(
				'@/infrastructure/ui/components/organisms/biblioteca/colecciones/tabs/publicaciones-periodicas'
			)
	),
	'material-multimedia': React.lazy(
		() =>
			import(
				'@/infrastructure/ui/components/organisms/biblioteca/colecciones/tabs/material-multimedia'
			)
	),
	'colecciones-especiales': React.lazy(
		() =>
			import(
				'@/infrastructure/ui/components/organisms/biblioteca/colecciones/tabs/colecciones-especiales'
			)
	),
	'coleccion-ugarte-chamorro': React.lazy(
		() =>
			import(
				'@/infrastructure/ui/components/organisms/biblioteca/colecciones/tabs/coleccion-ugarte-chamorro'
			)
	),
} as const;

type TabKeys = keyof typeof tabs;

const Colecciones = () => {

	const [currentTab, setCurrentTab] = useState<TabKeys>('libros');

	const handleClick = (tab: TabKeys) => {
		setCurrentTab(tab);
	};

	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2 mb-12">La Biblioteca España de las Artes ofrece a la comunidad sanmarquina y al público en general, una serie de colecciones de diversas especialidades, entre ellas:</p>
					<div className="grid grid-cols-[290px_auto] gap-6">
						<div className="flex flex-col gap-4">
							<VerticalTab label='Libros' selected={currentTab == 'libros'} onClick={() => { handleClick('libros') }} />
							<VerticalTab label='Folletos' selected={currentTab == 'folletos'} onClick={() => { handleClick('folletos') }} />
							<VerticalTab label='Publicaciones periódicas' selected={currentTab == 'publicaciones-periodicas'} onClick={() => { handleClick('publicaciones-periodicas') }} />
							<VerticalTab label='Material multimedia' selected={currentTab == 'material-multimedia'} onClick={() => { handleClick('material-multimedia') }} />
							<VerticalTab label='Colecciones especiales' selected={currentTab == 'colecciones-especiales'} onClick={() => { handleClick('colecciones-especiales') }} />
							<VerticalTab label='Colección Ugarte Chamorro' selected={currentTab == 'coleccion-ugarte-chamorro'} onClick={() => { handleClick('coleccion-ugarte-chamorro') }} />
						</div>
						<div className="text-dark-blue-2 leading-[24px]">
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
					</div>
				</div>
			</div>
		</>
	)
}

export default Colecciones