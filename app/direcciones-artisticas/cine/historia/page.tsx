import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
import Title from '@/infrastructure/ui/components/atoms/title';
import Layout from '@/infrastructure/ui/components/organisms/shared/layout';
import Image from 'next/image';
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
		title: 'Dirección de Cine y Producción audiovisual',
		path: '/direcciones-artisticas/cine',
	},
	{
		title: 'Historia de la dirección de Cine y Producción audiovisual',
		path: '/direcciones-artisticas/cine/historia',
	},
];

export default function CineHistoria() {
	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/ballet_ccsm_portada_0f01f64ed1.webp"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white">
					<div className="container">
						<div className="max-w-[814px] mx-auto pb-14">
							<Title className="text-center max-w-[560px] mx-auto">
								Historia de la Dirección de Cine y Producción audiovisual
							</Title>
							<div className="leading-[24px] text-dark-blue-2 mb-4 space-y-10">
								<div>
									<p className="mb-5">
										La Dirección de Cine Arte de San Marcos fue creada por Resolución Rectoral N° 01948 del 20 de abril de 1998, en la cual se incorpora el antiguo Cine-Arte de la Facultad de Letras al ámbito del flamante Centro Cultural de la Universidad.
									</p>
									<p className="mb-5">
										El Cine Arte de San Marcos nace teniendo como principal objetivo difundir el pensamiento y la obra de los más destacados creadores cinematográficos del Perú y el mundo, poniendo énfasis en nuestra propia producción audiovisual, fomentando la promoción de sus realizadores y el debate de su problemática.
									</p>
									<p className="mb-5">
										Tomando como antecedente directo al Cine-Arte de la Facultad de Letras, somos una continuación del antiguo Cine-Arte de San Marcos, iniciativa cultural de un grupo de estudiantes de la universidad, de la década del sesenta: Nelson García, del antiguo Instituto de Artes; Carmen Hertz, de la Facultad de Letras; y Fernando Ruiz y Atilio Bonilla, de la Facultad de Educación.
									</p>
									<p className="mb-5">
										La primera proyección de este Cine Arte se realiza el año 1967 en la histórica Casona del Parque Universitario, actualmente sede del Centro Cultural de San Marcos. Al poco tiempo, se traslada a la Facultad de Medicina de San Fernando. Ahí surge la confusión que hace aparecer en algunos libros como alumnos de medicina a los fundadores del Cine-Arte.
									</p>
									<p className="mb-5">
										A mediados de 1968, Atilio Bonilla dirige la institución hasta la década de los noventa. Durante esos años se vive un gran auge del cineclubismo y se llegan a realizar proyecciones en el cine Colmena; el Ministerio de Trabajo y Promoción Social; el Centro Cultural Peruano Ruso y la Facultad de Letras de la UNMSM, donde comienza su identificación con nuestra universidad. Se continúa con las proyecciones hasta el segundo semestre de 1996, fecha en que suspende sus actividades durante dos años, por problemas logísticos.
									</p>
									<p className="mb-5">
										En abril de 1998, el Cine Arte de San Marcos se incorpora al recién creado Centro Cultural de la UNMSM. Bajo la dirección de Fernando Samillán, se crea la revista de cultura cinematográfica BUTACA, llegando a editarse diez números. Se reinician las proyecciones en cine y video, y se realizan conferencias, exposiciones, seminarios hasta el final de su gestión, en el año 2001.
									</p>
								</div>
								<div>
									<figure className="relative h-[400px] w-[644px] rounded-3xl overflow-hidden mx-auto">
										<Image
											src="https://ccsm.unmsm.edu.pe/ccsm/cine_historia_1_c0f03df03a.jpg"
											className="object-cover h-full"
											alt="Historia Cine 1"
											layout="fill"
											quality={100}
										/>
									</figure>
								</div>
								<div>
									<p className="mb-5">
										En 2002, asume la dirección René Weber, quien continuó con las actividades de Cine Arte: cursos y talleres, proyecciones y la publicación de la revista BUTACA, que llegó a su edición número veintiocho en mayo de 2006. Ese mismo año, Mario Pozzi-Scott, asume la dirección, ampliando la propuesta anterior con el dictado de talleres de cine desarrollados por destacados especialistas del medio.
									</p>
									<p className="mb-5">
										Ya como Dirección de Cine y Producción Audiovisual, se firma el 2009 bajo la dirección de  , un convenio de cooperación con la corporación española Livemedia, con el proyecto on line: Culturas en Red, creándose el canal de culturas web: Desde la Casona.
									</p>
								</div>
								<div>
									<figure className="relative h-[400px] w-[644px] rounded-3xl overflow-hidden mx-auto">
										<Image
											src="https://ccsm.unmsm.edu.pe/ccsm/cine_historia_2_f82f79f24b.jpg"
											className="object-cover h-full"
											alt="Historia Cine 2"
											layout="fill"
											quality={100}
										/>
									</figure>
								</div>
								<div>
									<p className="mb-5">
										Desde setiembre del 2017 bajo la dirección de Andrés José García García, el departamento de Cine y Producción Audiovisual de la UNMSM, ubicado en el Centro Cultural de la universidad, continúa con sus transmisiones de manera ininterrumpida, produciendo diversos contenidos culturales, ampliando la propuesta de sus antecesores, de 11 a.m. a 4 p.m. vía streaming por el Canal Web de Culturas Desde la Casona, y de 4 p.m. a 9 p.m. porel facebook dirección de cine y producción audiovisual - UNMSM.
									</p>
									<p className="mb-5">
										Desde 2023, bajo la dirección de Estefanía De Cara, la Dirección de Cine ha iniciado una etapa clave de renovación y expansión, con proyectos centrados en la conservación del patrimonio fílmico y la creación de espacios de formación y difusión del cine. Entre los logros más destacados de esta etapa se encuentran:
									</p>
									<p className="mb-5 font-bold">
										Reactivación de la sala de cine y programación semanal:
									</p>
									<p className="mb-5">
										Uno de los hitos más importantes ha sido la reactivación de la sala de cine dentro del Centro Cultural de San Marcos, que había estado inactiva por varios años. Desde su reapertura, la sala proyecta películas todos los jueves, brindando un espacio regular para la exhibición de cine peruano así como obras internacionales que fomentan el diálogo intercultural. Esta reactivación ha sido fundamental para revitalizar la oferta cinematográfica en el centro cultural y formar nuevos públicos.
									</p>
									<p className="mb-5 font-bold">
										Alianza con Wiki Acción Perú para la difusión del cine peruano en Wikipedia:
									</p>
									<p className="mb-5">
										Este proyecto colaborativo está dedicado a mejorar el acceso al conocimiento sobre cine peruano en plataformas digitales. Gracias a esta alianza, se han organizado múltiples encuentros de edición en Wikipedia que han generado nuevas entradas y mejorado artículos sobre cineastas peruanos, películas y la historia del cine en Perú. Esta colaboración ha contribuido a visibilizar el cine peruano en una plataforma global y ha fortalecido la memoria audiovisual del país a través de la participación activa de la comunidad.
									</p>
									<p className="mb-5 font-bold">
										Impulso a la preservación fílmica y conservación preventiva:
									</p>
									<p className="mb-5">
										Gracias al financiamiento obtenido por el vicerrectorado académico UNMSM y en conjunto con el grupo de investigación &apos;Incomun&apos;, se emprendió el proyecto de “Diagnóstico y conservación preventiva del patrimonio fílmico que resguarda la Dirección de Cine”. Este esfuerzo es un avance crucial para garantizar la preservación de materiales audiovisuales que forman parte del legado cinematográfico del país.
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
								Explora y aprende en el Centro Cultural San
								Marcos
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
