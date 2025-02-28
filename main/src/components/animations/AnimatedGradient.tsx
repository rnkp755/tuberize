"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedGradientProps {
	children?: ReactNode;
	className?: string;
}

const AnimatedGradient = ({
	children,
	className = "",
}: AnimatedGradientProps) => {
	return (
		<motion.div
			className={`relative overflow-hidden ${className}`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<motion.div
				className="absolute -inset-[100%] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
				animate={{
					rotate: [0, 360],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					repeatType: "loop",
					ease: "linear",
				}}
			/>
			{children}
		</motion.div>
	);
};

export default AnimatedGradient;
