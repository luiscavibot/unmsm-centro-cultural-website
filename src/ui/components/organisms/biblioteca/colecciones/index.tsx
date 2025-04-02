import React, { Suspense, useState } from 'react';
import VerticalTab from '@/ui/components/atoms/tab/vertical-tab';
import ColeccionUgarteIcon from '@/ui/components/atoms/icons/coleccion-ugarte-icon';
import ColeccionesIcon from '@/ui/components/atoms/icons/colecciones-icon';
import FolletosIcon from '@/ui/components/atoms/icons/folletos-icon';
import LibrosIcon from '@/ui/components/atoms/icons/libros-icon';
import PublicacionesIcon from '@/ui/components/atoms/icons/publicaciones-icon';
import MaterialIcon from '@/ui/components/atoms/icons/material-icon';

const tabs = {
	libros: React.lazy(
		() =>
			import(
				'@/ui/components/organisms/biblioteca/colecciones/tabs/libros'
			)
	),
	folletos: React.lazy(
		() =>
			import(
				'@/ui/components/organisms/biblioteca/colecciones/tabs/folletos'
			)
	),
	'publicaciones-periodicas': React.lazy(
		() =>
			import(
				'@/ui/components/organisms/biblioteca/colecciones/tabs/publicaciones-periodicas'
			)
	),
	'material-multimedia': React.lazy(
		() =>
			import(
				'@/ui/components/organisms/biblioteca/colecciones/tabs/material-multimedia'
			)
	),
	'colecciones-especiales': React.lazy(
		() =>
			import(
				'@/ui/components/organisms/biblioteca/colecciones/tabs/colecciones-especiales'
			)
	),
	'coleccion-ugarte-chamorro': React.lazy(
		() =>
			import(
				'@/ui/components/organisms/biblioteca/colecciones/tabs/coleccion-ugarte-chamorro'
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
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2 mb-12">
						La Biblioteca España de las Artes ofrece a la comunidad
						sanmarquina y al público en general, una serie de
						colecciones de diversas especialidades, entre ellas:
					</p>
					<div className="stroke-dark-red fill-dark-red stroke-dark-blue-2 hidden invisible"></div>
					<div className="grid grid-cols-1 md:grid-cols-[290px_auto] gap-6">
						<div className="flex flex-row md:flex-col gap-4 max-md:overflow-auto">
							<VerticalTab
								label="Libros"
								selected={currentTab == 'libros'}
								onClick={() => {
									handleClick('libros');
								}}
								icon={
									<LibrosIcon
										color="dark"
										selected={currentTab == 'libros'}
									/>
								}
							/>
							<VerticalTab
								label="Folletos"
								selected={currentTab == 'folletos'}
								onClick={() => {
									handleClick('folletos');
								}}
								icon={
									<FolletosIcon
										color="dark"
										selected={currentTab == 'folletos'}
									/>
								}
							/>
							<VerticalTab
								label="Publicaciones periódicas"
								selected={
									currentTab == 'publicaciones-periodicas'
								}
								onClick={() => {
									handleClick('publicaciones-periodicas');
								}}
								icon={
									<PublicacionesIcon
										color="dark"
										selected={
											currentTab ==
											'publicaciones-periodicas'
										}
									/>
								}
							/>
							<VerticalTab
								label="Material multimedia"
								selected={currentTab == 'material-multimedia'}
								onClick={() => {
									handleClick('material-multimedia');
								}}
								icon={
									<MaterialIcon
										color="dark"
										selected={
											currentTab == 'material-multimedia'
										}
									/>
								}
							/>
							<VerticalTab
								label="Colecciones especiales"
								selected={
									currentTab == 'colecciones-especiales'
								}
								onClick={() => {
									handleClick('colecciones-especiales');
								}}
								icon={
									<ColeccionesIcon
										color="dark"
										selected={
											currentTab ==
											'colecciones-especiales'
										}
									/>
								}
							/>
							<VerticalTab
								label="Colección Ugarte Chamorro"
								selected={
									currentTab == 'coleccion-ugarte-chamorro'
								}
								onClick={() => {
									handleClick('coleccion-ugarte-chamorro');
								}}
								icon={
									<ColeccionUgarteIcon
										color="dark"
										selected={
											currentTab ==
											'coleccion-ugarte-chamorro'
										}
									/>
								}
							/>
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
	);
};

export default Colecciones;
