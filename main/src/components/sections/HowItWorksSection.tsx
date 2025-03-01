"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "../index.js";
import { ArrowRight } from "lucide-react";
import App from "@/constants";

const HowItWorksSection = () => {
	return (
		<section
			id="how-it-works"
			className="py-20 md:py-32 relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>

			<div className="container mx-auto px-4 md:px-6 relative">
				<AnimatedSection className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						How{" "}
						<span className="text-gradient">
							{App.name}
						</span>{" "}
						Works
					</h2>
					<p className="text-xl text-muted-foreground">
						From social media content to stunning
						portfolio in four simple steps
					</p>
				</AnimatedSection>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
					{App.steps.map((step, index) => (
						<AnimatedSection
							key={index}
							delay={index * 0.1}
							className="relative"
						>
							<div className="bg-secondary/40 rounded-xl p-6 md:p-8 h-full border border-border hover:border-primary/50 transition-colors group">
								<div className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-primary/40 hidden md:block">
									{index <
										App.steps.length -
											1 && (
										<ArrowRight
											size={24}
										/>
									)}
								</div>

								<div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 text-primary group-hover:bg-primary/20 transition-colors">
									{step.icon}
								</div>
								<div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-medium text-white">
									{index + 1}
								</div>
								<h3 className="text-xl font-bold mb-3">
									{step.title}
								</h3>
								<p className="text-muted-foreground">
									{step.description}
								</p>
							</div>
						</AnimatedSection>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorksSection;
