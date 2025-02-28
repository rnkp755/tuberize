import { AnimatedSection, FadeInStagger, FadeInStaggerItem } from "../index";
import {
	Users,
	Zap,
	PenSquare,
	Layout,
	Code,
	Globe,
	Palette,
	Edit,
} from "lucide-react";

const features = [
	{
		icon: <Layout className="w-6 h-6" />,
		title: "Custom Layouts",
		description:
			"Choose from multiple professionally designed layouts tailored for content creators.",
	},
	{
		icon: <Zap className="w-6 h-6" />,
		title: "AI-Powered",
		description:
			"Our AI analyzes your YouTube content to create a personalized portfolio website.",
	},
	{
		icon: <PenSquare className="w-6 h-6" />,
		title: "Blog Integration",
		description:
			"Add a blog section to share your thoughts and connect with your audience.",
	},
	{
		icon: <Users className="w-6 h-6" />,
		title: "Contact Forms",
		description:
			"Let visitors reach out to you with custom contact forms and inquiry options.",
	},
	{
		icon: <Palette className="w-6 h-6" />,
		title: "Visual Editor",
		description:
			"Fine-tune your website with our intuitive visual editor - no coding needed.",
	},
	{
		icon: <Globe className="w-6 h-6" />,
		title: "Custom Domain",
		description:
			"Connect your own domain or use our free subdomain for your portfolio.",
	},
	{
		icon: <Code className="w-6 h-6" />,
		title: "SEO Optimized",
		description:
			"Get discovered with built-in SEO tools that help your site rank higher.",
	},
	{
		icon: <Edit className="w-6 h-6" />,
		title: "Content Management",
		description:
			"Easily update your content through our simple content management system.",
	},
];

const FeaturesSection = () => {
	return (
		<section id="features" className="py-20 md:py-32 bg-background/50">
			<div className="container mx-auto px-4 md:px-6">
				<AnimatedSection className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Features Designed for{" "}
						<span className="text-gradient">
							Content Creators
						</span>
					</h2>
					<p className="text-xl text-muted-foreground">
						Everything you need to showcase your YouTube
						content and build your personal brand
					</p>
				</AnimatedSection>

				<FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<FadeInStaggerItem key={index}>
							<div className="p-6 rounded-xl bg-secondary/50 border border-border hover-card glass h-full">
								<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
									{feature.icon}
								</div>
								<h3 className="text-xl font-medium mb-2">
									{feature.title}
								</h3>
								<p className="text-muted-foreground">
									{feature.description}
								</p>
							</div>
						</FadeInStaggerItem>
					))}
				</FadeInStagger>
			</div>
		</section>
	);
};

export default FeaturesSection;
