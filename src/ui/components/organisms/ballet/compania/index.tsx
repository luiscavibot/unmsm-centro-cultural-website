import Image from 'next/image'
import React from 'react'

const Compania = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<div className="max-w-[641px] leading-[24px] text-dark-blue-2">
						<p>
							La Compañía de Ballet San Marcos está conformada por bailarines profesionales contratados por la Universidad Nacional Mayor de San Marcos, quienes representan a la institución en escenarios nacionales e internacionales. Es una de las pocas compañías limeñas con un elenco estable de bailarines dedicados exclusivamente a la labor de creación artística.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-dark-red-2 relative">
				<div
					className="px-6 lg:px-[104px] overflow-hidden relative"
				>
					<div className="container">
						<div className="relative pt-[56px] lg:pt-[96px] pb-[56px] md:pb-[96px] lg:pr-16 lg:w-[730px] mr-auto h-full text-white flex flex-col md:flex-row gap-9 leading-[24px] font-normal">
							<div className="md:basis-1/2">
								<p className="mb-5">
									<b>Los integrantes de la compañía entrenan diariamente en danza contemporánea y ballet</b>, complementando su preparación con la exploración de nuevas técnicas y lenguajes escénicos. 
								</p>
								<p className="mb-5">
									Su repertorio está compuesto por creaciones contemporáneas de coreógrafos nacionales e internacionales, quienes han aportado con su visión y estilo a la evolución artística del elenco.
								</p>
								<p>
									La labor de la compañía se centra en la difusión de la danza contemporánea como una forma de expresión y comunicación. A través de sus presentaciones, busca generar experiencias sensibles y reflexivas en el público, acercándolo a diversas formas de experimentación escénica.
								</p>
							</div>
							<div className="md:basis-1/2">
								<p className="font-bold mb-5">Principales actividades</p>
								<ul className="list-outside list-disc pl-6 space-y-5 mb-5">
									<li><b>Funciones didácticas dirigidas a niños y jóvenes</b>, fomentando la apreciación de la danza a través de la participación activa del público.</li>
									<li><b>Presentaciones en teatros y auditorios dentro y fuera del país</b>, fortaleciendo el intercambio con artistas y compañías internacionales.</li>
									<li><b>Residencias y colaboraciones con coreógrafos invitados</b>, lo que permite la incorporación de nuevas propuestas escénicas y el enriquecimiento del repertorio.</li>
								</ul>
								<p className="mb-5">
									Cada función de la Compañía de Ballet San Marcos refleja la dedicación y excelencia que han caracterizado su trayectoria, manteniendo un alto nivel artístico gracias al trabajo constante de sus directores y maestros.
								</p>
								<p>
									Actualmente, la coordinación de la Compañía de Ballet San Marcos está a cargo de Juan Salas Ariza y Raúl Trujillo Silva, bailarines de la propia compañía, quienes contribuyen a la gestión y desarrollo artístico del elenco.
								</p>
							</div>
						</div>

					</div>
				</div>
				<div className="shrink-0 absolute right-0 top-0 h-full max-lg:hidden w-[180px] xl:w-[300px] min-[1439.9px]:w-[544px]">
					<figure className="relative w-full h-full mx-auto">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/ballet_compania_cf5188393b.webp"
							className="object-cover h-full"
							alt="Ballet Compañía"
							fill
							quality={100}
						/>
					</figure>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-white py-8 lg:py-[96px] ">
				<div className="container">
					{/* <div className="grid grid-cols-2 gap-6 auto-rows-[402px] lg:grid-rows-[611px_483px_402px_750px_403px_403px]"> */}
					<div className="grid grid-cols-2 gap-6 auto-rows-[402px] lg:grid-rows-[611px_483px_402px_403px_403px]">
						<div className="col-span-2">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/83d56e4cc5db4e12714c1273c4f52780_c15608a77e.jpg"
									className="object-cover"
									alt="Compañia de Ballet 1"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-span-2 row-start-2">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_compania_grid_2_abacbe5a2d.jpg"
									className="object-cover"
									alt="Compañia de Ballet 2"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="row-start-2">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/09b97c1c8aadd73af9af364296f895e9_55f9ca11c7.jpg"
									className="object-cover"
									alt="Compañia de Ballet 3"
									fill
									quality={100}
								/>
							</figure>
						</div>
						<div className="col-start-2 row-start-3">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/a689b693503f0fef317e93d56a7d508d_d791dd4e5c.jpg"
									className="object-cover"
									alt="Compañia de Ballet 4"
									fill
									quality={100}
								/>
							</figure>
						</div>
						{/* <div className="col-span-2 row-start-4">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/9f05287c6f4bdedf06ca6f8d1b062be5_3529756b21.jpg"
									className="object-cover"
									alt="Compañia de Ballet 5"
									fill
									quality={100}
								/>
							</figure>
						</div> */}
						{/* <div className="row-start-5"> */}
						<div className="row-start-4">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/ballet_compania_grid_7_e28ec3c9e8.jpg"
									className="object-cover"
									alt="Compañia de Ballet 6"
									fill
									quality={100}
								/>
							</figure>
						</div>
						{/* <div className="col-start-1 row-start-6"> */}
						<div className="col-start-1 row-start-5">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/b9ebe23f2cda5b8f290d5cb17a74de65_423af243bb.jpg"
									className="object-cover"
									alt="Compañia de Ballet 7"
									fill
									quality={100}
								/>
							</figure>
						</div>
						{/* <div className="row-span-2 col-start-2 row-start-5"> */}
						<div className="row-span-2 col-start-2 row-start-4">
							<figure className="relative w-full h-full flex-shrink-0 rounded-2xl overflow-hidden">
								<Image
									src="https://ccsm.unmsm.edu.pe/ccsm/00e460e8779f18d85b44c80af8a87e3f_f83a3f635c.jpg"
									className="object-cover"
									alt="Compañia de Ballet 8"
									fill
									quality={100}
								/>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Compania