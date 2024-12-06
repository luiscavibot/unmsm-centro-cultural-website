import React, { FC } from 'react'

interface ArrowBreadcrumbIconProps {
	color?: "light" | "dark";
}

const ArrowBreadcrumbIcon: FC<ArrowBreadcrumbIconProps> = ({ color }) => {

	const fillColor = () => {
		switch (color) {
			case "light":
				return "fill-white";
			case "dark":
				return "fill-dark-blue-2";
			default:
				return "fill-dark-blue-2";
		}
	}

	return (
		<svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={fillColor()} d="M2.98253 7.11054C2.68956 6.81756 2.68967 6.34253 2.98278 6.0497C3.27566 5.75709 3.75024 5.75716 4.04303 6.04985L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L4.04299 17.9599C3.75028 18.2527 3.27567 18.2527 2.98294 17.9599C2.69025 17.6673 2.69023 17.1927 2.98289 16.9L7.17001 12.7121C7.56047 12.3216 7.56044 11.6884 7.16995 11.2979L2.98253 7.11054Z" fill="#29384C" />
		</svg>

	)
}

export default ArrowBreadcrumbIcon