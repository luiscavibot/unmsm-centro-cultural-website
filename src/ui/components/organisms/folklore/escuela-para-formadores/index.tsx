import Image from 'next/image'
import React from 'react'

const EscuelaParaFormadores = () => {
	return (
		<>
			<div className="bg-dark-red-2 relative">
				<div
					className="px-6 lg:px-[104px] h-[380px] lg:h-full overflow-hidden relative"
				>
					<div className="container">
						<div className="relative pt-[56px] lg:pt-[96px] pb-[96px] lg:pr-16 lg:w-[705px] mr-auto h-full text-white flex flex-row gap-6 leading-[24px] font-medium">
							<div className="basis-1/2">
								<p className="font-bold mb-3">¡Sé un profesional en la enseñanza de nuestras danzas!</p>
								<p className="mb-5">
									Participa de la Escuela de Capacitación Docente en Folklore por módulos y certifícate como &ldquo;Promotor en Danzas Folklóricas&rdquo;.
								</p>
								<p className="font-bold mb-3">Sobre el programa</p>
								<ul className="list-outside list-disc pl-6 space-y-2">
									<li>El programa está dirigido a toda persona que tiene interés en capacitarse y actualizarse en la promoción (enseñanza) de las danzas folklóricas.</li>
									<li>El plan de estudios se divide en seis módulos, cada uno con la duración de un semestre (cuatro meses), haciendo un total aproximado de 1800 horas pedagógicas.</li>
									<li>Cada módulo desarrolla cursos prácticos (talleres) y teóricos de formación específica (didáctica de la danza, investigación), y cursos complementarios que contribuyen a su formación integral que se visualiza en su práctica aplicada.</li>
								</ul>
							</div>
							<div className="basis-1/2">
								<p className="font-bold mb-3">Sobre la certificación</p>
								<ul className="list-outside list-disc pl-6 space-y-2">
									<li>El programa entrega certificación progresiva por cada uno de los módulos.</li>
									<li>Al aprobar los seis módulos se entrega la certificación como: Promotor en Danzas Folklóricas.</li>
									<li>Para obtener esta certificación, el alumno debe además sustentar un trabajo de investigación o realizar una clase modelo. En ambos casos deberá tener las horas de práctica aplicada en alguna institución educativa.</li>
									<li>Los certificados tienen validez para el escalafón docente reconocido por el ministerio de educación.</li>
								</ul>
								<div className="mt-8 bg-dark-red-3 rounded-2xl p-6">
									<p className="font-bold mb-2">Contacto para consultas:</p>
									<p className="mb-2">
										<span className="font-semibold">Whatsapp:</span>
										<br />
										951 138 146
									</p>
									<p className="break-words">
										<span className="font-semibold">Correo:</span>
										<br />
										folklore.ccsm@unmsm.edu.pe
									</p>
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
							fill
							quality={100}
						/>
					</figure>
				</div>
			</div>
		</>
	)
}

export default EscuelaParaFormadores