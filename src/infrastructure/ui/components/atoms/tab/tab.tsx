import Link from 'next/link';
import React from 'react'

interface TabProps {
	label: string;
	icon?: React.ReactNode;
	selected?: boolean;
	onClick?: () => void;
	link?: string;
	type?: 'internal-link' | 'external-link';
}

const Tab: React.FC<TabProps> = ({ label, icon, selected, onClick, link, type }) => {

	if (link) {
		if (type === 'internal-link') {
			return (
				<Link
					className={`font-semibold leading-[16px] p-4 transition-all duration-300 hover:bg-light-bg-button-color-hover h-[48px] rounded-3xl inline-flex items-center justify-center gap-x-2 ${selected ? 'ring-inset ring-1 ring-dark-red text-dark-red bg-light-bg-button-color-hover' : 'text-light-text-button-color bg-light-bg-button-color'}`}
					href={link}
				>
					{label}
					{icon}
				</Link>
			)
		} else {
			return (
				<a
					className={`font-semibold leading-[16px] p-4 transition-all duration-300 hover:bg-light-bg-button-color-hover h-[48px] rounded-3xl inline-flex items-center justify-center gap-x-2 ${selected ? 'ring-inset ring-1 ring-dark-red text-dark-red bg-light-bg-button-color-hover' : 'text-light-text-button-color bg-light-bg-button-color'}`}
					href={link}
					target="_blank"
					rel="noreferrer noopener"
				>
					{label}
					{icon}
				</a>
			)
		}
	} else {
		return (
			<button
				className={`font-semibold leading-[16px] p-4 transition-all duration-300 hover:bg-light-bg-button-color-hover h-[48px] rounded-3xl inline-flex items-center justify-center gap-x-2 ${selected ? 'ring-inset ring-1 ring-dark-red text-dark-red bg-light-bg-button-color-hover' : 'text-light-text-button-color bg-light-bg-button-color'}`}
				onClick={onClick}
			>
				{label}
				{icon}
			</button>
		)
	}
}

export default Tab