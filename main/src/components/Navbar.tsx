"use client";
import { useState, useEffect } from "react";
import { Button } from "./index";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import App from "@/constants";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-background/80 backdrop-blur-md py-3 shadow-md"
					: "bg-transparent py-5"
			}`}
		>
			<div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
						<span className="text-white font-bold text-xl">
							T
						</span>
					</div>
					<span className="font-bold text-xl">
						{App.name}
					</span>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center gap-8">
					<a
						href="#features"
						className="text-foreground/80 hover:text-foreground transition-colors"
					>
						Features
					</a>
					<a
						href="#how-it-works"
						className="text-foreground/80 hover:text-foreground transition-colors"
					>
						How It Works
					</a>
					<a
						href="#pricing"
						className="text-foreground/80 hover:text-foreground transition-colors"
					>
						Pricing
					</a>
					<Button asChild>
						<Link href="#login">Get Started</Link>
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X /> : <Menu />}
					</Button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border animate-fade-in">
					<div className="container mx-auto px-4 py-4 flex flex-col gap-4">
						<a
							href="#features"
							className="py-2 text-foreground/80 hover:text-foreground transition-colors"
							onClick={() => setIsMenuOpen(false)}
						>
							Features
						</a>
						<a
							href="#how-it-works"
							className="py-2 text-foreground/80 hover:text-foreground transition-colors"
							onClick={() => setIsMenuOpen(false)}
						>
							How It Works
						</a>
						<a
							href="#pricing"
							className="py-2 text-foreground/80 hover:text-foreground transition-colors"
							onClick={() => setIsMenuOpen(false)}
						>
							Pricing
						</a>
						<div className="flex flex-col gap-2 pt-2">
							<Button
								asChild
								className="w-full"
								onClick={() =>
									setIsMenuOpen(false)
								}
							>
								<Link href="#login">
									Get Started
								</Link>
							</Button>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
