'use client'

import Title from '@/ui/components/atoms/title';
import Layout from '@/ui/components/organisms/shared/layout';
import React from 'react';
import { DirectorioService } from '@/services/directorio.service';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

const breadcrumbItems = [
	{
		title: 'Inicio',
		path: '/',
	},
	{
		title: 'Directorio',
		path: '/directorio',
	},
];

export default function Directorio() {

	const { data, error, isFetching, isLoading } = useQuery({
		queryKey: ['directorio'],
		queryFn: () => DirectorioService.getEntries(),
		placeholderData: keepPreviousData,
		refetchOnWindowFocus: false,
	});
	const directorioData = data?.elementos_directorio || [];

	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/directorio_portada_efe70e6ad7.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white">
					<div className="container">
						<div className="max-w-[814px] mx-auto pb-14">
							<Title className="text-center">Directorio</Title>
							<div className="leading-[24px] text-dark-blue-2 mb-4">
								<p className="mb-3">
									Los anexos telefónicos indicados se
									encuentran activos. También pueden
									contactarse vía correo electrónico.
								</p>
								<p className="font-bold">
									Central telefónica: 619 7000
								</p>
							</div>
						</div>
						<div className="relative overflow-x-auto max-w-full pb-[104px]">
							<table className="max-w-full w-full">
								<thead>
									<tr>
										<th className="text-left">Unidad</th>
										<th className="text-left">Cargo</th>
										<th className="text-left">Nombres</th>
										<th className="text-left">Anexo</th>
										<th className="text-left">Email</th>
									</tr>
								</thead>
								<tbody>
									{directorioData.length === 0 && (
										<tr>
											<td colSpan={5} className="text-center py-4">
												{isLoading || isFetching ? 'Cargando...' : 'No hay datos disponibles.'}
											</td>
										</tr>
									)}

									{directorioData.map((item) => (
										<tr key={item.id}>
											<td>{item.unidad || ''}</td>
											<td>{item.cargo || ''}</td>
											<td>{item.nombre || ''}</td>
											<td>{item.anexo || ''}</td>
											<td className="break-words">
												{item.correos.length > 0
													? item.correos.map((correo, i) => (
															<React.Fragment key={correo.id}>
																{correo.correo}
																{i < item.correos.length - 1 && <br />}
															</React.Fragment>
													))
													: ''}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						{error && (
							<p className="text-red-600 text-center">Error al cargar el directorio.</p>
						)}
					</div>
				</div>
			</>
		</Layout>
	);
}
