import Image from 'next/image';
import React from 'react';
import PrimaryButton from '@/ui/components/atoms/buttons/primary-button';

const ProfundidadDeCampo = () => {
	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container flex flex-row justify-between gap-x-[68px]">
					<div className="max-w-[641px] leading-[24px] text-dark-blue-2">
						<p className="mb-2">
							Este es un programa virtual de entrevistas donde
							destacados cineastas y profesionales del cine
							comparten sus experiencias y perspectivas sobre la
							creación cinematográfica.
						</p>
						<p className="mb-2">
							En cada sesión se exploran en detalle sus
							trayectorias, influencias, técnicas y desafíos.
						</p>
						<p className="mb-5">
							A través de estas entrevistas, se busca conectar a
							los espectadores con la dimensión humana del proceso
							creativo, ofreciendo una mirada profunda a la
							cinematografía desde el punto de vista de sus
							protagonistas
						</p>
						<PrimaryButton
							type="external-link"
							href="https://www.youtube.com/playlist?list=PLlBheX_vkEklaD8NvtWc-x4vkIiogVXUH"
							label="Ver en Youtube"
							theme="light"
						/>
					</div>
					<div className="shrink-0">
						<figure className="relative w-[604px] h-[403px] mx-auto">
							<Image
								src="https://ccsm.unmsm.edu.pe/ccsm/profundidad_de_campo_1d87f72603.jpg"
								className="object-cover h-full"
								alt="ballet 2"
								fill
								quality={100}
							/>
						</figure>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfundidadDeCampo;
