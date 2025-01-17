import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
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
				<div className="px-4 lg:px-[104px] bg-dark-red-2 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-2.svg')] bg-no-repeat bg-[161px_-290px] flex flex-row gap-y-8 gap-x-6 leading-[24px]">
					<div className="basis-1/3 space-y-8">
						<div>
							<h2 className="text-[40px] font-bold leading-[60px] mb-3">Programas educativos para escolares</h2>
							<p>Casona de San Marcos: el Aula de clase de la Historia del Perú. El recinto como un aula de clase abierta a partir de su historia y la historia de la Universidad Decana de América permite los conceptos previos o la consolidación de los mismos a partir del desarrollo de sus recorridos temáticos.</p>
						</div>
						<div>
							<h3 className="mb-2 font-bold">Perú colonial</h3>
							<p>Como noviciado de la Compañía de Jesús, local del Real Convictorio de San Carlos y con la impronta de la Universidad de San Marcos; la Casona sanmarquina es un lugar único para el conocimiento del Perú de la Colonia tanto en lo político, social, económico y de mentalidades.</p>
						</div>
						<div>
							<h3 className="mb-2 font-bold">Educación colonial</h3>
							<p>La Casona sanmarquina albergó al noviciado jesuita de San Antonio Abad, al Real Convictorio de San Carlos y la Universidad de San Marcos: tres instituciones que marcaron la educación en el Perú de la Colonia. El conocimiento de ellas permite adentrarnos en la particularidad educativa de aquel tiempo.</p>
						</div>
					</div>
					<div className="basis-1/3 space-y-8">
						<div>
							<h3 className="mb-2 font-bold">Proceso de la independecia</h3>
							<p className="mb-8">En el Real Convictorio de San Carlos se formaron los intelectuales de la independencia. El hombre responsable, en gran parte de esa hazaña, fue Toribio Rodríguez de Mendoza quien propició un conjunto de reformas educativas acorde a las modernas ideas de la ilustración.</p>
							<p>A tono con las celebraciones de la fiesta del Centenario se inauguró en 1921 el Parque Universitario y se transformó en 1924 la antigua iglesia San Antonio de Abad en el Panteón de los Próceres como lugar de memoria y celebración de los grandes hombres de la independencia.</p>
						</div>
						<div>
							<h3 className="mb-2 font-bold">Mujeres en San Marcos</h3>
							<p className="mb-8">En 1882 Margarita Muñoz Seguín se matriculó en la Facultad de Letras de la Universidad de San Marcos inaugurando la presencia femenina en la Decana de América. El 1908 de dio la Ley 801 que permitió el ingreso de las mujeres a la universidad.</p>
							<p>El recorrido presentará el panorama de la mujer en relación a la educación y especialmente su acceso a la universidad. Conoceremos a un conjunto de destacadas exponentes sanmarquinas de las letras y las ciencias en el Perú de los siglos XIX y XX.</p>
						</div>
					</div>
					<div className="basis-1/3 space-y-8">
						<div>
							<h3 className="mb-2 font-bold">Guerra del Pacífico</h3>
							<p>La Universidad de San Marcos participó activamente en la guerra de 1879. Desde la formación de las legiones estudiantiles militares, la colaboración económica de las autoridades y de los profesores sanmarquinos, la presencia de estudiantes sanmarquinos en la Campaña del Sur, el sacrificio en la defensa de Lima y la ocupación de la Casona como cuartel del ejército chileno donde se vivió la violencia y el saqueo.</p>
						</div>
						<div>
							<h3 className="mb-2 font-bold">República aristocrática</h3>
							<p>Entre 1895 y 1919, el claustro sanmarquino fue un bastión importante de la fuerza política predominante; el Partido Civil además de ser el centro irradiador de la ideología aristocrática marcada por sus catedráticos y alumnos donde destacaban los integrantes de la Generación del 900 entre ellos José de la Riva Agüero y Osma.</p>
						</div>
						<div>
							<h3 className="mb-2 font-bold">Casona de San Marcos y su entorno</h3>
							<p>La Casona de San Marcos y el Panteón de los Próceres constituyen uno de los complejos arquitectónicos más destacados del Centro Histórico de Lima donde memoria, tradición y celebración se entrecruzan para un mejor conocimiento de la Historia del Perú. Recorremos la Casona de San Marcos y el Panteón de los Próceres.</p>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-[104px] gap-5 bg-blue-2 text-white py-8 lg:py-[45px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-blue-2.svg')] bg-no-repeat bg-[-47px_-100px]">
					<div className="container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
						<div className="flex flex-col lg:flex-row lg:items-center justify-center gap-2 lg:gap-8">
							<div>
								<h2 className="text-[24px] lg:text-[32px] font-semibold leading-[normal] lg:max-w-[416px]">
									Descubre la historia de la Casona
								</h2>
							</div>
							<p className="max-lg:text-sm font-medium leading-[24px] lg:max-w-[464px]">
								Sumérgete en el pasado y conoce los momentos que marcaron este emblemático espacio, símbolo de tradición y cultura.
							</p>
						</div>
						<SecondaryButton
							type="external-link"
							href="https://www.youtube.com/@museodearqueologiayantropo1140/videos"
							theme="dark"
							label="Leer más"
						/>
					</div>
				</div>
			</>
		</Layout>
	)
}
