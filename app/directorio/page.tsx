import Title from '@/infrastructure/ui/components/atoms/title';
import Layout from '@/infrastructure/ui/components/organisms/shared/layout';
import React from 'react';

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

export default function DependenciasAdministrativas() {
	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/ballet_ccsm_portada_b28c850aa6.webp"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white">
					<div className="container">
						<div className="max-w-[814px] mx-auto pb-14">
							<Title className="text-center">
								Directorio
							</Title>
							<div className="leading-[24px] text-dark-blue-2 mb-4">
								<p className="mb-3">
									Los anexos telefónicos indicados se encuentran activos. También pueden contactarse vía correo electrónico.
								</p>
								<p className="font-bold">Central telefónica: 619 7000</p>
							</div>
						</div>
						<div className="relative overflow-x-auto max-w-full pb-[104px]">
							<table className="max-w-full w-full">
								<thead>
									<tr>
										<th className="text-left">
											Unidad
										</th>
										<th className="text-left">
											Cargo
										</th>
										<th className="text-left">
											Nombres
										</th>
										<th className="text-left">
											Anexo
										</th>
										<th className="text-left">
											Email
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Dirección General</td>
										<td>Director</td>
										<td>César Puerta Villagaray</td>
										<td>5201</td>
										<td className="break-words">direccion-g.ccsm@unmsm.edu.pe</td>
									</tr>
									<tr>
										<td></td>
										<td>Secretaria</td>
										<td>Victoria Bertha Hidones Rosales</td>
										<td>5202</td>
										<td className="break-words">
											direccion-g.ccsm@unmsm.edu.pe
											<br />
											vhidonesr_ac@unmsm.edu.pe
										</td>
									</tr>
									<tr>
										<td></td>
										<td>Mesa de Partes Virtual</td>
										<td>Lludy Labajos Mesia</td>
										<td></td>
										<td className="break-words">mesadepartesvirtual.centrocultural@unmsm.edu.pe</td>
									</tr>
									<tr>
										<td></td>
										<td>Coordinador</td>
										<td>Miguel Flores Gonzáles</td>
										<td>5209</td>
										<td className="break-words">
											direccion-g.ccsm@unmsm.edu.pe
											<br />
											mfloresg_ac@unmsm.edu.pe
										</td>
									</tr>
									<tr>
										<td>Dirección Ejecutiva</td>
										<td>Directora</td>
										<td>Liliana Christina Villanueva Meyhuay</td>
										<td>5221</td>
										<td className="break-words">direccion-e.ccsm@unmsm.edu.pe</td>
									</tr>
									<tr>
										<td></td>
										<td>Asistente Administrativo</td>
										<td>Alicia Matos Casildo</td>
										<td>5203</td>
										<td className="break-words">
											direccion-e.ccsm@unmsm.edu.pe
											<br />
											amattosc_ac@unmsm.edu.pe
										</td>
									</tr>
									<tr>
										<td>Ballet de San Marcos</td>
										<td>Coordinadora</td>
										<td>Verónika Rodriguez</td>
										<td></td>
										<td className="break-words">ballet.ccsm@unmsm.edu.pe</td>
									</tr>
									<tr>
										<td>Banda Universitaria de Música</td>
										<td>Director</td>
										<td>Moisés Hospina Zúñiga</td>
										<td></td>
										<td className="break-words">bandauniversitaria.ccsm@unmsm.edu.pe</td>
									</tr>
									<tr>
										<td>Biblioteca España de las Artes</td>
										<td>Directora</td>
										<td>Jhoana Hancco Teccsirupay</td>
										<td></td>
										<td className="break-words">biblioteca.ccsm@unmsm.edu.pe</td>
									</tr>
									<tr>
										<td>Dirección de Cine y Producción Audiovisual</td>
										<td>Directora</td>
										<td>Estefanía De Cara</td>
										<td>5211</td>
										<td className="break-words">dcpa.centrocultural@unmsm.edu.pe</td>
									</tr>
									<tr>
										<td>Centro Universitario de Folklore</td>
										<td>Director</td>
										<td>Eduardo Fiestas Peredo</td>
										<td>Text</td>
										<td className="break-words">folklore.ccsm@unmsm.edu.pe</td>
									</tr>
									<tr>
										<td>Dirección de Música</td>
										<td></td>
										<td>Eduardo Fiestas Peredo</td>
										<td>Text</td>
										<td className="break-words">direcciondemusica@unmsm.edu.pe</td>
									</tr>
									<tr>
										<td>Teatro Universitario de San Marcos</td>
										<td>Coordinadora</td>
										<td>Eduardo Fiestas Peredo</td>
										<td>Text</td>
										<td className="break-words">teatro.ccsm@unmsm.edu.pe</td>
									</tr>
									<tr>
										<td>Dirección de Turismo</td>
										<td>Coordinador</td>
										<td>Eduardo Fiestas Peredo</td>
										<td>Text</td>
										<td className="break-words">
											turismo.ccsm@unmsm.edu.pe
											<br />
											mrosalesl_ac@unmsm.edu.pe
										</td>
									</tr>
									<tr>
										<td>Museo de Arqueología y Antropología</td>
										<td>Director</td>
										<td>Eduardo Fiestas Peredo</td>
										<td>Text</td>
										<td className="break-words">
											museoarql.ccsm@unmsm.edu.pe
											<br />
											htantaleany@unmsm.edu.pe
										</td>
									</tr>
									<tr>
										<td>Museo de Arte</td>
										<td>Directora</td>
										<td>Eduardo Fiestas Peredo</td>
										<td>Text</td>
										<td className="break-words">museoarte.ccsm@unmsm.edu.pe</td>
									</tr>
									<tr>
										<td>Dirección de Comunicaciones</td>
										<td>Director</td>
										<td>Eduardo Fiestas Peredo</td>
										<td>Text</td>
										<td className="break-words">prensa.ccsm@unmsm.edu.pe</td>
									</tr>
									<tr>
										<td>Unidad de Control de Asistencia</td>
										<td>Jefe(e)</td>
										<td>Eduardo Fiestas Peredo</td>
										<td>Text</td>
										<td className="break-words">javier.rodriguez@unmsm.edu.pe</td>
									</tr>
									<tr>
										<td>Unidad de Servicios Generales</td>
										<td>Encargado</td>
										<td>Eduardo Fiestas Peredo</td>
										<td>Text</td>
										<td className="break-words">jariasb_ac@unmsm.edu.pe</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
}
