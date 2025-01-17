import React, { FC } from 'react'

interface ColeccionUgarteIconProps {
	className?: string;
	color?: 'dark' | 'light' | 'selected';
	ariaLabel?: string;
	selected?: boolean;
}

const ColeccionUgarteIcon: FC<ColeccionUgarteIconProps> = ({ className, color = 'dark', ariaLabel, selected = false }) => {

	const colors = {
		dark: 'fill-dark-blue-2',
		light: 'fill-white',
		selected: 'fill-dark-red'
	}

	return (
		<svg aria-label={ariaLabel} className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="material-symbols:art-track-outline-rounded">
				<path className={selected ? colors['selected'] : colors[color]} id="Vector" d="M3 19C2.45 19 1.97933 18.8043 1.588 18.413C1.19667 18.0217 1.00067 17.5507 1 17V7C1 6.45 1.196 5.97934 1.588 5.588C1.98 5.19667 2.45067 5.00067 3 5H13C13.55 5 14.021 5.196 14.413 5.588C14.805 5.98 15.0007 6.45067 15 7V17C15 17.55 14.8043 18.021 14.413 18.413C14.0217 18.805 13.5507 19.0007 13 19H3ZM3 17H13V7H3V17ZM7.5 14L6.5 12.675C6.4 12.5417 6.26667 12.4793 6.1 12.488C5.93333 12.4967 5.8 12.5673 5.7 12.7L4.575 14.2C4.44167 14.3667 4.429 14.5417 4.537 14.725C4.645 14.9083 4.79933 15 5 15H11C11.2 15 11.35 14.9083 11.45 14.725C11.55 14.5417 11.5333 14.3667 11.4 14.2L9.8 12.025C9.7 11.8917 9.56667 11.825 9.4 11.825C9.23333 11.825 9.1 11.8917 9 12.025L7.5 14ZM18 19C17.7167 19 17.4793 18.904 17.288 18.712C17.0967 18.52 17.0007 18.2827 17 18V6C17 5.71667 17.096 5.47934 17.288 5.288C17.48 5.09667 17.7173 5.00067 18 5C18.2827 4.99934 18.5203 5.09534 18.713 5.288C18.9057 5.48067 19.0013 5.718 19 6V18C19 18.2833 18.904 18.521 18.712 18.713C18.52 18.905 18.2827 19.0007 18 19ZM22 19C21.7167 19 21.4793 18.904 21.288 18.712C21.0967 18.52 21.0007 18.2827 21 18V6C21 5.71667 21.096 5.47934 21.288 5.288C21.48 5.09667 21.7173 5.00067 22 5C22.2827 4.99934 22.5203 5.09534 22.713 5.288C22.9057 5.48067 23.0013 5.718 23 6V18C23 18.2833 22.904 18.521 22.712 18.713C22.52 18.905 22.2827 19.0007 22 19Z" fill="#29384C" />
			</g>
		</svg>

	)
}

export default ColeccionUgarteIcon