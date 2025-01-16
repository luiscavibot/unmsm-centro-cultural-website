import React, { FC } from 'react'

interface ColeccionesIconProps {
	className?: string;
	color?: 'dark' | 'light' | 'selected';
	ariaLabel?: string;
	selected?: boolean;
}

const ColeccionesIcon: FC<ColeccionesIconProps> = ({ className, color = 'dark', ariaLabel, selected = false }) => {

	const colors = {
		dark: 'dark-blue-2',
		light: 'white',
		selected: 'dark-red'
	}

	return (
		<svg aria-label={ariaLabel} className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="system-uicons:picture">
				<g id="Group">
					<g id="Group_2">
						<path className={selected ? `stroke-${colors['selected']}` : `stroke-${colors[color]}`} id="Vector" fillRule="evenodd" clipRule="evenodd" d="M6.28571 4H17.7143C18.3205 4 18.9019 4.24082 19.3305 4.66947C19.7592 5.09812 20 5.67951 20 6.28571V17.7143C20 18.3205 19.7592 18.9019 19.3305 19.3305C18.9019 19.7592 18.3205 20 17.7143 20H6.28571C5.67951 20 5.09812 19.7592 4.66947 19.3305C4.24082 18.9019 4 18.3205 4 17.7143V6.28571C4 5.67951 4.24082 5.09812 4.66947 4.66947C5.09812 4.24082 5.67951 4 6.28571 4Z" stroke="#29384C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path className={selected ? `stroke-${colors['selected']}` : `stroke-${colors[color]}`} id="Vector_2" d="M20 15.4291L16.5714 12.0006L13.1429 15.412M17.7143 20.0006L7.42857 9.71484L4 13.1434" stroke="#29384C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</g>
					<path className={selected ? `fill-${colors['selected']}` : `fill-${colors[color]}`} id="Vector_3" d="M16.0003 9.14118C16.6315 9.14118 17.1431 8.62951 17.1431 7.99833C17.1431 7.36714 16.6315 6.85547 16.0003 6.85547C15.3691 6.85547 14.8574 7.36714 14.8574 7.99833C14.8574 8.62951 15.3691 9.14118 16.0003 9.14118Z" fill="#29384C" />
				</g>
			</g>
		</svg>

	)
}

export default ColeccionesIcon