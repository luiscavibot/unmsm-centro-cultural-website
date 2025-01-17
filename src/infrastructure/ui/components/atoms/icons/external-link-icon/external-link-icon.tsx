import React, { FC } from 'react'

interface ExternalLinkIconProps {
	className?: string;
	ariaLabel?: string;
}

const ExternalLinkIcon: FC<ExternalLinkIconProps> = ({ className, ariaLabel }) => {

	return (
		<svg aria-label={ariaLabel} className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className="stroke-current" d="M13.3333 8.00004H8.00001C7.29277 8.00004 6.61449 8.28099 6.11439 8.78109C5.61429 9.28119 5.33334 9.95946 5.33334 10.6667V24C5.33334 24.7073 5.61429 25.3856 6.11439 25.8857C6.61449 26.3858 7.29277 26.6667 8.00001 26.6667H21.3333C22.0406 26.6667 22.7189 26.3858 23.219 25.8857C23.7191 25.3856 24 24.7073 24 24V18.6667M18.6667 5.33337H26.6667M26.6667 5.33337V13.3334M26.6667 5.33337L13.3333 18.6667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>

	)
}

export default ExternalLinkIcon