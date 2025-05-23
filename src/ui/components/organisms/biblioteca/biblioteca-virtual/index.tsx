// import SecondaryButton from '@/ui/components/atoms/buttons/secondary-button'
import ExternalLinkIcon from '@/ui/components/atoms/icons/external-link-icon';
import Image from 'next/image';
import React from 'react';

const BibliotecaVirtual = () => {
	return (
		<>
			<div className="bg-black-custom relative">
				<div className="px-6 lg:px-[104px] overflow-hidden relative">
					<figure className="absolute -bottom-[40%] left-[402px] transition-transform duration-[800ms] ease-out">
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-1.svg"
							alt="Museo de Arte de San Marcos"
							width={801}
							height={621}
						/>
					</figure>
					<div className="container">
						<div className="relative pt-[56px] lg:pt-[96px] pb-[56px] lg:pb-[96px] lg:pr-16 lg:w-[644px] mr-auto h-full text-white flex flex-col md:flex-row gap-6 leading-[24px] font-medium">
							<div className="md:max-w-[310px]">
								<p>
									Explora el vasto legado académico y cultural
									de la Universidad Nacional Mayor de San
									Marcos desde cualquier lugar. Nuestra
									biblioteca virtual te brinda acceso a una
									amplia colección de recursos digitales,
								</p>
							</div>
							<div className="space-y-4">
								<p>
									<a
										className="link"
										href="https://unmsm.ent.sirsi.net/client/es_ES/BEA"
										rel="noopener noreferrer"
										target="_blank"
									>
										Catálogo virtual{' '}
										<ExternalLinkIcon className="ml-2 h-4 w-4 inline mb-1" />
									</a>
								</p>
								<div>
									<p className="font-semibold mb-4">
										Publicaciones digitalizadas (BEA -
										CEDOC)
									</p>
									<ul className="list-disc list-outside pl-6 space-y-4">
										<li>
											<a
												className="link"
												href="https://cedoc.sisbib.unmsm.edu.pe/biblioteca-digital/revistas/butaca-sanmarquina?pagina=1"
												rel="noopener noreferrer"
												target="_blank"
											>
												Butaca sanmarquinas{' '}
												<ExternalLinkIcon className="ml-2 h-4 w-4 inline mb-1" />
											</a>
										</li>
										<li>
											<a
												className="link"
												href="https://cedoc.sisbib.unmsm.edu.pe/biblioteca-digital/revistas/cuadernos-de-investigacion-del-archivo-tello?pagina=1"
												rel="noopener noreferrer"
												target="_blank"
											>
												Cuadernos de investigación del
												Archivo Tello{' '}
												<ExternalLinkIcon className="ml-2 h-4 w-4 inline mb-1" />
											</a>
										</li>
										<li>
											<a
												className="link"
												href="https://cedoc.sisbib.unmsm.edu.pe/biblioteca-digital/revistas/folklore?pagina=1"
												rel="noopener noreferrer"
												target="_blank"
											>
												Folklore: Arte, cultura y
												sociedad{' '}
												<ExternalLinkIcon className="ml-2 h-4 w-4 inline mb-1" />
											</a>
										</li>
										<li>
											<a
												className="link"
												href="https://cedoc.sisbib.unmsm.edu.pe/biblioteca-digital/revistas/vicionario?pagina=1"
												rel="noopener noreferrer"
												target="_blank"
											>
												Vicionario: revista de
												literatura y arte{' '}
												<ExternalLinkIcon className="ml-2 h-4 w-4 inline mb-1" />
											</a>
										</li>
									</ul>
								</div>
								<p>
									<a
										className="link"
										href="https://sisbib.unmsm.edu.pe/?page=2"
										rel="noopener noreferrer"
										target="_blank"
									>
										Bases de datos y repositorios UNMSM{' '}
										<ExternalLinkIcon className="ml-2 h-4 w-4 inline mb-1" />
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="shrink-0 absolute right-0 top-0 h-full max-lg:hidden w-[300px] xl:w-[523px]">
					<figure className="relative w-full h-full mx-auto">
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/biblioteca-virtual.webp"
							className="object-cover h-full"
							alt="biblioteca virtual"
							fill
							quality={100}
						/>
					</figure>
				</div>
			</div>
		</>
	);
};

export default BibliotecaVirtual;
