"use client";

import { motion } from "framer-motion";
import { Button, AnimatedGradient } from "../index.js";

const CTASection = () => {
	return (
		<section className="py-24 md:py-32 relative overflow-hidden">
			<AnimatedGradient className="absolute inset-0">
				{/* We need this empty div to satisfy the children prop */}
				<div></div>
			</AnimatedGradient>

			<div className="container mx-auto px-4 md:px-6 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-3xl md:text-5xl font-bold mb-6">
							Ready to Create Your{" "}
							<span className="text-gradient">
								YouTube Portfolio?
							</span>
						</h2>

						<p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
							Join thousands of content creators who
							have transformed their online presence
							with YoutubeStitch.
						</p>

						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
							className="inline-block"
						>
							<Button
								size="lg"
								className="px-10 py-6 text-lg"
							>
								Get Started — It's Free
							</Button>
						</motion.div>

						<p className="text-sm text-muted-foreground mt-4">
							No credit card required • 14-day free
							trial • Cancel anytime
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
