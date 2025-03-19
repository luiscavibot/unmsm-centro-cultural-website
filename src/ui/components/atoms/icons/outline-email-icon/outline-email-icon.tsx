import React, { FC } from 'react'

interface OutlineEmailIconProps {
	className?: string;
	color?: 'dark';
	ariaLabel?: string;
}

const OutlineEmailIcon: FC<OutlineEmailIconProps> = ({ className, color = 'dark', ariaLabel }) => {

	const colors = {
		dark: 'fill-dark-blue'
	}

	return (
		<svg aria-label={ariaLabel} className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="ic:outline-email">
				<path className={colors[color]} id="Vector" d="M14.6667 4.00033C14.6667 3.26699 14.0667 2.66699 13.3334 2.66699H2.66671C1.93337 2.66699 1.33337 3.26699 1.33337 4.00033V12.0003C1.33337 12.7337 1.93337 13.3337 2.66671 13.3337H13.3334C14.0667 13.3337 14.6667 12.7337 14.6667 12.0003V4.00033ZM13.3334 4.00033L8.00004 7.33366L2.66671 4.00033H13.3334ZM13.3334 12.0003H2.66671V5.33366L8.00004 8.66699L13.3334 5.33366V12.0003Z" fill="#29384C" />
			</g>
		</svg>

	)
}

export default OutlineEmailIcon