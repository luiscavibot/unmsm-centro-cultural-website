import React, { useRef } from 'react';

import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import splideOptionsCollections from '@/ui/data/splide-options/splide-options-collections';
import useSplideControls from '@/ui/hooks/useSplideControls';
import CiclosDeCine from '@/ui/components/organisms/cine/actividades/ciclos-de-cine';
import Editatonas from '@/ui/components/organisms/cine/actividades/editatonas';
import Conversatorios from '@/ui/components/organisms/cine/actividades/conversatorios';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const Actividades = () => {
	const splideRefCiclosDeCine = useRef<ExtendedSplideType>(null);
	const splideRefEditatonas = useRef<ExtendedSplideType>(null);
	const splideRefConversatorios = useRef<ExtendedSplideType>(null);

	const {
		handlePrev: handlePrevCiclosDeCine,
		handleNext: handleNextCiclosDeCine,
		// handleMove: handleMoveCiclosDeCine,
		isPrevDisabled: isPrevDisabledCiclosDeCine,
		isNextDisabled: isNextDisabledCiclosDeCine,
	} = useSplideControls(splideRefCiclosDeCine);
	const {
		handlePrev: handlePrevEditatonas,
		handleNext: handleNextEditatonas,
		// handleMove: handleMoveEditatonas,
		isPrevDisabled: isPrevDisabledEditatonas,
		isNextDisabled: isNextDisabledEditatonas,
	} = useSplideControls(splideRefEditatonas);
	const {
		handlePrev: handlePrevConversatorios,
		handleNext: handleNextConversatorios,
		// handleMove: handleMoveConversatorios,
		isPrevDisabled: isPrevDisabledConversatorios,
		isNextDisabled: isNextDisabledConversatorios,
	} = useSplideControls(splideRefConversatorios);

	return (
		<>
			<CiclosDeCine
				// handleMoveCiclosDeCine={handleMoveCiclosDeCine}
				splideRefCiclosDeCine={splideRefCiclosDeCine}
				splideOptions={splideOptionsCollections}
				isPrevDisabledCiclosDeCine={isPrevDisabledCiclosDeCine}
				isNextDisabledCiclosDeCine={isNextDisabledCiclosDeCine}
				handlePrevCiclosDeCine={handlePrevCiclosDeCine}
				handleNextCiclosDeCine={handleNextCiclosDeCine}
			/>
			<Editatonas
				// handleMoveEditatonas={handleMoveEditatonas}
				splideRefEditatonas={splideRefEditatonas}
				splideOptions={splideOptionsCollections}
				isPrevDisabledEditatonas={isPrevDisabledEditatonas}
				isNextDisabledEditatonas={isNextDisabledEditatonas}
				handlePrevEditatonas={handlePrevEditatonas}
				handleNextEditatonas={handleNextEditatonas}
			/>
			<Conversatorios
				// handleMoveConversatorios={handleMoveConversatorios}
				splideRefConversatorios={splideRefConversatorios}
				splideOptions={splideOptionsCollections}
				isPrevDisabledConversatorios={isPrevDisabledConversatorios}
				isNextDisabledConversatorios={isNextDisabledConversatorios}
				handlePrevConversatorios={handlePrevConversatorios}
				handleNextConversatorios={handleNextConversatorios}
			/>
		</>
	);
};

export default Actividades;
