import React, { useRef } from 'react'

import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import useSplideControls from '@/infrastructure/ui/hooks/useSplideControls';
// import ArteModerno from '@/infrastructure/ui/components/organisms/museums/museo-de-arte-de-san-marcos/exposiciones/arte-moderno';
// import LaUniversidad from '@/infrastructure/ui/components/organisms/museums/museo-de-arte-de-san-marcos/exposiciones/la-universidad';
// import BuenVivir from '@/infrastructure/ui/components/organisms/museums/museo-de-arte-de-san-marcos/exposiciones/buen-vivir';
// import ExposicionesTemporales from '@/infrastructure/ui/components/organisms/museums/museo-de-arte-de-san-marcos/exposiciones/exposiciones-temporales';
import ElencoMayor from '@/infrastructure/ui/components/organisms/folklore/elencos/elenco-mayor';
import ElencoTaller from '@/infrastructure/ui/components/organisms/folklore/elencos/elenco-taller';
import ElencoDeMarinera from '@/infrastructure/ui/components/organisms/folklore/elencos/elenco-de-marinera';
import ElencoCaporales from '@/infrastructure/ui/components/organisms/folklore/elencos/elenco-caporales';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const Elencos = () => {

	const splideRefElencoMayor = useRef<ExtendedSplideType>(null);
	const splideRefElencoTaller = useRef<ExtendedSplideType>(null);
	const splideRefElencoDeMarinera = useRef<ExtendedSplideType>(null);
	const splideRefElencoCaporales = useRef<ExtendedSplideType>(null);

	const splideOptions: ResponsiveOptions = {
		type: 'slide',
		width: '100%',
		fixedWidth: '390px',
		arrows: false,
		pagination: false,
		gap: '24px',
		perMove: 1,
		breakpoints: {
			1024: {
				fixedWidth: "100%",
				perMove: 1,
			},
		},
	};

	const { handlePrev: handlePrevElencoMayor, handleNext: handleNextElencoMayor, handleMove: handleMoveElencoMayor, isPrevDisabled: isPrevDisabledElencoMayor, isNextDisabled: isNextDisabledElencoMayor } = useSplideControls(splideRefElencoMayor);
	const { handlePrev: handlePrevElencoTaller, handleNext: handleNextElencoTaller, handleMove: handleMoveElencoTaller, isPrevDisabled: isPrevDisabledElencoTaller, isNextDisabled: isNextDisabledElencoTaller } = useSplideControls(splideRefElencoTaller);
	const { handlePrev: handlePrevElencoDeMarinera, handleNext: handleNextElencoDeMarinera, handleMove: handleMoveElencoDeMarinera, isPrevDisabled: isPrevDisabledElencoDeMarinera, isNextDisabled: isNextDisabledElencoDeMarinera } = useSplideControls(splideRefElencoDeMarinera);
	const { handlePrev: handlePrevElencoCaporales, handleNext: handleNextElencoCaporales, handleMove: handleMoveElencoCaporales, isPrevDisabled: isPrevDisabledElencoCaporales, isNextDisabled: isNextDisabledElencoCaporales } = useSplideControls(splideRefElencoCaporales);

	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2">
						Los elencos artísticos a cargo del Centro Universitario de Folklore, son los representantes oficiales de nuestra universidad en materia de música y danzas tradicionales, una forma de mantener nuestra cultura tradicional viva y su difusión a nivel nacional e internacional
					</p>
				</div>
			</div>
			<ElencoMayor
				handleMoveElencoMayor={handleMoveElencoMayor}
				splideRefElencoMayor={splideRefElencoMayor}
				splideOptions={splideOptions}
				isPrevDisabledElencoMayor={isPrevDisabledElencoMayor}
				isNextDisabledElencoMayor={isNextDisabledElencoMayor}
				handlePrevElencoMayor={handlePrevElencoMayor}
				handleNextElencoMayor={handleNextElencoMayor}
			/>
			<ElencoTaller
				handleMoveElencoTaller={handleMoveElencoTaller}
				splideRefElencoTaller={splideRefElencoTaller}
				splideOptions={splideOptions}
				isPrevDisabledElencoTaller={isPrevDisabledElencoTaller}
				isNextDisabledElencoTaller={isNextDisabledElencoTaller}
				handlePrevElencoTaller={handlePrevElencoTaller}
				handleNextElencoTaller={handleNextElencoTaller}
			/>
			<ElencoDeMarinera
				handleMoveElencoDeMarinera={handleMoveElencoDeMarinera}
				splideRefElencoDeMarinera={splideRefElencoDeMarinera}
				splideOptions={splideOptions}
				isPrevDisabledElencoDeMarinera={isPrevDisabledElencoDeMarinera}
				isNextDisabledElencoDeMarinera={isNextDisabledElencoDeMarinera}
				handlePrevElencoDeMarinera={handlePrevElencoDeMarinera}
				handleNextElencoDeMarinera={handleNextElencoDeMarinera}
			/>
			<ElencoCaporales
				handleMoveElencoCaporales={handleMoveElencoCaporales}
				splideRefElencoCaporales={splideRefElencoCaporales}
				splideOptions={splideOptions}
				isPrevDisabledElencoCaporales={isPrevDisabledElencoCaporales}
				isNextDisabledElencoCaporales={isNextDisabledElencoCaporales}
				handlePrevElencoCaporales={handlePrevElencoCaporales}
				handleNextElencoCaporales={handleNextElencoCaporales}
			/>
		</>
	)
}

export default Elencos