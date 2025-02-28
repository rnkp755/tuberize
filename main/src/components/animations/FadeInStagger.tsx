"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInStaggerProps {
	children: ReactNode;
	className?: string;
	delayIncrement?: number;
	staggerChildren?: number;
}

const FadeInStagger = ({
	children,
	className = "",
	delayIncrement = 0.1,
	staggerChildren = 0.1,
}: FadeInStaggerProps) => {
	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={{
				visible: {
					transition: {
						staggerChildren,
						delayChildren: delayIncrement,
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
};

export const FadeInStaggerItem = ({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<motion.div
			className={className}
			variants={{
				hidden: { opacity: 0, y: 20 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: 0.5 },
				},
			}}
		>
			{children}
		</motion.div>
	);
};

export default FadeInStagger;
