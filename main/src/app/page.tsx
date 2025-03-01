"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
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
	const pathname = usePathname();
	const router = useRouter();
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		setIsModalOpen(pathname === "/login");
	}, [pathname]);

	const handleClose = () => {
		setIsModalOpen(false);
		router.push("/");
	};

	return (
		<main>
			{isModalOpen && <SignInModal onClose={handleClose} />}
			<HeroSection />
			<FeaturesSection />
			<HowItWorksSection />
			<TestimonialsSection />
			<PricingSection />
			<CTASection />
		</main>
	);
}
