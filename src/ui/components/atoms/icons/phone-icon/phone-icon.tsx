import React, { FC } from 'react'

interface PhoneIconProps {
	className?: string;
	color?: 'white';
	ariaLabel?: string;
}

const PhoneIcon: FC<PhoneIconProps> = ({ className, color = 'white', ariaLabel }) => {

	const colors = {
		white: 'fill-white'
	}

	return (
		<svg aria-label={ariaLabel} className={className} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={colors[color]} d="M4.41333 7.48191C5.37333 9.36857 6.92 10.9152 8.80667 11.8752L10.2733 10.4086C10.46 10.2219 10.72 10.1686 10.9533 10.2419C11.7 10.4886 12.5 10.6219 13.3333 10.6219C13.5101 10.6219 13.6797 10.6921 13.8047 10.8172C13.9298 10.9422 14 11.1118 14 11.2886V13.6219C14 13.7987 13.9298 13.9683 13.8047 14.0933C13.6797 14.2183 13.5101 14.2886 13.3333 14.2886C10.3275 14.2886 7.44487 13.0945 5.31946 10.9691C3.19404 8.84371 2 5.96103 2 2.95524C2 2.77843 2.07024 2.60886 2.19526 2.48384C2.32029 2.35881 2.48986 2.28857 2.66667 2.28857H5C5.17681 2.28857 5.34638 2.35881 5.4714 2.48384C5.59643 2.60886 5.66667 2.77843 5.66667 2.95524C5.66667 3.78857 5.8 4.58857 6.04667 5.33524C6.12 5.56857 6.06667 5.82857 5.88 6.01524L4.41333 7.48191Z" fill="white" />
		</svg>
	)
}

export default PhoneIcon