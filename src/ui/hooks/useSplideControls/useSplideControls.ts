import { RefObject, useState, useEffect, useRef } from "react";
import type { Splide as SplideType } from '@splidejs/splide';

interface ExtendedSplideType extends SplideType {
  splide: SplideType;
}

const useSplideControls = (splideRef: RefObject<ExtendedSplideType>) => {
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const prevIndexRef = useRef<number>(-1); // Ref para almacenar el índice anterior
  const prevIsPrevDisabledRef = useRef<boolean>(true); // Ref para almacenar el valor de isPrevDisabled
  const prevIsNextDisabledRef = useRef<boolean>(false); // Ref para almacenar el valor de isNextDisabled

  const handlePrev = () => splideRef.current?.splide?.go('<');
  const handleNext = () => splideRef.current?.splide?.go('>');

  const handleMove = () => {
    const splide = splideRef.current?.splide;
    if (splide) {
      const newIndex = splide.index;
      const newIsPrevDisabled = newIndex === 0;
      const newIsNextDisabled = newIndex === splide.length - 1;

      // Solo actualizamos el estado si el valor ha cambiado
      if (newIndex !== prevIndexRef.current) {
        if (newIsPrevDisabled !== prevIsPrevDisabledRef.current) {
          setIsPrevDisabled(newIsPrevDisabled);
        }
        if (newIsNextDisabled !== prevIsNextDisabledRef.current) {
          setIsNextDisabled(newIsNextDisabled);
        }

        // Actualizamos los refs
        prevIndexRef.current = newIndex;
        prevIsPrevDisabledRef.current = newIsPrevDisabled;
        prevIsNextDisabledRef.current = newIsNextDisabled;
      }
    }
  };

  // Nos aseguramos de que se llame handleMove cuando el slider cambia de posición
  useEffect(() => {
    const splide = splideRef.current?.splide;

    if (splide) {
      splide.on('moved', handleMove); // Esto se asegura de que el handleMove se ejecute cuando se deslice

      // Eliminar el controlador de eventos correctamente
      return () => {
        splide.off('moved'); // Solo se pasa el evento, sin la función de callback
      };
    }
  }, [splideRef]);

  return { handlePrev, handleNext, isPrevDisabled, isNextDisabled };
};

export default useSplideControls;