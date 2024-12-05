import React, { FC } from 'react'

interface ArrowDropdownIconProps {
	direction?: "up" | "down";
	color?: "white" | "black";
}

const ArrowDropdownIcon: FC<ArrowDropdownIconProps> = ({ direction = 'down', color }) => {

	const fillColor = () => {
		switch (color) {
			case "white":
				return "fill-white";
			case "black":
				return "fill-dark-blue-2";
			default:
				return "fill-dark-blue-2";
		}
	}

	const rotation = direction === "down" ? "rotate-180" : "";

	return (
		<svg className={`${rotation} transition-all duration-300 ease-in-out`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={fillColor()} fillRule="evenodd" clipRule="evenodd" d="M7.52879 5.5282C7.65381 5.40322 7.82334 5.33301 8.00012 5.33301C8.1769 5.33301 8.34644 5.40322 8.47145 5.5282L12.2428 9.29953C12.3642 9.42527 12.4314 9.59367 12.4299 9.76847C12.4284 9.94326 12.3583 10.1105 12.2347 10.2341C12.1111 10.3577 11.9439 10.4278 11.7691 10.4293C11.5943 10.4308 11.4259 10.3636 11.3001 10.2422L8.00012 6.9422L4.70012 10.2422C4.57439 10.3636 4.40598 10.4308 4.23119 10.4293C4.05639 10.4278 3.88918 10.3577 3.76557 10.2341C3.64197 10.1105 3.57186 9.94326 3.57034 9.76847C3.56882 9.59367 3.63601 9.42527 3.75745 9.29953L7.52879 5.5282Z" fill="#29384C" />
		</svg>
	)
}

export default ArrowDropdownIcon