"use client";
import { Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-secondary py-12 border-t border-border">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
								<span className="text-white font-bold text-lg">
									Y
								</span>
							</div>
							<span className="font-bold text-lg">
								YoutubeStitch
							</span>
						</div>
						<p className="text-sm text-muted-foreground">
							Create beautiful portfolio websites
							for your YouTube content in minutes
							with our AI-powered platform.
						</p>
						<div className="flex gap-4">
							<a
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Twitter size={18} />
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Github size={18} />
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Instagram size={18} />
							</a>
						</div>
					</div>

					<div>
						<h3 className="font-medium text-lg mb-4">
							Product
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Features
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Testimonials
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									FAQ
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-medium text-lg mb-4">
							Resources
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Documentation
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Tutorials
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Support
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-medium text-lg mb-4">
							Company
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Careers
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Terms of Service
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
					<p>
						© {new Date().getFullYear()} YoutubeStitch.
						All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
