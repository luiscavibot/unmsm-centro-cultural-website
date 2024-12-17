"use client";

import React, { useEffect, useRef, useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/infrastructure/ui/helpers/cn";
import { AnimatePresence, motion } from "framer-motion";
import CalendarFilterIcon from "../../atoms/icons/calendar-filter-icon";

const Calendar = () => {
	const [date, setDate] = useState<DateRange | undefined>();
	const [isOpen, setIsOpen] = useState(false);
	const calendarRef = useRef<HTMLDivElement | null>(null);

	const formattedDate = date?.from
		? date.to
			? `${format(date.from, "dd/MM/yyyy", { locale: es })} - ${format(
				date.to,
				"dd/MM/yyyy",
				{ locale: es }
			)}`
			: format(date.from, "dd/MM/yyyy", { locale: es })
		: "Seleccionar fecha";

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative" ref={calendarRef}>
			<button
				className={cn(
					"flex w-full items-center justify-between gap-4 p-4 ring-1 ring-inset ring-light-gray-2 rounded-lg text-left leading-[24px] font-medium text-dark-blue-2 bg-white",
					!date && "text-dark-blue-2/70"
				)}
				onClick={(e) => {
					e.preventDefault();
					setIsOpen((prev) => !prev);
				}}
			>
				{formattedDate}
				<CalendarFilterIcon theme="dark" className="shrink-0" />
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className="absolute z-10 mt-2 bg-white rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] p-4"
					>
						<DayPicker
							mode="range"
							selected={date}
							onSelect={setDate}
							numberOfMonths={1}
							locale={es}
						/>
					</motion.div>
				)}


			</AnimatePresence>
		</div>
	);
}

export default Calendar;