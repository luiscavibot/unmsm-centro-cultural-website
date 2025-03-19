import React, { FC } from 'react'

interface BaselinePlaceIconProps {
	className?: string;
	color?: 'white';
	ariaLabel?: string;
}

const BaselinePlaceIcon: FC<BaselinePlaceIconProps> = ({ className, color = 'white', ariaLabel }) => {

	const colors = {
		white: 'fill-white'
	}

	return (
		<svg aria-label={ariaLabel} className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={colors[color]} d="M7.99998 1.3335C5.41998 1.3335 3.33331 3.42016 3.33331 6.00016C3.33331 9.50016 7.99998 14.6668 7.99998 14.6668C7.99998 14.6668 12.6666 9.50016 12.6666 6.00016C12.6666 3.42016 10.58 1.3335 7.99998 1.3335ZM7.99998 7.66683C7.55795 7.66683 7.13403 7.49123 6.82147 7.17867C6.50891 6.86611 6.33331 6.44219 6.33331 6.00016C6.33331 5.55814 6.50891 5.13421 6.82147 4.82165C7.13403 4.50909 7.55795 4.3335 7.99998 4.3335C8.44201 4.3335 8.86593 4.50909 9.17849 4.82165C9.49105 5.13421 9.66665 5.55814 9.66665 6.00016C9.66665 6.44219 9.49105 6.86611 9.17849 7.17867C8.86593 7.49123 8.44201 7.66683 7.99998 7.66683Z" fill="white" />
		</svg>
	)
}

export default BaselinePlaceIcon