"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { AnimatedSection, Button } from "../index.js";

const PricingSection = () => {
	const [isAnnual, setIsAnnual] = useState(true);

	const plans = [
		{
			name: "Starter",
			description: "Perfect for getting started",
			price: isAnnual ? 0 : 0,
			features: [
				"Custom portfolio website",
				"Connect your YouTube channel",
				"Basic analytics",
				"Free subdomain",
				"Mobile responsive design",
			],
			highlighted: false,
			cta: "Get Started",
		},
		{
			name: "Pro",
			description: "Most popular for creators",
			price: isAnnual ? 150 : 180,
			features: [
				"Everything in Basic",
				"Blog section with CMS",
				"Contact form integration",
				"Custom domain support",
				"Advanced analytics",
				"Premium templates",
				"Priority support",
			],
			highlighted: true,
			cta: "Get Started",
		},
		{
			name: "Business",
			description: "For professional creators",
			price: isAnnual ? 500 : 600,
			features: [
				"Everything in Pro",
				"Multiple portfolio pages",
				"E-commerce integration",
				"Team management",
				"API access",
				"White-label option",
				"Dedicated support",
			],
			highlighted: false,
			cta: "Get Started",
		},
	];

	return (
		<section id="pricing" className="pt-20 md:pt-32 bg-background">
			<div className="container mx-auto px-4 md:px-6">
				<AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Simple,{" "}
						<span className="text-gradient">
							Transparent
						</span>{" "}
						Pricing
					</h2>
					<p className="text-xl text-muted-foreground mb-8">
						Choose the perfect plan for your content
						creation journey
					</p>

					<div className="flex items-center justify-center">
						<button
							onClick={() => setIsAnnual(true)}
							className={`px-4 py-2 rounded-l-lg transition-colors ${
								isAnnual
									? "bg-primary text-white"
									: "bg-secondary text-muted-foreground"
							}`}
						>
							Annual
							{isAnnual && (
								<span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
									Save 20%
								</span>
							)}
						</button>
						<button
							onClick={() => setIsAnnual(false)}
							className={`px-4 py-2 rounded-r-lg transition-colors ${
								!isAnnual
									? "bg-primary text-white"
									: "bg-secondary text-muted-foreground"
							}`}
						>
							Monthly
						</button>
					</div>
				</AnimatedSection>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{plans.map((plan, index) => (
						<AnimatedSection
							key={index}
							delay={index * 0.1}
							className={`rounded-xl p-8 border flex flex-col h-full ${
								plan.highlighted
									? "bg-primary/10 border-primary relative overflow-hidden"
									: "bg-secondary/50 border-border"
							}`}
						>
							{plan.highlighted && (
								<div className="absolute top-0 right-0">
									<div className="bg-primary text-xs text-white py-1 px-3 rounded-bl-lg">
										Popular
									</div>
								</div>
							)}

							<div>
								<h3 className="text-2xl font-bold mb-2">
									{plan.name}
								</h3>
								<p className="text-muted-foreground mb-6">
									{plan.description}
								</p>

								<div className="mb-6">
									<span className="text-4xl font-bold">
										₹{plan.price}
									</span>
									<span className="text-muted-foreground">
										/month
									</span>
									{isAnnual && (
										<p className="text-sm text-muted-foreground mt-1">
											billed
											annually
										</p>
									)}
								</div>

								<ul className="space-y-3 mb-8">
									{plan.features.map(
										(feature, i) => (
											<li
												key={i}
												className="flex items-start"
											>
												<div
													className={`mt-1 mr-3 ${
														plan.highlighted
															? "text-primary"
															: "text-green-500"
													}`}
												>
													<Check
														size={
															16
														}
													/>
												</div>
												<span>
													{
														feature
													}
												</span>
											</li>
										)
									)}
								</ul>
							</div>

							<div className="mt-auto pt-6">
								<Button
									variant={
										plan.highlighted
											? "default"
											: "outline"
									}
									className={`w-full ${
										plan.highlighted
											? ""
											: "hover:bg-primary hover:text-white"
									}`}
								>
									{plan.cta}
								</Button>
							</div>
						</AnimatedSection>
					))}
				</div>
				{/* <AnimatedSection
					delay={0.3}
					className="mt-12 text-center text-muted-foreground"
				>
					<p>
						All plans include a 14-day free trial. No
						credit card required to start.
					</p>
				</AnimatedSection> */}
			</div>
		</section>
	);
};

export default PricingSection;
