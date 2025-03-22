import React, { useRef } from 'react';

import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import splideOptionsCollections from '@/ui/data/splide-options/splide-options-collections';
import useSplideControls from '@/ui/hooks/useSplideControls';
import ElencoMayor from '@/ui/components/organisms/folklore/elencos/elenco-mayor';
import ElencoTaller from '@/ui/components/organisms/folklore/elencos/elenco-taller';
import ElencoDeMarinera from '@/ui/components/organisms/folklore/elencos/elenco-de-marinera';
import ElencoCaporales from '@/ui/components/organisms/folklore/elencos/elenco-caporales';
import ElencoInfantil from '@/ui/components/organisms/folklore/elencos/elenco-infantil';
import ElencoDeMusica from '@/ui/components/organisms/folklore/elencos/elenco-de-musica';
import ConjuntoDeZamponas from '@/ui/components/organisms/folklore/elencos/conjunto-de-zamponas';
import ElencoJuvenil from '@/ui/components/organisms/folklore/elencos/elenco-juvenil';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const Elencos = () => {
	const splideRefElencoMayor = useRef<ExtendedSplideType>(null);
	const splideRefElencoTaller = useRef<ExtendedSplideType>(null);
	const splideRefElencoDeMarinera = useRef<ExtendedSplideType>(null);
	const splideRefElencoCaporales = useRef<ExtendedSplideType>(null);
	const splideRefElencoInfantil = useRef<ExtendedSplideType>(null);
	const splideRefElencoDeMusica = useRef<ExtendedSplideType>(null);
	const splideRefConjuntoDeZamponas = useRef<ExtendedSplideType>(null);
	const splideRefElencoJuvenil = useRef<ExtendedSplideType>(null);

	const {
		handlePrev: handlePrevElencoMayor,
		handleNext: handleNextElencoMayor,
		handleMove: handleMoveElencoMayor,
		isPrevDisabled: isPrevDisabledElencoMayor,
		isNextDisabled: isNextDisabledElencoMayor,
	} = useSplideControls(splideRefElencoMayor);
	const {
		handlePrev: handlePrevElencoTaller,
		handleNext: handleNextElencoTaller,
		handleMove: handleMoveElencoTaller,
		isPrevDisabled: isPrevDisabledElencoTaller,
		isNextDisabled: isNextDisabledElencoTaller,
	} = useSplideControls(splideRefElencoTaller);
	const {
		handlePrev: handlePrevElencoDeMarinera,
		handleNext: handleNextElencoDeMarinera,
		handleMove: handleMoveElencoDeMarinera,
		isPrevDisabled: isPrevDisabledElencoDeMarinera,
		isNextDisabled: isNextDisabledElencoDeMarinera,
	} = useSplideControls(splideRefElencoDeMarinera);
	const {
		handlePrev: handlePrevElencoCaporales,
		handleNext: handleNextElencoCaporales,
		handleMove: handleMoveElencoCaporales,
		isPrevDisabled: isPrevDisabledElencoCaporales,
		isNextDisabled: isNextDisabledElencoCaporales,
	} = useSplideControls(splideRefElencoCaporales);
	const {
		handlePrev: handlePrevElencoInfantil,
		handleNext: handleNextElencoInfantil,
		handleMove: handleMoveElencoInfantil,
		isPrevDisabled: isPrevDisabledElencoInfantil,
		isNextDisabled: isNextDisabledElencoInfantil,
	} = useSplideControls(splideRefElencoInfantil);
	const {
		handlePrev: handlePrevElencoDeMusica,
		handleNext: handleNextElencoDeMusica,
		handleMove: handleMoveElencoDeMusica,
		isPrevDisabled: isPrevDisabledElencoDeMusica,
		isNextDisabled: isNextDisabledElencoDeMusica,
	} = useSplideControls(splideRefElencoDeMusica);
	const {
		handlePrev: handlePrevConjuntoDeZamponas,
		handleNext: handleNextConjuntoDeZamponas,
		handleMove: handleMoveConjuntoDeZamponas,
		isPrevDisabled: isPrevDisabledConjuntoDeZamponas,
		isNextDisabled: isNextDisabledConjuntoDeZamponas,
	} = useSplideControls(splideRefConjuntoDeZamponas);
	const {
		handlePrev: handlePrevElencoJuvenil,
		handleNext: handleNextElencoJuvenil,
		handleMove: handleMoveElencoJuvenil,
		isPrevDisabled: isPrevDisabledElencoJuvenil,
		isNextDisabled: isNextDisabledElencoJuvenil,
	} = useSplideControls(splideRefElencoJuvenil);

	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2">
						Los elencos artísticos a cargo del Centro Universitario
						de Folklore, son los representantes oficiales de nuestra
						universidad en materia de música y danzas tradicionales,
						una forma de mantener nuestra cultura tradicional viva y
						su difusión a nivel nacional e internacional
					</p>
				</div>
			</div>
			<ElencoMayor
				handleMoveElencoMayor={handleMoveElencoMayor}
				splideRefElencoMayor={splideRefElencoMayor}
				splideOptions={splideOptionsCollections}
				isPrevDisabledElencoMayor={isPrevDisabledElencoMayor}
				isNextDisabledElencoMayor={isNextDisabledElencoMayor}
				handlePrevElencoMayor={handlePrevElencoMayor}
				handleNextElencoMayor={handleNextElencoMayor}
			/>
			<ElencoTaller
				handleMoveElencoTaller={handleMoveElencoTaller}
				splideRefElencoTaller={splideRefElencoTaller}
				splideOptions={splideOptionsCollections}
				isPrevDisabledElencoTaller={isPrevDisabledElencoTaller}
				isNextDisabledElencoTaller={isNextDisabledElencoTaller}
				handlePrevElencoTaller={handlePrevElencoTaller}
				handleNextElencoTaller={handleNextElencoTaller}
			/>
			<ElencoDeMarinera
				handleMoveElencoDeMarinera={handleMoveElencoDeMarinera}
				splideRefElencoDeMarinera={splideRefElencoDeMarinera}
				splideOptions={splideOptionsCollections}
				isPrevDisabledElencoDeMarinera={isPrevDisabledElencoDeMarinera}
				isNextDisabledElencoDeMarinera={isNextDisabledElencoDeMarinera}
				handlePrevElencoDeMarinera={handlePrevElencoDeMarinera}
				handleNextElencoDeMarinera={handleNextElencoDeMarinera}
			/>
			<ElencoCaporales
				handleMoveElencoCaporales={handleMoveElencoCaporales}
				splideRefElencoCaporales={splideRefElencoCaporales}
				splideOptions={splideOptionsCollections}
				isPrevDisabledElencoCaporales={isPrevDisabledElencoCaporales}
				isNextDisabledElencoCaporales={isNextDisabledElencoCaporales}
				handlePrevElencoCaporales={handlePrevElencoCaporales}
				handleNextElencoCaporales={handleNextElencoCaporales}
			/>
			<ElencoJuvenil
				handleMoveElencoJuvenil={handleMoveElencoJuvenil}
				splideRefElencoJuvenil={splideRefElencoJuvenil}
				splideOptions={splideOptionsCollections}
				isPrevDisabledElencoJuvenil={isPrevDisabledElencoJuvenil}
				isNextDisabledElencoJuvenil={isNextDisabledElencoJuvenil}
				handlePrevElencoJuvenil={handlePrevElencoJuvenil}
				handleNextElencoJuvenil={handleNextElencoJuvenil}
			/>
			<ElencoInfantil
				handleMoveElencoInfantil={handleMoveElencoInfantil}
				splideRefElencoInfantil={splideRefElencoInfantil}
				splideOptions={splideOptionsCollections}
				isPrevDisabledElencoInfantil={isPrevDisabledElencoInfantil}
				isNextDisabledElencoInfantil={isNextDisabledElencoInfantil}
				handlePrevElencoInfantil={handlePrevElencoInfantil}
				handleNextElencoInfantil={handleNextElencoInfantil}
			/>
			<ElencoDeMusica
				handleMoveElencoDeMusica={handleMoveElencoDeMusica}
				splideRefElencoDeMusica={splideRefElencoDeMusica}
				splideOptions={splideOptionsCollections}
				isPrevDisabledElencoDeMusica={isPrevDisabledElencoDeMusica}
				isNextDisabledElencoDeMusica={isNextDisabledElencoDeMusica}
				handlePrevElencoDeMusica={handlePrevElencoDeMusica}
				handleNextElencoDeMusica={handleNextElencoDeMusica}
			/>
			<ConjuntoDeZamponas
				handleMoveConjuntoDeZamponas={handleMoveConjuntoDeZamponas}
				splideRefConjuntoDeZamponas={splideRefConjuntoDeZamponas}
				splideOptions={splideOptionsCollections}
				isPrevDisabledConjuntoDeZamponas={
					isPrevDisabledConjuntoDeZamponas
				}
				isNextDisabledConjuntoDeZamponas={
					isNextDisabledConjuntoDeZamponas
				}
				handlePrevConjuntoDeZamponas={handlePrevConjuntoDeZamponas}
				handleNextConjuntoDeZamponas={handleNextConjuntoDeZamponas}
			/>
		</>
	);
};

export default Elencos;
