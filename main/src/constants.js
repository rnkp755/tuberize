import {
	Users,
	Zap,
	PenSquare,
	Layout,
	Code,
	Globe,
	Palette,
	Edit,
	Monitor,
	Upload,
	Cpu,
	Sliders,
} from "lucide-react";
const App = {
	name: "Tuberize",
	features: [
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
	],
	steps: [
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
	],
	testimonials: [
		{
			quote: "Tuberize transformed my online presence. I now have a professional portfolio that perfectly showcases my YouTube content.",
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
	],
};
export default App;
