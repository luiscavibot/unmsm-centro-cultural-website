import React, { FC } from 'react'

interface BaselineEmailIconProps {
	className?: string;
	color?: 'white';
	ariaLabel?: string;
}

const BaselineEmailIcon: FC<BaselineEmailIconProps> = ({ className, color = 'white', ariaLabel }) => {

	const colors = {
		white: 'fill-white'
	}

	return (
		<svg aria-label={ariaLabel} className={className} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={colors[color]} d="M13.3333 2.74365H2.66665C1.93331 2.74365 1.33998 3.34365 1.33998 4.07699L1.33331 12.077C1.33331 12.8103 1.93331 13.4103 2.66665 13.4103H13.3333C14.0666 13.4103 14.6666 12.8103 14.6666 12.077V4.07699C14.6666 3.34365 14.0666 2.74365 13.3333 2.74365ZM13.3333 5.41032L7.99998 8.74365L2.66665 5.41032V4.07699L7.99998 7.41032L13.3333 4.07699V5.41032Z" fill="white" />
		</svg>
	)
}

export default BaselineEmailIcon