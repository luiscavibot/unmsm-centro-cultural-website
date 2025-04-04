import React, { useRef } from 'react';

import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import splideOptionsCollections from '@/ui/data/splide-options/splide-options-collections';
import useSplideControls from '@/ui/hooks/useSplideControls';
import ArchivoJulioCTello from '@/ui/components/organisms/museums/museo-de-arqueologia-y-antropologia/colecciones/archivo-julio-c-tello';
import TeofiloCastillo from '@/ui/components/organisms/museums/museo-de-arqueologia-y-antropologia/colecciones/teofilo-castillo';
import JimenezBorja from '@/ui/components/organisms/museums/museo-de-arqueologia-y-antropologia/colecciones/jimenez-borja';
import ExpedicionSierraCentral from '@/ui/components/organisms/museums/museo-de-arqueologia-y-antropologia/colecciones/expedicion-sierra-central';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const Colecciones = () => {
	const splideRefColArchivoJulio = useRef<ExtendedSplideType>(null);
	const splideRefColTeofiloCastillo = useRef<ExtendedSplideType>(null);
	const splideRefColJimenezBorja = useRef<ExtendedSplideType>(null);
	const splideRefColExpedicionSierraCentral =
		useRef<ExtendedSplideType>(null);

	const {
		handlePrev: handlePrevColArchivoJulio,
		handleNext: handleNextColArchivoJulio,
		// handleMove: handleMoveColArchivoJulio,
		isPrevDisabled: isPrevDisabledColArchivoJulio,
		isNextDisabled: isNextDisabledColArchivoJulio,
	} = useSplideControls(splideRefColArchivoJulio);

	const {
		handlePrev: handlePrevColTeofiloCastillo,
		handleNext: handleNextColTeofiloCastillo,
		// handleMove: handleMoveColTeofiloCastillo,
		isPrevDisabled: isPrevDisabledColTeofiloCastillo,
		isNextDisabled: isNextDisabledColTeofiloCastillo,
	} = useSplideControls(splideRefColTeofiloCastillo);

	const {
		handlePrev: handlePrevColJimenezBorja,
		handleNext: handleNextColJimenezBorja,
		// handleMove: handleMoveColJimenezBorja,
		isPrevDisabled: isPrevDisabledColJimenezBorja,
		isNextDisabled: isNextDisabledColJimenezBorja,
	} = useSplideControls(splideRefColJimenezBorja);

	const {
		handlePrev: handlePrevColExpedicionSierraCentral,
		handleNext: handleNextColExpedicionSierraCentral,
		// handleMove: handleMoveColExpedicionSierraCentral,
		isPrevDisabled: isPrevDisabledColExpedicionSierraCentral,
		isNextDisabled: isNextDisabledColExpedicionSierraCentral,
	} = useSplideControls(splideRefColExpedicionSierraCentral);

	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2">
						A través de la selección de algunas imágenes, brindamos
						una primera vista a alguna de las colecciones que
						alberga el museo. Estas recopilaciones buscan promover
						la difusión del patrimonio cultural peruano, a través
						del acceso a objetos que resguardan el legado y la
						memoria colectiva de sociedades prehispánicas.
					</p>
				</div>
			</div>
			<ArchivoJulioCTello
				// handleMoveColArchivoJulio={handleMoveColArchivoJulio}
				splideRefColArchivoJulio={splideRefColArchivoJulio}
				splideOptions={splideOptionsCollections}
				isPrevDisabledColArchivoJulio={isPrevDisabledColArchivoJulio}
				isNextDisabledColArchivoJulio={isNextDisabledColArchivoJulio}
				handlePrevColArchivoJulio={handlePrevColArchivoJulio}
				handleNextColArchivoJulio={handleNextColArchivoJulio}
			/>
			<TeofiloCastillo
				// handleMoveColTeofiloCastillo={handleMoveColTeofiloCastillo}
				splideRefColTeofiloCastillo={splideRefColTeofiloCastillo}
				splideOptions={splideOptionsCollections}
				isPrevDisabledColTeofiloCastillo={
					isPrevDisabledColTeofiloCastillo
				}
				isNextDisabledColTeofiloCastillo={
					isNextDisabledColTeofiloCastillo
				}
				handlePrevColTeofiloCastillo={handlePrevColTeofiloCastillo}
				handleNextColTeofiloCastillo={handleNextColTeofiloCastillo}
			/>
			<JimenezBorja
				// handleMoveColJimenezBorja={handleMoveColJimenezBorja}
				splideRefColJimenezBorja={splideRefColJimenezBorja}
				splideOptions={splideOptionsCollections}
				isPrevDisabledColJimenezBorja={isPrevDisabledColJimenezBorja}
				isNextDisabledColJimenezBorja={isNextDisabledColJimenezBorja}
				handlePrevColJimenezBorja={handlePrevColJimenezBorja}
				handleNextColJimenezBorja={handleNextColJimenezBorja}
			/>
			<ExpedicionSierraCentral
				// handleMoveColExpedicionSierraCentral={
				// 	handleMoveColExpedicionSierraCentral
				// }
				splideRefColExpedicionSierraCentral={
					splideRefColExpedicionSierraCentral
				}
				splideOptions={splideOptionsCollections}
				isPrevDisabledColExpedicionSierraCentral={
					isPrevDisabledColExpedicionSierraCentral
				}
				isNextDisabledColExpedicionSierraCentral={
					isNextDisabledColExpedicionSierraCentral
				}
				handlePrevColExpedicionSierraCentral={
					handlePrevColExpedicionSierraCentral
				}
				handleNextColExpedicionSierraCentral={
					handleNextColExpedicionSierraCentral
				}
			/>
		</>
	);
};

export default Colecciones;
