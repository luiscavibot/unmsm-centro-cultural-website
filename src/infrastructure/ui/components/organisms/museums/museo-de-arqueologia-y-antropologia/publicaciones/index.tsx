import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button';
import ExternalLinkIcon from '@/infrastructure/ui/components/atoms/icons/external-link-icon';
import React from 'react';

const Publicaciones = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2">
						Explora el vasto legado cultural del Perú a través de
						las Publicaciones del Museo de Arqueología y
						Antropología. Esta sección presenta una colección de
						investigaciones, catálogos y estudios especializados que
						profundizan en la riqueza arqueológica, histórica y
						antropológica de nuestro país.
					</p>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-dark-red-2 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-2.svg')] bg-no-repeat bg-[-123px_10px]">
				<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
					<div className="">
						<span className="text-sm font-semibold mb-1 inline-block">
							Cuadernos
						</span>
						<h3 className="text-[32px] leading-[normal] font-semibold">
							Archivo Tello
						</h3>
						<div className="font-medium leading-[24px] mt-6 space-y-6 lg:flex flex-row gap-x-6">
							<div className="flex-1">
								<p className="mb-6">
									El Museo de Arqueología y Antropología (MAA)
									de la Universidad Nacional de San Marcos
									tiene en custodia el archivo personal del
									notable arqueólogo peruano, Dr. Julio César
									Tello Rojas, también fundador de este Museo.
								</p>
								<p>
									El Archivo Tello fue entregado a la
									Universidad Nacional Mayor de San Marcos,
									tal como consta en el testamento del sabio
									tras su deceso el 3 de junio de 1947. El
									principal objetivo de este archivo es la
									difusión de su contenido a la comunidad
									académica y público en general. Los
									materiales documentarios reunidos en el
									Archivo Tello son producto de las numerosas
									expediciones científicas que el Dr. Tello y
									su notable equipo de asistentes llevaron a
									cabo en diversas regiones del país entre
									1915 y 1945. Así, encontramos cuadernos de
									campo, un vasto archivo fotográfico,
									dibujos, acuarelas, planos y mapas de
									lugares como Paracas, Chavín, Casma,
									Pachacamac, valle de Lima, Marañón, Nepeña,
									Nasca, etc.
								</p>
							</div>
							<div className="flex-1">
								<p className="mb-6">
									Asimismo, el Archivo incluye textos
									inéditos, estudio de crónicas, traducciones
									y clisés.
								</p>
								<p className="mb-6">
									A fines de 1997, el MAA llevó a cabo una
									verificación total de los documentos del
									Archivo Tello, contando con la presencia de
									un representante de la familia del Dr.
									Tello, trabajo que concluyó a mediados de
									1998. Desde entonces, el MAA ha asumido las
									labores de organización y difusión de los
									documentos del archivo. Como resultado de
									ello, y desde octubre de 1999, se publica la
									serie Cuadernos de Investigación del Archivo
									Tello, contando con los siguientes números:
								</p>
								<div className="flex flex-row gap-x-4">
									<SecondaryButton
										type="external-link"
										href="https://cedoc.sisbib.unmsm.edu.pe/biblioteca_digital/revistas/cuadernos-de-investigacion-del-archivo-tello?pagina=1"
										theme="dark"
										label="Cuadernos N° 1 - 15"
										icon={<ExternalLinkIcon className="w-4 h-4 mb-[1px]" />}
									/>
									<SecondaryButton
										type="external-link"
										href="https://fondoeditorial.unmsm.edu.pe/catalogo"
										theme="dark"
										label="Cuadernos N° 16 -17"
										icon={<ExternalLinkIcon className="w-4 h-4 mb-[1px]" />}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 py-20">
				<div className="container">
					<div className="flex gap-6 mb-6">
						<a
							href="https://revistasinvestigacion.unmsm.edu.pe/index.php/Arqueo/issue/archive "
							rel="noopener noreferrer"
							target="_blank"
							className="basis-1/3 bg-blue-2 text-white rounded-lg min-h-[240px] px-12 py-14 flex justify-between gap-2"
						>
							<div>
								<span className="block mb-1 font-semibold leading-[24px]">
									Revista
								</span>
								<span className="block text-[32px] leading-[normal] font-bold">
									Arqueología y Sociedad
								</span>
							</div>
							<div className="shrink-0 flex items-center">
								<ExternalLinkIcon />
							</div>
						</a>
						<a
							href="https://sisbib.unmsm.edu.pe/bibvirtual/publicaciones/antropologia/default.htm"
							rel="noopener noreferrer"
							target="_blank"
							className="basis-1/3 bg-blue-2 text-white rounded-lg min-h-[240px] px-12 py-14 flex justify-between gap-2"
						>
							<div>
								<span className="block mb-1 font-semibold leading-[24px]">
									Boletín
								</span>
								<span className="block text-[32px] leading-[normal] font-bold">
									MAA (1998-2005)
								</span>
							</div>
							<div className="shrink-0 flex items-center">
								<ExternalLinkIcon />
							</div>
						</a>
						<a
							href="https://drive.google.com/drive/folders/1o9YzwwFsFpYGD6XhuB_YswE6vA7dWq03"
							rel="noopener noreferrer"
							target="_blank"
							className="basis-1/3 bg-blue-2 text-white rounded-lg min-h-[240px] px-12 py-14 flex justify-between gap-2"
						>
							<div>
								<span className="block mb-1 font-semibold leading-[24px]">
									Boletín
								</span>
								<span className="block text-[32px] leading-[normal] font-bold">
									MAA (2021-2022)
								</span>
							</div>
							<div className="shrink-0 flex items-center">
								<ExternalLinkIcon />
							</div>
						</a>
					</div>
					<div className="flex gap-6">
						<a
							href="https://drive.google.com/file/d/1CnHSJ-5Hzo5MUN3FTZMdpj3expw_TKNx/view?usp=drivesdk"
							rel="noopener noreferrer"
							target="_blank"
							className="basis-1/2 bg-blue-2 text-white rounded-lg min-h-[240px] px-12 py-14 flex justify-between gap-2"
						>
							<div>
								<span className="block mb-1 font-semibold leading-[24px]">
									Catálogo de exposiciones
								</span>
								<span className="block text-[32px] leading-[normal] font-bold">
									Rebeca Carrión Cachot. La primera arqueóloga
									peruana (2022)
								</span>
							</div>
							<div className="shrink-0 flex items-center">
								<ExternalLinkIcon />
							</div>
						</a>
						<a
							href="https://drive.google.com/file/d/1YRqJKQq0RQlSGUaxsC9ahuoPgJ2825ja/view?usp=drivesdk"
							rel="noopener noreferrer"
							target="_blank"
							className="basis-1/2 bg-blue-2 text-white rounded-lg min-h-[240px] px-12 py-14 flex justify-between gap-2"
						>
							<div>
								<span className="block mb-1 font-semibold leading-[24px]">
									Catálogo de exposiciones
								</span>
								<span className="block text-[32px] leading-[normal] font-bold">
									Toribio Mejía Xesspe. Brillante explorador
									del Pasado andino (2023)
								</span>
							</div>
							<div className="shrink-0 flex items-center">
								<ExternalLinkIcon />
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Publicaciones;
