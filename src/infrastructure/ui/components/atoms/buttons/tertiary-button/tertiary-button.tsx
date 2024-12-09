import Link from "next/link"
import { FC } from "react"

type TertiaryButtonProps = {
	theme: 'dark' | 'light',
	label: string;
	className?: string;
	disabled?: boolean;
}

type Button =
	| (TertiaryButtonProps & { type: 'external-link', href: string })
	| (TertiaryButtonProps & { type: 'internal-link', href: string })
	| (TertiaryButtonProps & { type: 'on-click', onClick: () => void })



const TertiaryButton: FC<Button> = (props) => {

	const { theme, type, label, className, disabled = false } = props

	const buttonTheme = {
		dark: `${disabled ? 'text-tertiary-button-dark-text-disabled border-tertiary-button-dark-border-disabled' : 'text-tertiary-button-dark-text hover:text-tertiary-button-dark-text-hover active:text-tertiary-button-dark-text-active border-tertiary-button-dark-border hover:border-tertiary-button-dark-border-hover active:border-tertiary-button-dark-border-active bg-tertiary-button-dark-bg hover:bg-tertiary-button-dark-bg-hover active:bg-tertiary-button-dark-bg-active'}`,
		light: `${disabled ? 'text-tertiary-button-dark-text-disabled border-tertiary-button-dark-border-disabled' : 'text-tertiary-button-light-text hover:text-tertiary-button-light-text-hover active:text-tertiary-button-light-text-active border-tertiary-button-light-border hover:border-tertiary-button-light-border-hover active:border-tertiary-button-light-border-active bg-tertiary-button-light-bg hover:bg-tertiary-button-light-bg-hover active:bg-tertiary-button-light-bg-active'}`,
	}

	switch (type) {
		case 'external-link':
			return (
				<a className={`${disabled ? 'pointer-events-none select-none' : ''} ${buttonTheme[theme]} p-4 border-[1px] rounded-lg inline-flex items-center transition-colors duration-200 ${className}`} href={props.href}>
					<span className="leading-[16px] font-semibold inline-block">{label}</span>
				</a>
			)
		case 'internal-link':
			return (
				<Link className={`${disabled ? 'pointer-events-none select-none' : ''} ${buttonTheme[theme]} p-4 border-[1px] rounded-lg inline-flex items-center transition-colors duration-200 ${className}`} href={props.href}>
					<span className="leading-[16px] font-semibold inline-block">{label}</span>
				</Link>
			)
		case 'on-click':
			return (
				<button onClick={props.onClick} className={`${disabled && 'pointer-events-none select-none'} ${buttonTheme[theme]} p-4 border-[1px] rounded-lg inline-flex items-center transition-colors duration-200 ${className}`}>
					<span className="leading-[16px] font-semibold inline-block">{label}</span>
				</button>
			)
		default:
			return (
				<button className={`${disabled && 'pointer-events-none select-none'} ${buttonTheme[theme]} p-4 border-[1px] rounded-lg inline-flex items-center transition-colors duration-200 ${className}`}>
					<span className="leading-[16px] font-semibold inline-block">{label}</span>
				</button>
			)
	}
}

export default TertiaryButton