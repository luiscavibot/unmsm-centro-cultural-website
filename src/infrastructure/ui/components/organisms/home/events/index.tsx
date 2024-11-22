'use client';

import Image from 'next/image';
import React from 'react';

import { debounce } from '@/infrastructure/ui/helpers/debounce';

const Events: React.FC = () => {
	const elementWrapperRef = React.useRef<HTMLDivElement | null>(null);
	const elementContainerRef = React.useRef<HTMLDivElement | null>(null);
	const [percentage, setPercentage] = React.useState<string>('58');

	const getPercentage = () => {
		if (elementWrapperRef.current && elementContainerRef.current) {
			const wrapperWidth = elementWrapperRef.current.offsetWidth;
			const containerWidth = elementContainerRef.current.offsetWidth;

			const elementWrapperRefCS = window.getComputedStyle(
				elementWrapperRef.current
			);
			const elementContainerRefCS = window.getComputedStyle(
				elementContainerRef.current
			);

			const newSum =
				parseFloat(elementWrapperRefCS.paddingLeft) +
				parseFloat(elementContainerRefCS.marginLeft);

			const x = 57 * wrapperWidth - 100 * newSum;
			const y = 43 * wrapperWidth - 100 * newSum;

			const k = containerWidth / (x + y);

			const _x = x * k;

			const _percentage = (_x / containerWidth) * 100;

			setPercentage(_percentage.toFixed(4));
		}
	};

	React.useEffect(() => {
		const debouncedGetPercentage = debounce(getPercentage, 200);
		getPercentage();
		const handleResize = () => debouncedGetPercentage();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<section id="eventos" className="scroll-mt-28">
			<h2 className="hidden sr-only">Eventos</h2>
			<div>
				<article
					ref={elementWrapperRef}
					className="h-[720px] relative bg-white px-[104px]"
				>
					<figure className="absolute top-0 left-0 w-[57%] h-full">
						<Image
							src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/eventos.png"
							className="object-cover"
							alt="events"
							fill
						/>
					</figure>
					<div
						ref={elementContainerRef}
						className="grid h-[720px] container"
						style={{ gridTemplateColumns: `${percentage}% auto` }}
					>
						<div className="bg-white text-dark-text-color pl-16 py-14 flex items-end col-start-2">
							<div>
								<header>
									<h3 className="text-[40px] font-bold leading-[normal] mb-4">
										Cine al aire libre: «Capitalismos
										capitales»
									</h3>
								</header>
								<p className="leading-6">
									En colaboración con la Dirección de Cine y
									Producción Audiovisual buscamos visibilizar
									la importancia de la preservación y
									restauración del patrimonio cinematográfico
									nacional.
								</p>
								<div className="leading-[normal] text-sm font-semibold mt-5 space-y-3">
									<time dateTime="2024-11-16">
										Viernes, 16 de noviembre
									</time>
									<time dateTime="15:30:00-05:00">
										3:30 p.m.
									</time>
									<p>
										Virtual (Vía transmisión Facebook Live)
									</p>
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Events;
