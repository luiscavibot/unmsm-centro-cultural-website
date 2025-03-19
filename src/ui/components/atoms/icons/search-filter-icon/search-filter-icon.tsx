import React, { FC } from 'react'

interface SearchFilterIconProps {
	theme?: 'light' | 'dark';
	className?: string;
}

const SearchFilterIcon: FC<SearchFilterIconProps> = ({ theme = 'dark', className }) => {

	const colors = {
		light: 'fill-white',
		dark: 'fill-dark-blue-2'
	}

	return (
		<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="&#240;&#159;&#167;&#177; BDS Icons / &#240;&#159;&#167;&#177; search">
				<path className={colors[theme]} id="Vector" d="M15.9772 14.4716H15.1872L14.9072 14.2016C16.1072 12.8016 16.7272 10.8916 16.3872 8.86157C15.9172 6.08157 13.5972 3.86157 10.7972 3.52157C6.56719 3.00157 3.00719 6.56157 3.52719 10.7916C3.86719 13.5916 6.08719 15.9116 8.86719 16.3816C10.8972 16.7216 12.8072 16.1016 14.2072 14.9016L14.4772 15.1816V15.9716L18.7272 20.2216C19.1372 20.6316 19.8072 20.6316 20.2172 20.2216C20.6272 19.8116 20.6272 19.1416 20.2172 18.7316L15.9772 14.4716ZM9.97719 14.4716C7.48719 14.4716 5.47719 12.4616 5.47719 9.97157C5.47719 7.48157 7.48719 5.47157 9.97719 5.47157C12.4672 5.47157 14.4772 7.48157 14.4772 9.97157C14.4772 12.4616 12.4672 14.4716 9.97719 14.4716Z" fill="#29384C" />
			</g>
		</svg>

	)
}

export default SearchFilterIcon