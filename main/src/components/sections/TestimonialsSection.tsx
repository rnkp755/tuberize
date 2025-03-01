"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../index.js";
import App from "@/constants";

const TestimonialsSection = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	// Function to show the next set of testimonials
	const showNextSlide = () => {
		setActiveSlide(
			(prev) => (prev + 1) % Math.ceil(App.testimonials.length / 3)
		);
	};

	// Start automatic rotation when component mounts
	useEffect(() => {
		intervalRef.current = setInterval(showNextSlide, 5000);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, []);

	// Calculate which testimonials to show based on active slide
	const visibleTestimonials = App.testimonials.slice(
		activeSlide * 3,
		Math.min((activeSlide + 1) * 3, App.testimonials.length)
	);

	// Calculate how many indicator dots we need
	const totalSlides = Math.ceil(App.testimonials.length / 3);

	return (
		<section className="py-20 md:py-32 bg-secondary/30">
			<div className="container mx-auto px-4 md:px-6">
				<AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						What Content Creators{" "}
						<span className="text-gradient">Say</span>
					</h2>
					<p className="text-xl text-muted-foreground">
						Join thousands of satisfied creators who
						have elevated their online presence
					</p>
				</AnimatedSection>

				<div className="relative overflow-hidden">
					<motion.div
						className="grid grid-cols-1 md:grid-cols-3 gap-8"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						key={activeSlide}
					>
						{visibleTestimonials.map(
							(testimonial, index) => (
								<AnimatedSection
									key={index}
									delay={index * 0.1}
									className="bg-background border border-border rounded-xl p-6 hover-card relative"
								>
									<div className="absolute -top-4 -left-4 w-8 h-8 text-4xl text-primary opacity-50">
										"
									</div>
									<p className="mb-6 relative z-10">
										{testimonial.quote}
									</p>
									<div className="flex items-center">
										<div className="w-12 h-12 rounded-full overflow-hidden mr-4">
											<img
												src={
													testimonial.avatar
												}
												alt={
													testimonial.author
												}
												className="w-full h-full object-cover"
											/>
										</div>
										<div>
											<h4 className="font-medium">
												{
													testimonial.author
												}
											</h4>
											<p className="text-sm text-muted-foreground">
												{
													testimonial.role
												}
											</p>
										</div>
									</div>
								</AnimatedSection>
							)
						)}
					</motion.div>

					{/* Carousel indicators */}
					<div className="flex justify-center mt-8 space-x-2">
						{Array.from({ length: totalSlides }).map(
							(_, index) => (
								<button
									key={index}
									onClick={() => {
										setActiveSlide(
											index
										);
										// Reset the interval when manually changing slide
										if (
											intervalRef.current
										) {
											clearInterval(
												intervalRef.current
											);
											intervalRef.current =
												setInterval(
													showNextSlide,
													5000
												);
										}
									}}
									className={`w-3 h-3 rounded-full transition-colors ${
										activeSlide ===
										index
											? "bg-primary"
											: "bg-primary/30"
									}`}
									aria-label={`Go to slide ${
										index + 1
									}`}
								/>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
