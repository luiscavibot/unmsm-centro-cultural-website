import SecondaryButton from '@/ui/components/atoms/buttons/secondary-button';
import Title from '@/ui/components/atoms/title';
import Layout from '@/ui/components/organisms/shared/layout';
// import Image from 'next/image';
import React from 'react';

const breadcrumbItems = [
	{
		title: 'Inicio',
		path: '/',
	},
	{
		title: 'Direcciones artísticas',
		path: '',
	},
	{
		title: 'Dirección de Música UNMSM',
		path: '/direcciones-artisticas/musica',
	},
	{
		title: 'Historia de la dirección de Música',
		path: '/direcciones-artisticas/musica/historia',
	},
];

export default function MusicaHistoria() {
	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/musica_portada_87e634d1ee.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white">
					<div className="container">
						<div className="max-w-[814px] mx-auto pb-14">
							<Title className="text-center max-w-[437px] mx-auto">
								Historia de la dirección de Música
							</Title>
							<div className="leading-[24px] text-dark-blue-2 mb-4">
								<div>
									<p className="mb-5">
										En los primeros días del mes de setiembre de 1954 un grupo de alumnos sanmarquinos, dirigidos por Rosa Alarco, se reúnen en el salón de Grados de la Facultad de Letras. La actividad que iban a realizar no era considerada en el contenido académico de la vida universitaria, pues la música y en especial el canto coral eran totalmente extraños a San Marcos. Pero algunos estudiantes, entre los que destacaban los directivos de la Federación Universitaria de San Marcos opinaban que la música y la actividad coral ayudaría a redescubrir muestra identidad nacional. Entre estos dirigentes destacaba Alfonso Barrantes, quien apoyó de manera decisiva esta iniciativa. Así, gracias a esta suma de voluntades se fue configurando la personalidad artística y la vida del coro universitario de San Marcos.
									</p>
									<p className="mb-5">
										El Coro Universitario de San Marcos CUSM, fue fundado en 1961, a propuesta de la Federación de Estudiantes. Su directora fundadora fue la Sra. Rosa Alarco Larrabure quien estuvo al frente del Coro con mucho éxito hasta el año 1976. 
									</p>
								</div>
								{/* <div>
								<figure className="relative h-[400px] w-[644px] rounded-3xl overflow-hidden mx-auto">
									<Image
										src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-banda-universitaria-1.webp"
										className="object-cover h-full"
										alt="ballet 1"
										fill
										quality={100}
									/>
								</figure>
							</div> */}
								<div>
									<p className="mb-5">
										En su gran trayectoria artística ha ofrecido más de un millar de conciertos didácticos y populares, en Pueblos Jóvenes, Comunidades Campesinas, Centros de Reeducación, fabricas, Universidades, Colegios, etc. Ha recorrido el Perú en todas sus regiones, habiendo trascendido las fronteras nacionales. A partir de 1971 ha venido organizando anualmente en ocasión de su aniversario (23 de noviembre) las NOCHES CORALES UNIVERSITARIAS, con participación de todos los grupos corales de Centros Educativos Superiores de Lima. Debemos agregar que el CUSM estuvo integrado por estudiantes, trabajadores y por personas aficionadas al arte coral, como hasta la fecha.
									</p>
									<p className="mb-5">
										Según el Dr. Guillermo Thomberry,  el Coro de San Marcos trabajó algunos meses en 1941 bajo la dirección del músico Alejandro Koseff Integró el elenco con alumnos de varias facultades. 
										El diario La Prensa que con fecha 5 de setiembre de 1954, informaba que el número de adherentes crecía de reunión en reunión. Por lo que deducimos que la prensa y la intelectualidad limeña siempre estaban atentos a lo que ocurría en San Marcos, más aún cuando una artista de trayectoria ya reconocida como era Rosa Alarco, aparecía como responsable de dicho evento. 
										El primer concierto formal se realiza el día jueves 20 del mes de diciembre de 1955 en el Salón de Grados de la Universidad (Capilla Nuestra Señora de Loreto). 
									</p>
									<p className="mb-5">
										Las autoridades universitarias argüían no contar con el presupuesto necesario para formar el coro de la Universidad. Esta circunstancia puso a prueba la voluntad de Rosa Alarco, quien sin amilanarse perseveró en su propósito y se quedó hasta 1958 sin recibir emolumento alguno. La posibilidad de trabajar con un coro mixto a capella y el contagiante entusiasmo de los alumnos.
									</p>
									<p className="mb-5">
										El Coro Universitario de San Marcos (CUSM) ha contado a lo largo de su historia con destacados directores, entre ellos la reconocida musicóloga Rosa Alarco Larrabure (Perú, 1911-1980). Su labor al frente del coro comenzó de manera ad honorem hasta que, el 30 de septiembre de 1961, las autoridades universitarias aprobaron su contratación oficial mediante la Resolución N.º 18989, permitiéndole asumir la dirección del Coro Universitario de San Marcos hasta 1976.
									</p>
									<p className="mb-5">
										Junto a ella, un notable grupo de músicos ha contribuido a la dirección coral del CUSM, asegurando la continuidad y excelencia del ensamble. A continuación, se presentan los directores que han liderado el coro sanmarquino en orden cronológico según su gestión:
									</p>
									<ul className="list-none mb-5">
										<li>Abel Rosas (1975-1979)</li>
										<li>Nancy Pimentel (1980)</li>
										<li>Luis Craff (1981-1992)</li>
										<li>Carlos Bendezú (1992 - 1996)</li>
										<li>Nancy Pimentel (1997)</li>
										<li>Rene Peñaloza (1998-2000)</li>
										<li>
											Israel Wladimir Olaya Pérez
											(2000-2007)
										</li>
										<li>
											Jhon Michael Gómez García (2007)
										</li>
										<li>
											En el año 2009 la Dirección de Coro
											Universitario cambia de denominación
											a Dirección de Música.
										</li>
										<li>Abraham Padilla Benavides</li>
										<li>Enrique Vargas Machuca Acevedo</li>
										<li>Armando Vértiz Cayo (2016-2018)</li>
										<li>
											Israel Wladimir Olaya Pérez
											(2018-2022)
										</li>
										<li>
											Enrique Vargas Machuca Acevedo
											(2023-marzo 2024)
										</li>
									</ul>
								</div>
								{/* <div>
								<figure className="relative h-[400px] w-[644px] rounded-3xl overflow-hidden mx-auto">
									<Image
										src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-banda-universitaria-2.webp"
										className="object-cover h-full"
										alt="ballet 2"
										fill
										quality={100}
									/>
								</figure>
							</div> */}
								<div>
									<p className="mb-5">
										En la actualidad el Coro Universitario está bajo la dirección de los Maestros José Mendieta Echevarría y Rafael González Carranza, quienes tienen a su cargo los cursos de Técnica vocal y lectura musical de la Dirección de Música del Centro Cultural de San Marcos.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-[104px] gap-5 bg-green text-white py-8 lg:py-[45px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-contactanos.svg')] bg-no-repeat bg-[-123px_10px]">
					<div className="container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
						<div className="flex flex-col lg:flex-row lg:items-center justify-center gap-2 lg:gap-8">
							<h2 className="text-[24px] lg:text-[32px] font-semibold leading-[normal] lg:max-w-[416px]">
								Explora y aprende en el Centro Cultural de San Marcos
							</h2>
							<p className="max-lg:text-sm font-normal leading-[24px] lg:max-w-[464px]">
								Descubre un mundo de conocimiento, arte y
								cultura con nuestras actividades exclusivas
								¡Únete y sé parte de nuestra comunidad!
							</p>
						</div>
						<div className="flex flex-col gap-y-4">
							<SecondaryButton
								type="internal-link"
								href="/cursos-y-talleres"
								theme="dark"
								label="Cursos y talleres"
							/>
							<SecondaryButton
								type="internal-link"
								href="/agenda-cultural"
								theme="dark"
								label="Eventos"
							/>
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
}
