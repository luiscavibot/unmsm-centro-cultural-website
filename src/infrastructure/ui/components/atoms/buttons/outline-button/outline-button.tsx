import Link from "next/link"
import { FC } from "react"

type OutlineButtonProps = {
	theme: 'dark' | 'light',
	label: string;
	className?: string;
}

type Button =
	| (OutlineButtonProps & { type: 'external-link', href: string })
	| (OutlineButtonProps & { type: 'internal-link', href: string })
	| (OutlineButtonProps & { type: 'on-click', onClick: () => void })



const OutlineButton: FC<Button> = (props) => {

	const { theme, type, label, className } = props

	const buttonTheme = {
		dark: 'border-black-custom text-black-custom',
		light: 'border-white text-white hover:bg-light-bg-button-color hover:text-light-text-button-color',
	}

	switch (type) {
		case 'external-link':
			return (
				<a className={`p-4 border-[1px] ${buttonTheme[theme]} rounded-lg inline-flex items-center transition-colors duration-200 ${className}`} href={props.href}>
					<span className="leading-[16px] font-semibold inline-block">{label}</span>
				</a>
			)
		case 'internal-link':
			return (
				<Link className={`p-4 border-[1px] ${buttonTheme[theme]} rounded-lg inline-flex items-center transition-colors duration-200 ${className}`} href={props.href}>
					<span className="leading-[16px] font-semibold inline-block">{label}</span>
				</Link>
			)
		case 'on-click':
			return (
				<button onClick={props.onClick} className={`p-4 border-[1px] ${buttonTheme[theme]} rounded-lg inline-flex items-center transition-colors duration-200 ${className}`}>
					<span className="leading-[16px] font-semibold inline-block">{label}</span>
				</button>
			)
		default:
			return (
				<button className={`p-4 border-[1px] ${buttonTheme[theme]} rounded-lg inline-flex items-center transition-colors duration-200 ${className}`}>
					<span className="leading-[16px] font-semibold inline-block">{label}</span>
				</button>
			)
	}
}

export default OutlineButton