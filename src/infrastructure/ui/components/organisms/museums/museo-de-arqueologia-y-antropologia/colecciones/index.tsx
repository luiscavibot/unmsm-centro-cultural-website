import React, { useRef } from 'react';

import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import useSplideControls from '@/infrastructure/ui/hooks/useSplideControls';
import ArchivoJulioCTello from '@/infrastructure/ui/components/organisms/museums/museo-de-arqueologia-y-antropologia/colecciones/archivo-julio-c-tello';
import TeofiloCastillo from '@/infrastructure/ui/components/organisms/museums/museo-de-arqueologia-y-antropologia/colecciones/teofilo-castillo';
import JimenezBorja from '@/infrastructure/ui/components/organisms/museums/museo-de-arqueologia-y-antropologia/colecciones/jimenez-borja';
import ExpedicionSierraCentral from '@/infrastructure/ui/components/organisms/museums/museo-de-arqueologia-y-antropologia/colecciones/expedicion-sierra-central';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const Colecciones = () => {
	const splideRefColArchivoJulio = useRef<ExtendedSplideType>(null);
	const splideRefColTeofiloCastillo = useRef<ExtendedSplideType>(null);
	const splideRefColJimenezBorja = useRef<ExtendedSplideType>(null);
	const splideRefColExpedicionSierraCentral = useRef<ExtendedSplideType>(null);

	const splideOptions = {
		type: 'slide',
		width: '100%',
		fixedWidth: '390px',
		arrows: false,
		pagination: false,
		gap: '24px',
		perMove: 1,
		breakpoints: {
			1024: {
				fixedWidth: '100%',
				perMove: 1,
			},
		},
	};

	const {
		handlePrev: handlePrevColArchivoJulio,
		handleNext: handleNextColArchivoJulio,
		handleMove: handleMoveColArchivoJulio,
		isPrevDisabled: isPrevDisabledColArchivoJulio,
		isNextDisabled: isNextDisabledColArchivoJulio,
	} = useSplideControls(splideRefColArchivoJulio);

	const {
		handlePrev: handlePrevColTeofiloCastillo,
		handleNext: handleNextColTeofiloCastillo,
		handleMove: handleMoveColTeofiloCastillo,
		isPrevDisabled: isPrevDisabledColTeofiloCastillo,
		isNextDisabled: isNextDisabledColTeofiloCastillo,
	} = useSplideControls(splideRefColTeofiloCastillo);

	const {
		handlePrev: handlePrevColJimenezBorja,
		handleNext: handleNextColJimenezBorja,
		handleMove: handleMoveColJimenezBorja,
		isPrevDisabled: isPrevDisabledColJimenezBorja,
		isNextDisabled: isNextDisabledColJimenezBorja,
	} = useSplideControls(splideRefColJimenezBorja);

	const {
		handlePrev: handlePrevColExpedicionSierraCentral,
		handleNext: handleNextColExpedicionSierraCentral,
		handleMove: handleMoveColExpedicionSierraCentral,
		isPrevDisabled: isPrevDisabledColExpedicionSierraCentral,
		isNextDisabled: isNextDisabledColExpedicionSierraCentral,
	} = useSplideControls(splideRefColExpedicionSierraCentral);

	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2">
						Nuestras colecciones te invitan a recorrer el tiempo y
						el espacio, descubriendo historias fascinantes que nos
						conectan con el pasado, el presente y el futuro. Cada
						sala de nuestro museo guarda tesoros únicos, desde obras
						maestras de grandes artistas.
					</p>
				</div>
			</div>
			<ArchivoJulioCTello
				handleMoveColArchivoJulio={handleMoveColArchivoJulio}
				splideRefColArchivoJulio={splideRefColArchivoJulio}
				splideOptions={splideOptions}
				isPrevDisabledColArchivoJulio={isPrevDisabledColArchivoJulio}
				isNextDisabledColArchivoJulio={isNextDisabledColArchivoJulio}
				handlePrevColArchivoJulio={handlePrevColArchivoJulio}
				handleNextColArchivoJulio={handleNextColArchivoJulio}
			/>
			<TeofiloCastillo
				handleMoveColTeofiloCastillo={handleMoveColTeofiloCastillo}
				splideRefColTeofiloCastillo={splideRefColTeofiloCastillo}
				splideOptions={splideOptions}
				isPrevDisabledColTeofiloCastillo={isPrevDisabledColTeofiloCastillo}
				isNextDisabledColTeofiloCastillo={isNextDisabledColTeofiloCastillo}
				handlePrevColTeofiloCastillo={handlePrevColTeofiloCastillo}
				handleNextColTeofiloCastillo={handleNextColTeofiloCastillo}
			/>
			<JimenezBorja
				handleMoveColJimenezBorja={handleMoveColJimenezBorja}
				splideRefColJimenezBorja={splideRefColJimenezBorja}
				splideOptions={splideOptions}
				isPrevDisabledColJimenezBorja={isPrevDisabledColJimenezBorja}
				isNextDisabledColJimenezBorja={isNextDisabledColJimenezBorja}
				handlePrevColJimenezBorja={handlePrevColJimenezBorja}
				handleNextColJimenezBorja={handleNextColJimenezBorja}
			/>
			<ExpedicionSierraCentral
				handleMoveColExpedicionSierraCentral={handleMoveColExpedicionSierraCentral}
				splideRefColExpedicionSierraCentral={splideRefColExpedicionSierraCentral}
				splideOptions={splideOptions}
				isPrevDisabledColExpedicionSierraCentral={isPrevDisabledColExpedicionSierraCentral}
				isNextDisabledColExpedicionSierraCentral={isNextDisabledColExpedicionSierraCentral}
				handlePrevColExpedicionSierraCentral={handlePrevColExpedicionSierraCentral}
				handleNextColExpedicionSierraCentral={handleNextColExpedicionSierraCentral}
			/>
		</>
	);
};

export default Colecciones;
