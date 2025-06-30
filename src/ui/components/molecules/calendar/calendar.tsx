// src/ui/components/molecules/calendar/index.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { cn } from '@/ui/helpers/cn';
import { AnimatePresence, motion } from 'framer-motion';
import CalendarFilterIcon from '../../atoms/icons/calendar-filter-icon';

export interface CalendarProps {
	className?: string;
	selected?: DateRange;
	onSelect?: (range: DateRange | undefined) => void;
}

const Calendar: React.FC<CalendarProps> = ({
	className = '',
	selected,
	onSelect,
}) => {
	const [internal, setInternal] = useState<DateRange | undefined>();
	const range = selected ?? internal;

	const setRange = (r: DateRange | undefined) => {
		if (onSelect) onSelect(r);
		else setInternal(r);
	};

	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const label = range?.from
		? range.to
			? `${format(range.from, 'dd/MM/yyyy', { locale: es })} – ${format(
					range.to,
					'dd/MM/yyyy',
					{ locale: es }
			  )}`
			: format(range.from, 'dd/MM/yyyy', { locale: es })
		: 'Seleccionar fecha';

	useEffect(() => {
		const onMouseDown = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', onMouseDown);
		return () => document.removeEventListener('mousedown', onMouseDown);
	}, []);

	return (
		<div className={cn('relative', className)} ref={ref}>
			<button
				className={cn(
					'flex w-full items-center justify-between gap-2 px-4 py-3 text-left rounded-lg bg-white ring-1 ring-inset ring-gray-200 hover:ring-blue-300 transition',
					!range && 'text-gray-400'
				)}
				onClick={(e) => {
					e.preventDefault();
					setIsOpen((v) => !v);
				}}
			>
				{label}
				<CalendarFilterIcon theme="dark" className="shrink-0" />
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						className="absolute z-10 mt-2 bg-white rounded-lg shadow-lg p-4"
					>
						<DayPicker
							mode="range"
							selected={range}
							onSelect={setRange}
							numberOfMonths={1}
							locale={es}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Calendar;
