import React, { FC } from 'react'

interface DateRangeIconProps {
	className?: string;
	color?: 'dark';
	ariaLabel?: string;
}

const DateRangeIcon: FC<DateRangeIconProps> = ({ className, color = 'dark', ariaLabel }) => {

	const colors = {
		dark: 'fill-dark-blue'
	}

	return (
		<svg aria-label={ariaLabel} className={className} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={colors[color]} d="M6 7.16644H4.66667V8.49978H6V7.16644ZM8.66667 7.16644H7.33333V8.49978H8.66667V7.16644ZM11.3333 7.16644H10V8.49978H11.3333V7.16644ZM12.6667 2.49978H12V1.16644H10.6667V2.49978H5.33333V1.16644H4V2.49978H3.33333C2.97971 2.49978 2.64057 2.64025 2.39052 2.8903C2.14048 3.14035 2 3.47949 2 3.83311V13.1664C2 13.5201 2.14048 13.8592 2.39052 14.1093C2.64057 14.3593 2.97971 14.4998 3.33333 14.4998H12.6667C13.0203 14.4998 13.3594 14.3593 13.6095 14.1093C13.8595 13.8592 14 13.5201 14 13.1664V3.83311C14 3.47949 13.8595 3.14035 13.6095 2.8903C13.3594 2.64025 13.0203 2.49978 12.6667 2.49978ZM12.6667 13.1664H3.33333V5.83311H12.6667V13.1664Z" fill="#1D2836" />
		</svg>

	)
}

export default DateRangeIcon