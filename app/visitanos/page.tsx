import Title from '@/infrastructure/ui/components/atoms/title';
import Layout from '@/infrastructure/ui/components/organisms/shared/layout';
import Link from 'next/link';
import React from 'react'

const breadcrumbItems = [
	{
		title: 'Inicio',
		path: '/',
	},
	{
		title: 'Visítanos',
		path: '/visitanos',
	},
];

export default function Visitanos() {
	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/biblioteca_portrait_1_92ac023c53.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white pb-20">
					<div className="container">
						<div className="max-w-[641px] mx-auto mb-14">
							<Title className="text-center">
								Visítanos
							</Title>
							<div className="leading-[24px] text-dark-blue-2">
								<p className="mb-3">
									La <Link href="/nosostros/direccion-de-turismo" className="underline text-dark-red font-medium">Dirección de Turismo</Link> cuenta con un servicio permanente de visitas guiadas destinados a la atención del turista nacional y extranjero.
								</p>
							</div>
						</div>
						<div className="max-w-[865px] mx-auto mb-14">
							<div className="bg-green-2 rounded-3xl p-12 text-white text-[20px] leading-[30px] space-y-2">
								<p className="font-bold text-center">¡Ven y disfruta la cultura!</p>
								<p className="font-medium text-center">De lunes a sábado, de 10:00 a 1:00 p.m. y de 2:00 a 5:00 p. m.</p>
								<p className="font-medium text-center">Av. Nicolás de Piérola 1222, Parque Universitario, Centro Histórico de Lima.</p>
							</div>
						</div>
						<div className="leading-[24px] text-dark-blue-2 flex flex-row gap-x-24">
							<div className="basis-1/2">
								<p className="mb-6">
									El boleto incluye el recorrido del guiado a los <span className="font-bold">históricos patios y salones ceremoniales</span> del complejo arquitectónico de la Casona de San Marcos además de las muestras permanentes: Colección de retratos de catedráticos y rectores de la Universidad de San Marcos (siglos XVI-XXI), Vargas Llosa en San Marcos y exposiciones presentadas por el Museo de Arte de San Marcos y el Museo de Arqueología y Antropología de San Marcos.
								</p>
								<p>
									<span className="font-bold">Información y reservas:</span>
									<br />
									turismo.ccsm@unmsm.edu.pe
									<br />
									Cel. +51 947 027 758
									<br />
									Lic. Marco Rosales León
									<br />
									(Llamar solo de lunes a viernes en horario de oficina.)
								</p>
							</div>
							<div className="basis-1/2">
								<div className="relative overflow-x-auto max-w-[813px]">
									<table className="max-w-full w-full">
										<thead>
											<tr>
												<th className="text-left">Detalles</th>
												<th>Tarifas</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Adultos (Nacionales y extranjeros)</td>
												<td>S/ 8.00</td>
											</tr>
											<tr>
												<td>Estudiantes universitarios (con carnet)</td>
												<td>S/ 4.00</td>
											</tr>
											<tr>
												<td>Escolares y adultos mayores</td>
												<td>S/ 2.00</td>
											</tr>
											<tr>
												<td>Comunidad sanmarquina: Estudiantes, trabajadores, docentes (Con identificación vigente)</td>
												<td>Ingreso libre</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		</Layout>
	)
}
