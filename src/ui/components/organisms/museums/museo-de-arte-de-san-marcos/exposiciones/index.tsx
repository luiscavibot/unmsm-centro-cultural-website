import React, { useRef } from 'react';

import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import splideOptionsCollections from '@/ui/data/splide-options/splide-options-collections';
import useSplideControls from '@/ui/hooks/useSplideControls';
import ArteModerno from '@/ui/components/organisms/museums/museo-de-arte-de-san-marcos/exposiciones/arte-moderno';
import LaUniversidad from '@/ui/components/organisms/museums/museo-de-arte-de-san-marcos/exposiciones/la-universidad';
import BuenVivir from '@/ui/components/organisms/museums/museo-de-arte-de-san-marcos/exposiciones/buen-vivir';
import ExposicionesTemporales from '@/ui/components/organisms/museums/museo-de-arte-de-san-marcos/exposiciones/exposiciones-temporales';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const Exposiciones = () => {
	const splideRefExpoArte = useRef<ExtendedSplideType>(null);
	const splideRefExpoUniversidad = useRef<ExtendedSplideType>(null);
	const splideRefExpoBuenVivir = useRef<ExtendedSplideType>(null);
	const splideRefExpoTemporales = useRef<ExtendedSplideType>(null);

	const {
		handlePrev: handlePrevExpoArte,
		handleNext: handleNextExpoArte,
		handleMove: handleMoveExpoArte,
		isPrevDisabled: isPrevDisabledExpoArte,
		isNextDisabled: isNextDisabledExpoArte,
	} = useSplideControls(splideRefExpoArte);
	const {
		handlePrev: handlePrevExpoUniversidad,
		handleNext: handleNextExpoUniversidad,
		handleMove: handleMoveExpoUniversidad,
		isPrevDisabled: isPrevDisabledExpoUniversidad,
		isNextDisabled: isNextDisabledExpoUniversidad,
	} = useSplideControls(splideRefExpoUniversidad);
	const {
		handlePrev: handlePrevExpoBuenVivir,
		handleNext: handleNextExpoBuenVivir,
		handleMove: handleMoveExpoBuenVivir,
		isPrevDisabled: isPrevDisabledExpoBuenVivir,
		isNextDisabled: isNextDisabledExpoBuenVivir,
	} = useSplideControls(splideRefExpoBuenVivir);
	const {
		handlePrev: handlePrevExpoTemporales,
		handleNext: handleNextExpoTemporales,
		handleMove: handleMoveExpoTemporales,
		isPrevDisabled: isPrevDisabledExpoTemporales,
		isNextDisabled: isNextDisabledExpoTemporales,
	} = useSplideControls(splideRefExpoTemporales);

	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2">
						Los invitamos a explorar y valorar el arte peruano de
						diversas regiones, tendencias y periodos, celebrando la
						pluralidad de saberes, memorias e historias de vida
						presentes en cada una de las obras que integran la
						significativa colección del Museo de Arte de San Marcos.
					</p>
				</div>
			</div>
			<ArteModerno
				handleMoveExpoArte={handleMoveExpoArte}
				splideRefExpoArte={splideRefExpoArte}
				splideOptions={splideOptionsCollections}
				isPrevDisabledExpoArte={isPrevDisabledExpoArte}
				isNextDisabledExpoArte={isNextDisabledExpoArte}
				handlePrevExpoArte={handlePrevExpoArte}
				handleNextExpoArte={handleNextExpoArte}
			/>
			<LaUniversidad
				handleMoveExpoUniversidad={handleMoveExpoUniversidad}
				splideRefExpoUniversidad={splideRefExpoUniversidad}
				splideOptions={splideOptionsCollections}
				isPrevDisabledExpoUniversidad={isPrevDisabledExpoUniversidad}
				isNextDisabledExpoUniversidad={isNextDisabledExpoUniversidad}
				handlePrevExpoUniversidad={handlePrevExpoUniversidad}
				handleNextExpoUniversidad={handleNextExpoUniversidad}
			/>
			<BuenVivir
				handleMoveExpoBuenVivir={handleMoveExpoBuenVivir}
				splideRefExpoBuenVivir={splideRefExpoBuenVivir}
				splideOptions={splideOptionsCollections}
				isPrevDisabledExpoBuenVivir={isPrevDisabledExpoBuenVivir}
				isNextDisabledExpoBuenVivir={isNextDisabledExpoBuenVivir}
				handlePrevExpoBuenVivir={handlePrevExpoBuenVivir}
				handleNextExpoBuenVivir={handleNextExpoBuenVivir}
			/>
			<ExposicionesTemporales
				handleMoveExpoTemporales={handleMoveExpoTemporales}
				splideRefExpoTemporales={splideRefExpoTemporales}
				splideOptions={splideOptionsCollections}
				isPrevDisabledExpoTemporales={isPrevDisabledExpoTemporales}
				isNextDisabledExpoTemporales={isNextDisabledExpoTemporales}
				handlePrevExpoTemporales={handlePrevExpoTemporales}
				handleNextExpoTemporales={handleNextExpoTemporales}
			/>
		</>
	);
};

export default Exposiciones;
