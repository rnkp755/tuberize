"use client";
import {
	HeroSection,
	FeaturesSection,
	HowItWorksSection,
	TestimonialsSection,
	PricingSection,
	CTASection,
} from "@/components/index.js";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<FeaturesSection />
			<HowItWorksSection />
			<TestimonialsSection />
			<PricingSection />
			<CTASection />
		</main>
	);
}
