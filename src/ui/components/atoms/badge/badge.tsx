import React from 'react'

interface BadgeProps {
	className?: string;
	label: string;
	size?: 'small' | 'large';
}

const Badge: React.FC<BadgeProps> = ({ className, label, size = 'small' }) => {
	return (
		<span className={`inline-flex items-center justify-center px-2 py-[6px] bg-light-info-color text-dark-info-color rounded-md font-medium mb-2 ${size === 'small' ? 'leading-[12px] text-xs h-[24px]' : 'leading-[16px] text-base h-[28px]'} ${className}`}>
			{label}
		</span>
	)
}

export default Badge