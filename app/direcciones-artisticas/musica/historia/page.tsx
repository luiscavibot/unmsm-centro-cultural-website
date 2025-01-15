import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
import Title from '@/infrastructure/ui/components/atoms/title';
import Layout from '@/infrastructure/ui/components/organisms/shared/layout'
// import Image from 'next/image';
import React from 'react'

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
		title: 'Dirección de Música',
		path: '/direcciones-artisticas/musica',
	},
	{
		title: 'Historia de la dirección de Banda universitaria',
		path: '/direcciones-artisticas/musica/historia',
	},
];

export default function MusicaHistoria() {
  return (
	<Layout
		portadaImage="https://ccsm.unmsm.edu.pe/ccsm/agenda_banner_8a74d62f5c.jpg"
		breadcrumbItems={breadcrumbItems}
	>
		<>
			<div className="px-4 lg:px-[104px] bg-white">
				<div className="container">
					<div className="max-w-[814px] mx-auto pb-14">
						<Title className="text-center max-w-[437px] mx-auto">
							Historia de la dirección de Música
						</Title>
						<div className="leading-[24px] text-dark-blue-2 mb-4 space-y-10">
							<div>
								<p className="mb-5">
									En los primeros días del mes de setiembre de 1954 un grupo de alumnos sanmarquinos, dirigidos por Rosa Alarco, se reúnen en el salón de Grados de la Facultad de Letras. La actividad que iban a realizar no era considerada en el contenido académico de la vida universitaria, pues la música y en especial el canto coral eran totalmente extraños a San Marcos. Pero algunos estudiantes, entre los que destacaban los directivos de la Federación Universitaria de San Marcos opinaban que la música y la actividad coral ayudaría a redescubrir muestra identidad nacional. Entre estos dirigentes destacaba Alfonso Barrantes, quien apoyó de manera decisiva esta iniciativa. Así, gracias a esta suma de voluntades se fue configurando la personalidad artística y la vida del coro universitario de San Marcos. *
								</p>
								<p className="mb-5">
									El Coro Universitario de San Marcos CUSM, fue fundado en 1961, a propuesta de la Federación de Estudiantes. Su directora fundadora fue la Sra. Rosa Alarco Larrabure quien estuvo al frente del Coro con mucho éxito hasta el año 1976. *
								</p>
							</div>
							{/* <div>
								<figure className="relative h-[400px] w-[644px] rounded-3xl overflow-hidden mx-auto">
									<Image
										src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-banda-universitaria-1.webp"
										className="object-cover h-full"
										alt="ballet 1"
										layout="fill"
										quality={100}
									/>
								</figure>
							</div> */}
							<div>
								<p className="mb-5">
									En su gran trayectoria artística ha ofrecido más de un millar de conciertos didácticos y populares, en Pueblos Jóvenes, Comunidades Campesinas, Centros de Reeducación, fabricas, Universidades. Colegios, etc. Ha recorrido el Perú en todas sus regiones, habiendo trascendido las fronteras nacionales. A partir de 1971 ha venido organizando anualmente en ocasión de su aniversario (23 de noviembre) las NOCHES CORALES UNIVERSITARIAS, con participación de todos los grupos corales de Centros Educativos Superiores de Lima. Debemos agregar que el CUSM estuvo integrado por estudiantes, trabajadores y por personas aficionadas al arte coral*, como hasta la fecha.
								</p>
								<p className="mb-5">
									Según el Dr. Guillermo Thomberry. el Coro de San Marcos trabajó algunos meses en 1941 bajo la dirección del músico Alejandro Koseff Integró el elenco con alumnos de varias facultades. *
									El diario La Prensa que con fecha 5 de setiembre de 1954, informaba que el número de adherentes crecía de reunión en reunión. Por lo que deducimos que la prensa y la intelectualidad limeña siempre estaban atentos a lo que ocurría en San Marcos, más aún cuando una artista de trayectoria ya reconocida como era Rosa Alarco, aparecía como responsable de dicho evento. *
									El primer concierto formal se realiza el día jueves 20 del mes de diciembre de 1955 en el Salón de Grados de la Universidad (Capilla Nuestra Señora de Loreto). *
								</p>
								<p className="mb-5">
									Las autoridades universitarias argüían no contar con el presupuesto necesario para formar el coro de la Universidad. Esta circunstancia puso a prueba la voluntad de Rosa Alarco, quien sin amilanarse perseveró en su propósito y se quedó hasta 1958 sin recibir emolumento alguno. La posibilidad de trabajar con un coro mixto a capella y el contagiante entusiasmo de los alumnos *
								</p>
								<p className="mb-1">
									El Coro Universitario de San Marcos CUSM ha tenido entres sus directores:
									Rosa Alarco Larrabure* musicóloga (Perú 1911 -1980) “…Su trabajo siguió siendo ad-honorem hasta que las autoridades de la universidad aprueban, mediante la Resolución 18989 del 30 de setiembre de 1961, su contratación para dirigir el Coro Universitario de San Marcos. * lo cual lo hizo hasta 1976.
									Forman parte de este contingente de músicos dedicados a la dirección coral, los directores que se sucedieron en el Coro Sanmarquino. Ellos son en orden temporal según su gestión:
								</p>
								<ul className="list-none">
									<li>Abel Rosas (1975-1979) *</li>
									<li>Nancy Pimentel (1980) *</li>
									<li>Luis Craff (1981¬1992) *</li>
									<li>Carlos Bendezú (1992 - 1996) *</li>
									<li>Nancy Pimentel (1997) *</li>
									<li>Rene Peñaloza (1998-2000) *</li>
									<li>Israel Wladimir Olaya Pérez (2000-2007)</li>
									<li>Jhon Michael Gómez García (2007-)</li>
									<li>En el año 2009 la Dirección de Coro Universitario cambia de denominación a Dirección de Música.</li>
									<li>Abraham Padilla Benavides</li>
									<li>Enrique Vargas Machuca Acevedo</li>
									<li>Armando Vértiz Cayo (2016-2018)</li>
									<li>Israel Wladimir Olaya Pérez (2018-2022)</li>
									<li>Enrique Vargas Machuca Acevedo (2023-mzo 2024)</li>
								</ul>
							</div>
							{/* <div>
								<figure className="relative h-[400px] w-[644px] rounded-3xl overflow-hidden mx-auto">
									<Image
										src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/historia-banda-universitaria-2.webp"
										className="object-cover h-full"
										alt="ballet 2"
										layout="fill"
										quality={100}
									/>
								</figure>
							</div> */}
							<div>
								<p className="mb-5">
									*Fuente: San Marcos y la música popular: historia del coro universitario 1954-2001/ César Coronel Moscoso/ Universidad Nacional Mayor de San Marcos.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-green text-white py-8 lg:py-[45px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-contactanos.svg')] bg-no-repeat bg-[-123px_10px]">
				<div className="container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
					<div className="flex flex-col lg:flex-row lg:items-center justify-center gap-2 lg:gap-8">
						<h2 className="text-[24px] lg:text-[32px] font-semibold leading-[normal] lg:max-w-[416px]">Explora y aprende en el Centro Cultural San Marcos</h2>
						<p className="max-lg:text-sm font-normal leading-[24px] lg:max-w-[464px]">Descubre un mundo de conocimiento, arte y cultura con nuestras actividades exclusivas ¡Únete y sé parte de nuestra comunidad!</p>
					</div>
					<div className="flex flex-col gap-y-4">
						<SecondaryButton type="internal-link" href="/cursos-y-talleres" theme="dark" label="Cursos y talleres" />
						<SecondaryButton type="internal-link" href="/agenda-cultural" theme="dark" label="Eventos" />
					</div>
				</div>
			</div>
		</>
	</Layout>
  )
}
