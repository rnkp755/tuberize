"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
	children: ReactNode;
	className?: string;
	delay?: number;
}

const AnimatedSection = ({
	children,
	className = "",
	delay = 0,
}: AnimatedSectionProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6, delay }}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedSection;
