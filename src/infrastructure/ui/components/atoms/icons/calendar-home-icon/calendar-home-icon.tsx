import React, { FC } from 'react'

interface CalendarHomeIconProps {
	color?: 'white';
}

const CalendarHomeIcon: FC<CalendarHomeIconProps> = ({ color = 'white' }) => {

	const colors = {
		white: 'stroke-white'
	}

	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={colors[color]} d="M5.2 1.00006V3.80006M10.8 1.00006V3.80006M1 6.60006H15M3.8 2.40007H12.2C13.7464 2.40007 15 3.65367 15 5.20006V12.2001C15 13.7465 13.7464 15.0001 12.2 15.0001H3.8C2.2536 15.0001 1 13.7465 1 12.2001V5.20006C1 3.65367 2.2536 2.40007 3.8 2.40007Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

export default CalendarHomeIcon