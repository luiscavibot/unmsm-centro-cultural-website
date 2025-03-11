import Image from 'next/image'
import React from 'react'

const Investigacion = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<div className="max-w-[641px] leading-[24px] text-dark-blue-2">
						<p >
							Descubre cómo nuestra compañía investiga las raíces de la danza peruana y crea nuevas propuestas artísticas
						</p>
					</div>
				</div>
			</div>
			<div className="bg-dark-red-2 relative">
				<div
					className="px-6 lg:px-[104px] h-[380px] lg:h-full overflow-hidden relative"
				>
					<div className="container">
						<div className="relative pt-[56px] lg:pt-[96px] pb-[96px] lg:pr-16 lg:w-[705px] mr-auto h-full text-white flex flex-row gap-6 leading-[24px] font-medium">
							<div className="basis-1/2">
								<p className="mb-5">
									<b>Los bailarines de la compañía profesional entrenan diariamente en el ballet clásico y danza contemporánea.</b> Su rutina continúa con la práctica diaria del repertorio que la agrupación tiene en su haber, nutrido, además, de nuevas creaciones planteadas por coreógrafos de la propia compañía y por colegas nacionales e internacionales invitados.
								</p>
								<p>
									<b>El trabajo de la compañía se basa en difundir el arte escénico a través de la danza contemporánea</b>, dando a conocer la expresividad y la trascendencia de esta forma dancística, sus posibilidades comunicativas y expresivas y, de ese modo, sensibilizar al público llevándolo a disfrutar de nuevas sensaciones y experimentaciones.
								</p>
								<ul className="list-outside list-disc pl-6">
									<li>El programa está dirigido a toda persona que tiene interés en capacitarse y actualizarse en la promoción (enseñanza) de las danzas folklóricas.</li>
									<li>El plan de estudios se divide en seis módulos, cada uno con la duración de un semestre (cuatro meses) , haciendo un total aproximado de 1800 horas pedagógicas.</li>
									<li>Cada módulo desarrolla cursos prácticos (talleres) y teóricos de formación específica y complementaria, además de la práctica aplicada.</li>
									<li>El programa no conduce a la obtención de un título.</li>
								</ul>
							</div>
							<div className="basis-1/2">
								<p className="font-bold">Sobre la certificación</p>
								<ul className="list-outside list-disc pl-6">
									<li>El programa entrega certificados por cada uno de los módulos.</li>
									<li>Al aprobar los seis módulos se entrega la certificación como: Promotor en Danzas Folklóricas.</li>
									<li>Para obtener esta certificación, el alumno debe además sustentar un trabajo de investigación o realizar una clase modelo. En ambos casos deberá tener las horas de práctica aplicada en alguna institución educativa.</li>
									<li>Los certificados tienen validez para el escalafón.</li>
								</ul>
								<div className="mt-8 bg-dark-red-3 rounded-2xl p-6">
									<p className="font-bold">Contacto para consultas:</p>
									<p className="break-words">folklore.ccsm@unmsm.edu.pe</p>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div className="shrink-0 w-[523px] absolute right-0 top-0 h-full">
					<figure className="relative w-full h-full mx-auto">
						<Image
							src="https://ccsm.unmsm.edu.pe/ccsm/escuela_para_formadores_d87bdc40bb.webp"
							className="object-cover h-full"
							alt="Escuela para formadores"
							layout="fill"
							quality={100}
						/>
					</figure>
				</div>
			</div>
		</>
	)
}

export default Investigacion