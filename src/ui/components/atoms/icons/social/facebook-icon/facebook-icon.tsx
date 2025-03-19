import React, { FC } from 'react'

interface FacebookIconProps {
	color?: 'white' | 'black';
}

const FacebookIcon: FC<FacebookIconProps> = ({ color = "white" }) => {

	const fillColor = {
		white: "fill-white",
		black: "fill-black",
	}

	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={fillColor[color]} d="M16 8.02011C16 3.59304 12.416 6.10352e-05 8 6.10352e-05C3.584 6.10352e-05 0 3.59304 0 8.02011C0 11.9018 2.752 15.1339 6.4 15.8798V10.4261H4.8V8.02011H6.4V6.0151C6.4 4.46723 7.656 3.20808 9.2 3.20808H11.2V5.6141H9.6C9.16 5.6141 8.8 5.975 8.8 6.4161V8.02011H11.2V10.4261H8.8V16.0001C12.84 15.5991 16 12.1825 16 8.02011Z" fill="white" />
		</svg>

	)
}

export default FacebookIcon