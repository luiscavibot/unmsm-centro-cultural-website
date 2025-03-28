import Link from "next/link"
import { FC } from "react"

type PrimaryButtonProps = {
	theme: 'dark' | 'light',
	label?: string;
	icon?: React.ReactNode;
	className?: string;
	disabled?: boolean;
}

type Button =
	| (PrimaryButtonProps & { type: 'external-link', href: string })
	| (PrimaryButtonProps & { type: 'internal-link', href: string })
	| (PrimaryButtonProps & { type: 'on-click', onClick: () => void })



const PrimaryButton: FC<Button> = (props) => {

	const { theme, type, label, icon, className, disabled = false } = props

	const buttonTheme = {
		dark: `${disabled ? 'text-primary-button-dark-text-disabled border-primary-button-dark-border-disabled' : 'text-primary-button-dark-text hover:text-primary-button-dark-text-hover active:text-primary-button-dark-text-active border-primary-button-dark-border hover:border-primary-button-dark-border-hover active:border-primary-button-dark-border-active bg-primary-button-dark-bg hover:bg-primary-button-dark-bg-hover active:bg-primary-button-dark-bg-active'}`,
		light: `${disabled ? 'text-primary-button-dark-text-disabled border-primary-button-dark-border-disabled' : 'text-primary-button-light-text hover:text-primary-button-light-text-hover active:text-primary-button-light-text-active border-primary-button-light-border hover:border-primary-button-light-border-hover active:border-primary-button-light-border-active bg-primary-button-light-bg hover:bg-primary-button-light-bg-hover active:bg-primary-button-light-bg-active'}`,
	}

	switch (type) {
		case 'external-link':
			return (
				<a className={`${disabled ? 'pointer-events-none select-none' : ''} ${buttonTheme[theme]} p-4 border-[1px] rounded-lg inline-flex items-center justify-center transition-colors duration-200 ${className}`} href={props.href} rel="noopener noreferrer" target="_blank">
					{
						label &&
						<span className={`leading-[16px] font-semibold inline-block w-full ${icon ? 'text-left' : 'text-center'}`}>{label}</span>
					}
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
					{
						label &&
						<span className={`leading-[16px] font-semibold inline-block w-full ${icon ? 'text-left' : 'text-center'}`}>{label}</span>
					}
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
					{
						label &&
						<span className={`leading-[16px] font-semibold inline-block w-full ${icon ? 'text-left' : 'text-center'}`}>{label}</span>
					}
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
					{
						label &&
						<span className={`leading-[16px] font-semibold inline-block w-full ${icon ? 'text-left' : 'text-center'}`}>{label}</span>
					}
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

export default PrimaryButton