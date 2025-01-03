import React, { FC } from 'react'

interface OutlinePlaceIconProps {
	className?: string;
	color?: 'dark' | 'light';
	ariaLabel?: string;
}

const OutlinePlaceIcon: FC<OutlinePlaceIconProps> = ({ className, color = 'dark', ariaLabel }) => {

	const colors = {
		dark: 'fill-dark-blue',
		light: 'fill-white'
	}

	return (
		<svg aria-label={ariaLabel} className={className} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={colors[color]} d="M8.00002 8.49998C7.26669 8.49998 6.66669 7.89998 6.66669 7.16665C6.66669 6.43331 7.26669 5.83331 8.00002 5.83331C8.73335 5.83331 9.33335 6.43331 9.33335 7.16665C9.33335 7.89998 8.73335 8.49998 8.00002 8.49998ZM12 7.29998C12 4.87998 10.2334 3.16665 8.00002 3.16665C5.76669 3.16665 4.00002 4.87998 4.00002 7.29998C4.00002 8.85998 5.30002 10.9266 8.00002 13.3933C10.7 10.9266 12 8.85998 12 7.29998ZM8.00002 1.83331C10.8 1.83331 13.3334 3.97998 13.3334 7.29998C13.3334 9.51331 11.5534 12.1333 8.00002 15.1666C4.44669 12.1333 2.66669 9.51331 2.66669 7.29998C2.66669 3.97998 5.20002 1.83331 8.00002 1.83331Z" fill="#1D2836" />
		</svg>
	)
}

export default OutlinePlaceIcon