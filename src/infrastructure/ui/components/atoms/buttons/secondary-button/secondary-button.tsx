import Link from "next/link"
import { FC } from "react"

type SecondaryButtonProps = {
	theme: 'dark' | 'light',
	label: string;
	icon?: React.ReactNode;
	className?: string;
	disabled?: boolean;
}

type Button =
	| (SecondaryButtonProps & { type: 'external-link', href: string })
	| (SecondaryButtonProps & { type: 'internal-link', href: string })
	| (SecondaryButtonProps & { type: 'on-click', onClick: () => void })



const SecondaryButton: FC<Button> = (props) => {

	const { theme, type, label, icon, className, disabled = false } = props

	const buttonTheme = {
		dark: `${disabled ? 'text-secondary-button-dark-text-disabled border-secondary-button-dark-border-disabled' : 'text-secondary-button-dark-text hover:text-secondary-button-dark-text-hover active:text-secondary-button-dark-text-active border-secondary-button-dark-border hover:border-secondary-button-dark-border-hover active:border-secondary-button-dark-border-active bg-secondary-button-dark-bg hover:bg-secondary-button-dark-bg-hover active:bg-secondary-button-dark-bg-active'}`,
		light: `${disabled ? 'text-secondary-button-dark-text-disabled border-secondary-button-dark-border-disabled' : 'text-secondary-button-light-text hover:text-secondary-button-light-text-hover active:text-secondary-button-light-text-active border-secondary-button-light-border hover:border-secondary-button-light-border-hover active:border-secondary-button-light-border-active bg-secondary-button-light-bg hover:bg-secondary-button-light-bg-hover active:bg-secondary-button-light-bg-active'}`,
	}

	switch (type) {
		case 'external-link':
			return (
				<a className={`${disabled ? 'pointer-events-none select-none' : ''} ${buttonTheme[theme]} p-4 border-[1px] rounded-lg inline-flex items-center justify-center transition-colors duration-200 ${className}`} href={props.href} rel="noopener noreferrer" target="_blank">
					<span className="leading-[16px] font-semibold inline-block w-full text-left">
						{label}
					</span>
					{
						icon &&
						<div className="shrink-0">
							{icon}
						</div>
					}
				</a>
			)
		case 'internal-link':
			return (
				<Link className={`${disabled ? 'pointer-events-none select-none' : ''} ${buttonTheme[theme]} p-4 border-[1px] rounded-lg inline-flex items-center justify-center transition-colors duration-200 ${className}`} href={props.href}>
					<span className="leading-[16px] font-semibold inline-block w-full text-left">
						{label}
					</span>
					{
						icon &&
						<div className="shrink-0">
							{icon}
						</div>
					}
				</Link>
			)
		case 'on-click':
			return (
				<button onClick={props.onClick} className={`${disabled && 'pointer-events-none select-none'} ${buttonTheme[theme]} p-4 border-[1px] rounded-lg inline-flex items-center justify-center transition-colors duration-200 ${className}`}>
					<span className="leading-[16px] font-semibold inline-block w-full text-left">
						{label}
					</span>
					{
						icon &&
						<div className="shrink-0">
							{icon}
						</div>
					}
				</button>
			)
		default:
			return (
				<button className={`${disabled && 'pointer-events-none select-none'} ${buttonTheme[theme]} p-4 border-[1px] rounded-lg inline-flex items-center justify-center transition-colors duration-200 ${className}`}>
					<span className="leading-[16px] font-semibold inline-block w-full text-left">
						{label}
					</span>
					{
						icon &&
						<div className="shrink-0">
							{icon}
						</div>
					}
				</button>
			)
	}
}

export default SecondaryButton