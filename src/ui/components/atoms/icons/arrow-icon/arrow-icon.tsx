import React, { FC } from 'react'

interface ArrowIconProps {
	className?: string;
	direction?: "right" | "left";
	fillColor?: string;
}

const ArrowIcon: FC<ArrowIconProps> = ({ className, direction = 'right', fillColor }) => {

	const rotation = direction === "left" ? "rotate-180" : "";

	return (
		<svg
			className={`${className} ${rotation}`}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path className={fillColor} d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" fill="#2A2D31" />
		</svg>
	)
}

export default ArrowIcon