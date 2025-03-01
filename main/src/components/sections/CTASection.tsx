"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "../index.js";
import Link from "next/link";

const CTASection = () => {
	return (
		<section className="mt-8 pb-24 md:pb-32 relative overflow-hidden">
			<AnimatedSection delay={0.3} className="mt-16 text-center">
				<div className="bg-primary/10 border border-primary/40 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Ready to Build Your{" "}
						<span className="text-gradient">
							Creator Portfolio?
						</span>
					</h2>
					<p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
						Join the creators who are taking their
						online presence to the next level
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
						className="px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all"
					>
						<Link href={"#login"}>
							Get Started for Free
						</Link>
					</motion.button>
				</div>
			</AnimatedSection>
		</section>
	);
};

export default CTASection;
