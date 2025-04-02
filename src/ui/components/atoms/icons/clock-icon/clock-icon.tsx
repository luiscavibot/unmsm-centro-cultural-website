import React, { FC } from 'react'

interface ClockIconProps {
	className?: string;
	color?: 'dark' | 'light';
	ariaLabel?: string;
}

const ClockIcon: FC<ClockIconProps> = ({ className, color = 'dark', ariaLabel }) => {

	const colors = {
		dark: 'stroke-dark-blue',
		light: 'stroke-white'
	}

	return (
		<svg aria-label={ariaLabel} className={className} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={colors[color]} d="M2 8.50006C2 9.28799 2.15519 10.0682 2.45672 10.7962C2.75825 11.5241 3.20021 12.1855 3.75736 12.7427C4.31451 13.2999 4.97595 13.7418 5.7039 14.0433C6.43185 14.3449 7.21207 14.5001 8 14.5001C8.78793 14.5001 9.56815 14.3449 10.2961 14.0433C11.0241 13.7418 11.6855 13.2999 12.2426 12.7427C12.7998 12.1855 13.2417 11.5241 13.5433 10.7962C13.8448 10.0682 14 9.28799 14 8.50006C14 6.90876 13.3679 5.38264 12.2426 4.25742C11.1174 3.1322 9.5913 2.50006 8 2.50006C6.4087 2.50006 4.88258 3.1322 3.75736 4.25742C2.63214 5.38264 2 6.90876 2 8.50006Z" stroke="#1D2836" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path className={colors[color]} d="M8.00012 5.16663V8.49996L10.0001 10.5" stroke="#1D2836" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

export default ClockIcon