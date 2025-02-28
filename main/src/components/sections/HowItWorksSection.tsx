"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "../index.js";
import { Monitor, Upload, Cpu, Sliders, ArrowRight } from "lucide-react";

const steps = [
	{
		icon: <Upload className="w-6 h-6" />,
		title: "Connect Your Channel",
		description:
			"Link your YouTube channel with a single click. We'll securely access your content for analysis.",
	},
	{
		icon: <Cpu className="w-6 h-6" />,
		title: "AI Content Analysis",
		description:
			"Our AI analyzes your videos, style, and branding to create a personalized portfolio design.",
	},
	{
		icon: <Sliders className="w-6 h-6" />,
		title: "Customize Your Site",
		description:
			"Choose sections, layouts, and color schemes that match your personal brand and content style.",
	},
	{
		icon: <Monitor className="w-6 h-6" />,
		title: "Deploy & Share",
		description:
			"Publish your portfolio instantly and start sharing it with your audience and potential partners.",
	},
];

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
							YoutubeStitch
						</span>{" "}
						Works
					</h2>
					<p className="text-xl text-muted-foreground">
						From YouTube to stunning portfolio in four
						simple steps
					</p>
				</AnimatedSection>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
					{steps.map((step, index) => (
						<AnimatedSection
							key={index}
							delay={index * 0.1}
							className="relative"
						>
							<div className="bg-secondary/40 rounded-xl p-6 md:p-8 h-full border border-border hover:border-primary/50 transition-colors group">
								<div className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-primary/40 hidden md:block">
									{index <
										steps.length -
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

				<AnimatedSection
					delay={0.2}
					className="mt-20 md:mt-24 text-center"
				>
					<div className="bg-secondary/50 glass p-8 md:p-12 rounded-2xl max-w-4xl mx-auto border border-border">
						<h3 className="text-2xl md:text-3xl font-bold mb-6">
							Ready to showcase your content?
						</h3>
						<p className="text-xl text-muted-foreground mb-8">
							Join thousands of content creators who
							have elevated their online presence
							with YoutubeStitch.
						</p>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
							className="px-8 py-3 rounded-full bg-primary text-white font-medium text-lg transition-all"
						>
							Get Started Today
						</motion.button>
					</div>
				</AnimatedSection>
			</div>
		</section>
	);
};

export default HowItWorksSection;
