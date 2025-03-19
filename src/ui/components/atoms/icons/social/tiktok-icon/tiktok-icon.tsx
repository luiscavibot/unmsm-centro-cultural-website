import React, { FC } from 'react'

interface TiktokIconProps {
	color?: 'white' | 'black';
}

const TiktokIcon: FC<TiktokIconProps> = ({ color = "white" }) => {

	const fillColor = {
		white: "fill-white",
		black: "fill-black",
	}

	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={fillColor[color]} d="M12.6939 2.50673C11.9965 1.81297 11.6121 0.922194 11.6122 6.10352e-05H8.45918V11.0223C8.43537 11.6189 8.14645 12.1841 7.65337 12.5987C7.1603 13.0133 6.50163 13.2449 5.81633 13.2445C4.36735 13.2445 3.16327 12.2134 3.16327 10.9334C3.16327 9.40451 4.85714 8.25784 6.60204 8.72895V5.92006C3.08163 5.51117 0 7.89339 0 10.9334C0 13.8934 2.81633 16.0001 5.80612 16.0001C9.0102 16.0001 11.6122 13.7334 11.6122 10.9334V5.34228C12.8908 6.14215 14.4259 6.5713 16 6.56895V3.82228C16 3.82228 14.0816 3.90228 12.6939 2.50673Z" fill="white" />
		</svg>
	)
}

export default TiktokIcon