import React, { FC, MouseEvent, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Backdrop from '@/ui/components/atoms/backdrop';

const dropIn = {
	hidden: {
		y: '-100vh',
		opacity: 0,
	},
	visible: {
		y: '0',
		opacity: 1,
		transition: {
			duration: 0.1,
			type: 'spring' as const,
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: '100vh',
		opacity: 0,
	},
};

interface ModalProps {
	handleClose: () => void;
	children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ handleClose, children }) => {
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				onClick={(e: MouseEvent) => e.stopPropagation()}
				className="modal"
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				{children}
				{/* <button onClick={handleClose}>Close</button> */}
			</motion.div>
		</Backdrop>
	);
};

export default Modal;
