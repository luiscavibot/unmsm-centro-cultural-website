import Link from 'next/link';
import React from 'react'

interface VerticalTabProps {
	label: string;
	icon?: React.ReactNode;
	selected?: boolean;
	onClick?: () => void;
	link?: string;
	type?: 'internal-link' | 'external-link';
}

const VerticalTab: React.FC<VerticalTabProps> = ({ label, icon, selected, onClick, link, type }) => {

	if (link) {
		if (type === 'internal-link') {
			return (
				<Link
					className={`font-semibold leading-[16px] p-4 transition-all duration-300 hover:bg-light-bg-button-color-hover h-[48px] rounded-lg inline-flex items-center justify-left gap-x-4 ${selected ? 'ring-inset ring-1 ring-dark-red text-dark-red bg-light-bg-button-color-hover' : 'text-dark-blue-2 bg-white'}`}
					href={link}
				>
					<div className="shrink-0">
						{icon}
					</div>
					<div className="w-full text-left">
						{label}
					</div>
				</Link>
			)
		} else {
			return (
				<a
					className={`font-semibold leading-[16px] p-4 transition-all duration-300 hover:bg-light-bg-button-color-hover h-[48px] rounded-lg inline-flex items-center justify-left gap-x-4 ${selected ? 'ring-inset ring-1 ring-dark-red text-dark-red bg-light-bg-button-color-hover' : 'text-dark-blue-2 bg-white'}`}
					href={link}
					target="_blank"
					rel="noreferrer noopener"
				>
					<div className="shrink-0">
						{icon}
					</div>
					<div className="w-full text-left">
						{label}
					</div>
				</a>
			)
		}
	} else {
		return (
			<button
				className={`font-semibold leading-[16px] p-4 transition-all duration-300 hover:bg-light-bg-button-color-hover h-[48px] rounded-lg inline-flex items-center justify-left gap-x-4 ${selected ? 'ring-inset ring-1 ring-dark-red text-dark-red bg-light-bg-button-color-hover' : 'text-dark-blue-2 bg-white'}`}
				onClick={onClick}
			>
				<div className="shrink-0">
					{icon}
				</div>
				<div className="w-full text-left">
					{label}
				</div>
			</button>
		)
	}
}

export default VerticalTab