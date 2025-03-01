"use client";

import { motion } from "framer-motion";
import { Button, AnimatedGradient } from "../index.js";
import Link from "next/link";

const HeroSection = () => {
	return (
		<section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden cursor-default">
			<AnimatedGradient className="absolute inset-0 z-0">
				{/* We need this empty div to satisfy the children prop */}
				<div></div>
			</AnimatedGradient>

			<div className="container mx-auto px-4 md:px-6 relative z-10">
				<div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
							Build Your{" "}
							<span className="text-gradient">
								Creator Portfolio
							</span>{" "}
							in Minutes
						</h1>

						<p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Transform your social media content
							into a stunning portfolio website with
							our AI-powered platform. No coding
							required.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								variant="outline"
								className="px-8 text-base"
								disabled
							>
								See Examples
							</Button>
							<Button
								asChild
								size="lg"
								className="px-8 text-base"
							>
								<Link href="#login">
									Get Started
								</Link>
							</Button>
						</div>
					</motion.div>
				</div>

				<div className="mt-20 text-center">
					<p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
						Trusted by content creators from
					</p>
					<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
						{[
							"YouTube",
							"Spotify",
							"Instagram",
							"x",
							"Facebook",
						].map((platform) => (
							<motion.div
								key={platform}
								className="text-lg md:text-xl font-medium"
								initial={{ opacity: 0 }}
								animate={{
									opacity: `${
										platform ===
										"YouTube"
											? 1
											: 0.25
									}`,
								}}
								transition={{
									duration: 0.5,
									delay: 0.5,
								}}
							>
								{platform}
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
