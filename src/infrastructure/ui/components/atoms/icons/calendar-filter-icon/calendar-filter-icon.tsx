import React, { FC } from 'react'

interface CalendarFilterIconProps {
	theme?: 'light' | 'dark';
	className?: string;
}

const CalendarFilterIcon: FC<CalendarFilterIconProps> = ({ theme = 'dark', className }) => {

	const colors = {
		light: 'fill-white',
		dark: 'fill-dark-blue-2'
	}

	return (
		<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={colors[theme]} d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V10H20V21ZM20 8H4V5H20V8Z" fill="#29384C" />
		</svg>
	)
}

export default CalendarFilterIcon