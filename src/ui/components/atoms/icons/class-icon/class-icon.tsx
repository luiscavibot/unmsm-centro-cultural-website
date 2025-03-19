import React, { FC } from 'react'

interface ClassIconProps {
	className?: string;
	color?: 'dark';
	ariaLabel?: string;
}

const ClassIcon: FC<ClassIconProps> = ({ className, color = 'dark', ariaLabel }) => {

	const colors = {
		dark: 'stroke-dark-blue'
	}

	return (
		<svg aria-label={ariaLabel} className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="majesticons:book-line">
				<path className={colors[color]} id="Vector" d="M5.33268 2H3.99935C3.64573 2 3.30659 2.14048 3.05654 2.39052C2.80649 2.64057 2.66602 2.97971 2.66602 3.33333V12.6667C2.66602 13.0203 2.80649 13.3594 3.05654 13.6095C3.30659 13.8595 3.64573 14 3.99935 14H11.9993C12.353 14 12.6921 13.8595 12.9422 13.6095C13.1922 13.3594 13.3327 13.0203 13.3327 12.6667V3.33333C13.3327 2.97971 13.1922 2.64057 12.9422 2.39052C12.6921 2.14048 12.353 2 11.9993 2H9.33268M5.33268 2V8L7.33268 6L9.33268 8V2M5.33268 2H9.33268" stroke="#29384C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
			</g>
		</svg>
	)
}

export default ClassIcon