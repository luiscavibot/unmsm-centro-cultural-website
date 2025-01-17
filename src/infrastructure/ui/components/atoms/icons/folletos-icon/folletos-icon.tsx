import React, { FC } from 'react'

interface FolletosIconProps {
	className?: string;
	color?: 'dark' | 'light' | 'selected';
	ariaLabel?: string;
	selected?: boolean;
}

const FolletosIcon: FC<FolletosIconProps> = ({ className, color = 'dark', ariaLabel, selected = false }) => {

	const colors = {
		dark: 'dark-blue-2',
		light: 'white',
		selected: 'dark-red'
	}

	return (
		<svg aria-label={ariaLabel} className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="streamline:news-paper">
				<g id="Group">
					<path className={selected ? `stroke-${colors['selected']}` : `stroke-${colors[color]}`} id="Vector" d="M23.1431 7.71429V18.8571C23.1431 19.4255 22.9174 19.9705 22.5155 20.3724C22.1136 20.7742 21.5686 21 21.0003 21M21.0003 21C20.432 21 19.8869 20.7742 19.4851 20.3724C19.0832 19.9705 18.8574 19.4255 18.8574 18.8571V3.85714C18.8574 3.62981 18.7671 3.4118 18.6064 3.25105C18.4456 3.09031 18.2276 3 18.0003 3H1.71456C1.48724 3 1.26922 3.09031 1.10847 3.25105C0.947728 3.4118 0.857422 3.62981 0.857422 3.85714V19.2857C0.857422 19.7404 1.03803 20.1764 1.35952 20.4979C1.68102 20.8194 2.11705 21 2.57171 21H21.0003Z" stroke="#29384C" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
					<path className={selected ? `stroke-${colors['selected']}` : `stroke-${colors[color]}`} id="Vector_2" d="M6 16.7137H13.7143M13.7143 7.28516H6V11.5709H13.7143V7.28516Z" stroke="#29384C" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
				</g>
			</g>
		</svg>
	)
}

export default FolletosIcon