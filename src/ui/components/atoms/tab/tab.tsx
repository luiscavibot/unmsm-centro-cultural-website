import Link from 'next/link';
import React from 'react'

interface TabProps {
	label: string;
	icon?: React.ReactNode;
	selected?: boolean;
	onClick?: () => void;
	link?: string;
	type?: 'internal-link' | 'external-link';
	className?: string;
}

const Tab: React.FC<TabProps> = ({ label, icon, selected, onClick, link, type, className }) => {

	if (link) {
		if (type === 'internal-link') {
			return (
				<Link
					className={`font-semibold leading-[16px] p-4 transition-all duration-300 hover:bg-light-bg-button-color-hover h-[48px] rounded-3xl inline-flex items-center justify-center gap-x-2 max-md:shrink-0 ${selected ? 'ring-inset ring-1 ring-dark-red text-dark-red bg-light-bg-button-color-hover' : 'text-light-text-button-color bg-light-bg-button-color'} ${className}`}
					href={link}
				>
					<span className="w-full text-left">
						{label}
					</span>
					{
						icon &&
						<div className="shrink-0">
							{icon}
						</div>
					}
				</Link>
			)
		} else {
			return (
				<a
					className={`font-semibold leading-[16px] p-4 transition-all duration-300 hover:bg-light-bg-button-color-hover h-[48px] rounded-3xl inline-flex items-center justify-center gap-x-2 max-md:shrink-0 ${selected ? 'ring-inset ring-1 ring-dark-red text-dark-red bg-light-bg-button-color-hover' : 'text-light-text-button-color bg-light-bg-button-color'} ${className}`}
					href={link}
					target="_blank"
					rel="noreferrer noopener"
				>
					<span className="w-full text-left">
						{label}
					</span>
					{
						icon &&
						<div className="shrink-0">
							{icon}
						</div>
					}
				</a>
			)
		}
	} else {
		return (
			<button
				className={`font-semibold leading-[16px] p-4 transition-all duration-300 hover:bg-light-bg-button-color-hover h-[48px] rounded-3xl inline-flex items-center justify-center gap-x-2 max-md:shrink-0 ${selected ? 'ring-inset ring-1 ring-dark-red text-dark-red bg-light-bg-button-color-hover' : 'text-light-text-button-color bg-light-bg-button-color'} ${className}`}
				onClick={onClick}
			>
				<span className="w-full text-left">
					{label}
				</span>
				{
					icon &&
					<div className="shrink-0">
						{icon}
					</div>
				}
			</button>
		)
	}
}

export default Tab