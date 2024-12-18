import React from "react";
import ArrowIcon from "@/infrastructure/ui/components/atoms/icons/arrow-icon";

interface ArrowButtonProps {
	theme?: 'dark' | 'light';
	onClick: () => void;
	direction: "left" | "right";
	disabled?: boolean;
	className?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick, direction, disabled = false, theme = 'dark', className }) => {

	const themeClasses = {
		dark: `bg-dark-arrow-button-color hover:bg-dark-arrow-button-color-hover active:bg-dark-arrow-button-color-pressed disabled:bg-dark-arrow-button-color-disabled`,
		light: `bg-light-arrow-button-color hover:bg-light-arrow-button-color-hover active:bg-light-arrow-button-color-pressed disabled:bg-light-arrow-button-color-disabled`,
	}

	const iconClasses = {
		dark: `fill-dark-arrow-color group-hover:fill-dark-arrow-color-hover group-active:fill-dark-arrow-color-pressed group-disabled:fill-dark-arrow-color-disabled`,
		light: `fill-light-arrow-color group-hover:fill-light-arrow-color-hover group-active:fill-light-arrow-color-pressed group-disabled:fill-light-arrow-color-disabled`,
	}

	const buttonClasses = `group w-10 h-10 rounded grid place-items-center transition-colors duration-200 ${themeClasses[theme]} ${className}`;

	return (
		<button onClick={onClick} disabled={disabled} className={buttonClasses}>
			<ArrowIcon fillColor={iconClasses[theme]} direction={direction} />
		</button>
	);
};

export default ArrowButton;