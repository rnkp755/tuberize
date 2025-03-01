import {
	SignInModal,
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
			<SignInModal />
			<HeroSection />
			<FeaturesSection />
			<HowItWorksSection />
			<TestimonialsSection />
			<PricingSection />
			<CTASection />
		</main>
	);
}
