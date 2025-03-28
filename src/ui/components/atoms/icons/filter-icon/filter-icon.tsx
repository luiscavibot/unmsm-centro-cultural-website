import React, { FC } from 'react'

interface FilterIconProps {
	className?: string;
	ariaLabel?: string;
}

const FilterIcon: FC<FilterIconProps> = ({ className, ariaLabel }) => (
	<svg
	aria-label={ariaLabel}
	className={className}
	width={24}
	height={24}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	>
	<g clipPath="url(#a)" stroke="#fff" strokeWidth={2} strokeLinecap="round">
		<path d="M10.5 6h10M4 16.5h10m-9-10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm10 10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />
	</g>
	<defs>
		<clipPath id="a">
		<path fill="#fff" d="M0 0h24v24H0z" />
		</clipPath>
	</defs>
	</svg>
);

export default FilterIcon;
