"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../index.js";

const testimonials = [
	{
		quote: "YoutubeStitch transformed my online presence. I now have a professional portfolio that perfectly showcases my YouTube content.",
		author: "Alex Rivera",
		role: "Tech Reviewer",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
	},
	{
		quote: "The AI-generated portfolio exceeded my expectations. It captured my brand perfectly and I've received so many compliments from my audience.",
		author: "Jamie Chen",
		role: "Travel Vlogger",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
	},
	{
		quote: "As a gaming content creator, I needed a site that reflected my personality. YoutubeStitch delivered exactly what I needed in minutes.",
		author: "Marcus Johnson",
		role: "Gaming Creator",
		avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
	},
	{
		quote: "The customization options are incredible. I was able to match my YouTube branding perfectly, and now everything feels cohesive.",
		author: "Sophia Williams",
		role: "Fitness Creator",
		avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
	},
	{
		quote: "I've tried other website builders, but none of them understood my content like YoutubeStitch. The AI recommendations were spot on.",
		author: "David Park",
		role: "Educational Content",
		avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
	},
	{
		quote: "My subscribers love how easy it is to explore my content on my new portfolio site. Analytics show they're watching more of my videos too!",
		author: "Priya Sharma",
		role: "Cooking Channel",
		avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
	},
];

const TestimonialsSection = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	// Function to show the next set of testimonials
	const showNextSlide = () => {
		setActiveSlide(
			(prev) => (prev + 1) % Math.ceil(testimonials.length / 3)
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
	const visibleTestimonials = testimonials.slice(
		activeSlide * 3,
		Math.min((activeSlide + 1) * 3, testimonials.length)
	);

	// Calculate how many indicator dots we need
	const totalSlides = Math.ceil(testimonials.length / 3);

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

				<AnimatedSection
					delay={0.3}
					className="mt-16 text-center"
				>
					<div className="bg-primary/10 border border-primary/40 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
						<h3 className="text-xl md:text-2xl font-medium mb-2">
							Ready to showcase your YouTube
							content?
						</h3>
						<p className="text-muted-foreground mb-6">
							Join the creators who are taking their
							online presence to the next level
						</p>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
							className="px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all"
						>
							Get Started for Free
						</motion.button>
					</div>
				</AnimatedSection>
			</div>
		</section>
	);
};

export default TestimonialsSection;
