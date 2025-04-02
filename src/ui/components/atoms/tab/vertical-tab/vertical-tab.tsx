import Link from 'next/link';
import React from 'react'

interface VerticalTabProps {
	label: string;
	icon?: React.ReactNode;
	selected?: boolean;
	onClick?: () => void;
	link?: string;
	type?: 'internal-link' | 'external-link';
	className?: string;
}

const VerticalTab: React.FC<VerticalTabProps> = ({ label, icon, selected, onClick, link, type, className }) => {

	if (link) {
		if (type === 'internal-link') {
			return (
				<Link
					className={`font-semibold leading-[16px] p-4 transition-all duration-300 hover:bg-light-bg-button-color-hover h-[48px] rounded-lg inline-flex items-center justify-left gap-x-4 ${selected ? 'ring-inset ring-1 ring-dark-red text-dark-red bg-light-bg-button-color-hover' : 'text-dark-blue-2 bg-white'} ${className}`}
					href={link}
				>
					{
						icon &&
						<div className="shrink-0">
							{icon}
						</div>
					}
					<span className="w-full text-left">
						{label}
					</span>
				</Link>
			)
		} else {
			return (
				<a
					className={`font-semibold leading-[16px] p-4 transition-all duration-300 hover:bg-light-bg-button-color-hover h-[48px] rounded-lg inline-flex items-center justify-left gap-x-4 ${selected ? 'ring-inset ring-1 ring-dark-red text-dark-red bg-light-bg-button-color-hover' : 'text-dark-blue-2 bg-white'} ${className}`}
					href={link}
					target="_blank"
					rel="noreferrer noopener"
				>
					{
						icon &&
						<div className="shrink-0">
							{icon}
						</div>
					}
					<span className="w-full text-left">
						{label}
					</span>
				</a>
			)
		}
	} else {
		return (
			<button
				className={`font-semibold leading-[16px] p-4 transition-all duration-300 hover:bg-light-bg-button-color-hover h-[48px] rounded-lg inline-flex items-center justify-left gap-x-4 ${selected ? 'ring-inset ring-1 ring-dark-red text-dark-red bg-light-bg-button-color-hover' : 'text-dark-blue-2 bg-white'} ${className}`}
				onClick={onClick}
			>
				{
					icon &&
					<div className="shrink-0">
						{icon}
					</div>
				}
				<span className="w-full text-left">
					{label}
				</span>
			</button>
		)
	}
}

export default VerticalTab