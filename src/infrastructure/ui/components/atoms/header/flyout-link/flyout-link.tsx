import React, { FC, ReactNode, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface FlyoutLinkProps {
	children: ReactNode;
	href?: string;
	FlyoutContent?: FC;
}

const FlyoutLink: FC<FlyoutLinkProps> = ({ children, href, FlyoutContent }) => {
	const [open, setOpen] = useState(false);

	const showFlyout = FlyoutContent && open;

	return (
		<div
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			className="relative w-fit h-fit"
		>
			{
				href ? (
					<Link href={href} className="text-sm font-semibold relative h-[49px] inline-flex items-center leading-[16.8px] p-4 text-white group">
						{children}
						<span
							style={{
								transform: showFlyout ? "scaleX(1)" : "",
							}}
							className="absolute -bottom-0 left-0 right-0 h-1 origin-left rounded-full bg-white transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"
						/>
					</Link>
				)
					:
					(
						<div className="text-sm font-semibold relative h-[49px] inline-flex items-center leading-[16.8px] p-4 text-white cursor-default group">
							{children}
							<span
								style={{
									transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
								}}
								className="absolute -bottom-0 left-0 right-0 h-1 origin-left rounded-full bg-white transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"
							/>
						</div>
					)
			}
			<AnimatePresence>
				{showFlyout && (
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 15 }}
						style={{ translateX: "-50%" }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="absolute left-1/2 top-[53px] bg-transparent"
					>
						<div className="absolute -top-[4px] left-0 right-0 h-[4px] bg-transparent" />
						{/* <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" /> */}
						<FlyoutContent />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FlyoutLink;