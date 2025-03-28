import React, { FC } from 'react'
import { motion } from 'framer-motion';

interface BackdropProps {
	children: React.ReactNode;
	onClick: () => void;
}

const Backdrop: FC<BackdropProps> = ({ children, onClick }) => {
	return (
		<motion.div
		  onClick={onClick}
		  className="backdrop"
		  initial={{ opacity: 0 }}
		  animate={{ opacity: 1 }}
		  exit={{ opacity: 0 }}
		>
		  {children}
		</motion.div>
	  );
}

export default Backdrop