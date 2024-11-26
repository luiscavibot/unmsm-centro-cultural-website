import React from "react";
import ArrowIcon from "@/infrastructure/ui/components/atoms/icons/arrow-icon";

interface ArrowButtonProps {
	onClick: () => void;
	direction: "left" | "right";
	disabled?: boolean;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick, direction, disabled = false }) => {
	const buttonClasses = `w-10 h-10 rounded grid place-items-center transition-colors duration-200 ${disabled ? "bg-dark-arrow-button-color" : "bg-light-arrow-button-color"}`;

	return (
		<button onClick={onClick} disabled={disabled} className={buttonClasses}>
			<ArrowIcon direction={direction} disabled={disabled} />
		</button>
	);
};

export default ArrowButton;