"use client";
import React, { useState } from "react";
import { AnimatedSection, Button } from "../index";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Plus, X, CheckCircle2, Info } from "lucide-react";
import { channelDetailsFormdata, SocialLink } from "@/types";

// Social platform options
const SOCIAL_PLATFORMS = [
	"Instagram",
	"Facebook",
	"Twitter",
	"LinkedIn",
	"TikTok",
	"Spotify",
	"Twitch",
	"GitHub",
	"Discord",
];

const ChannelDetailForm = ({
	handleChannelDetailsForm,
}: {
	handleChannelDetailsForm: (data: channelDetailsFormdata) => void;
}) => {
	const [username, setUsername] = useState("");
	const [blogs, setBlogs] = useState(false);
	const [displayName, setDisplayName] = useState("");
	const [displayPicture, setDisplayPicture] = useState<File | null>(null);
	const [displayPicturePreview, setDisplayPicturePreview] = useState<
		string | null
	>(null);
	const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	// Handle YouTube username changes
	const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Remove any extra spaces, @ symbols, or slashes
		const rawValue = e.target.value;
		const cleanValue = rawValue
			.trim()
			.replace(/^@+/, "") // Remove @ from beginning
			.replace(/\/+$/, ""); // Remove trailing slashes

		setUsername(cleanValue);
	};

	// Handle display picture upload
	const handleDisplayPictureChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];

			// Check if file is an image
			if (!file.type.startsWith("image/")) {
				setError("Please upload an image file");
				return;
			}

			setDisplayPicture(file);

			// Create a preview URL
			const reader = new FileReader();
			reader.onload = (event) => {
				if (event.target?.result) {
					setDisplayPicturePreview(
						event.target.result as string
					);
				}
			};
			reader.readAsDataURL(file);

			setError(null);
		}
	};

	// Add new social link
	const addSocialLink = () => {
		const usedPlatforms = socialLinks.map((link) => link.platform);
		const availablePlatforms = SOCIAL_PLATFORMS.filter(
			(platform) => !usedPlatforms.includes(platform)
		);

		if (availablePlatforms.length === 0) {
			setError("You've added all available social platforms");
			return;
		}

		setSocialLinks([
			...socialLinks,
			{
				platform: availablePlatforms[0],
				url: "",
				id: crypto.randomUUID(),
			},
		]);

		setError(null);
	};

	// Update social link
	const updateSocialLink = (
		id: string,
		field: keyof SocialLink,
		value: string
	) => {
		setSocialLinks(
			socialLinks.map((link) =>
				link.id === id ? { ...link, [field]: value } : link
			)
		);
	};

	// Remove social link
	const removeSocialLink = (id: string) => {
		setSocialLinks(socialLinks.filter((link) => link.id !== id));
	};

	// Handle form submission
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setIsSubmitting(true);

		// Basic validation
		if (!username) {
			setError("YouTube username is required");
			setIsSubmitting(false);
			return;
		}

		// Prepare form data
		const data = {
			username,
			blogs,
			displayName, // Default to username if display name is empty
			displayPicture,
			socialLinks,
		};

		await handleChannelDetailsForm(data);

		console.log("Form submitted with data:", data);

		setIsSubmitting(false);
	};

	return (
		<AnimatedSection>
			<div className="w-full max-w-xl mx-auto p-6 bg-primary/10 rounded-lg shadow-lg border border-primary/40">
				<h2 className="text-2xl font-bold mb-6 text-center">
					Create Your Portfolio
				</h2>

				{showSuccess ? (
					<motion.div
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						className="text-center py-8"
					>
						<CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
						<h3 className="text-xl font-medium mb-2">
							Submission Successful!
						</h3>
						<p className="text-muted-foreground">
							We're preparing your portfolio now.
						</p>
					</motion.div>
				) : (
					<form onSubmit={handleSubmit}>
						{/* YouTube Channel Input */}
						<div className="mb-6">
							<label className="block text-sm font-medium mb-2">
								YouTube Channel
							</label>
							<div className="flex rounded-md overflow-hidden border border-input focus-within:ring-1 focus-within:ring-ring">
								<div className="bg-background/30 px-3 py-2 text-sm text-muted-foreground whitespace-nowrap cursor-default">
									https://www.youtube.com/@
								</div>
								<input
									type="text"
									value={username}
									onChange={
										handleUsernameChange
									}
									placeholder="YourChannelName"
									className="flex-1 bg-background px-3 py-2 text-sm border-0 focus:outline-none"
								/>
							</div>
							<p className="text-xs text-muted-foreground mt-1">
								Enter only your channel
								username, without any extra
								symbols
							</p>
						</div>

						<label className="inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								value={""}
								className="sr-only peer"
								checked={blogs}
								onChange={() =>
									setBlogs(!blogs)
								}
							/>
							<div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
							<div className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
								Blogs Section
							</div>
						</label>

						{/* Advanced Settings Accordion */}
						<Accordion
							type="single"
							collapsible
							className="mb-6"
						>
							<AccordionItem value="advanced-settings">
								<AccordionTrigger className="py-3">
									<span className="text-sm font-medium">
										Advanced Settings
									</span>
								</AccordionTrigger>
								<AccordionContent>
									<div className="space-y-5 pt-2">
										{/* Display Name */}
										<div>
											<label className="block text-sm font-medium mb-2">
												Display
												Name
											</label>
											<input
												type="text"
												value={
													displayName
												}
												onChange={(
													e
												) =>
													setDisplayName(
														e
															.target
															.value
													)
												}
												placeholder="How you want to be called"
												className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-ring"
											/>
										</div>

										{/* Display Picture */}
										<div>
											<label className="block text-sm font-medium mb-2">
												Profile
												Picture
											</label>
											<div className="flex items-start gap-4">
												<div className="flex-1">
													<label className="flex items-center justify-center w-full h-24 px-4 transition bg-background/30 border border-dashed border-input rounded-lg cursor-pointer hover:bg-background/50">
														<input
															type="file"
															accept="image/*"
															className="hidden"
															onChange={
																handleDisplayPictureChange
															}
														/>
														<div className="flex flex-col items-center justify-center text-center">
															<span className="text-xs font-medium text-muted-foreground">
																Click
																to
																upload
																or
																drag
																and
																drop
															</span>
															<span className="text-xs text-muted-foreground mt-1">
																PNG,
																JPG
																up
																to
																5MB
															</span>
														</div>
													</label>
												</div>

												{displayPicturePreview && (
													<div className="relative w-20 h-20 rounded-md overflow-hidden border border-input">
														<img
															src={
																displayPicturePreview
															}
															alt="Preview"
															className="w-full h-full object-cover"
														/>
														<button
															type="button"
															onClick={() => {
																setDisplayPicture(
																	null
																);
																setDisplayPicturePreview(
																	null
																);
															}}
															className="absolute top-0 right-0 bg-black/60 p-1 rounded-bl-md"
														>
															<X className="w-3 h-3" />
														</button>
													</div>
												)}
											</div>
										</div>

										{/* Social Links */}
										<div>
											<div className="flex items-center justify-between mb-2">
												<label className="block text-sm font-medium">
													Social
													Links
												</label>
												<Button
													type="button"
													variant="outline"
													size="sm"
													onClick={
														addSocialLink
													}
													className="h-7 px-2 text-xs"
												>
													<Plus className="w-3 h-3 mr-1" />
													Add
													Link
												</Button>
											</div>

											<div className="space-y-3">
												{socialLinks.map(
													(
														link
													) => (
														<div
															key={
																link.id
															}
															className="flex items-center gap-2"
														>
															<select
																value={
																	link.platform
																}
																onChange={(
																	e
																) =>
																	updateSocialLink(
																		link.id,
																		"platform",
																		e
																			.target
																			.value
																	)
																}
																className="px-3 py-1.5 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-ring w-1/3"
															>
																{SOCIAL_PLATFORMS.filter(
																	(
																		platform
																	) =>
																		platform ===
																			link.platform ||
																		!socialLinks.some(
																			(
																				l
																			) =>
																				l.platform ===
																				platform
																		)
																).map(
																	(
																		platform
																	) => (
																		<option
																			key={
																				platform
																			}
																			value={
																				platform
																			}
																		>
																			{
																				platform
																			}
																		</option>
																	)
																)}
															</select>

															<input
																type="url"
																value={
																	link.url
																}
																onChange={(
																	e
																) =>
																	updateSocialLink(
																		link.id,
																		"url",
																		e
																			.target
																			.value
																	)
																}
																placeholder={`${link.platform} URL`}
																className="flex-1 px-3 py-1.5 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-ring"
															/>

															<Button
																type="button"
																variant="ghost"
																size="sm"
																onClick={() =>
																	removeSocialLink(
																		link.id
																	)
																}
																className="h-8 w-8 p-0"
															>
																<X className="w-4 h-4" />
															</Button>
														</div>
													)
												)}

												{socialLinks.length ===
													0 && (
													<p className="text-xs text-muted-foreground py-2">
														No
														social
														links
														added
														yet.
														Click
														"Add
														Link"
														to
														get
														started.
													</p>
												)}
											</div>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>

						{/* Error Message */}
						{error && (
							<div className="mb-6 p-3 bg-destructive/10 border border-destructive/30 rounded-md">
								<p className="text-sm text-destructive">
									{error}
								</p>
							</div>
						)}

						{/* Submit Button */}
						<Button
							type="submit"
							className="w-full"
							size="lg"
							disabled={isSubmitting}
						>
							{isSubmitting ? (
								<motion.div
									className="flex items-center gap-2"
									initial={{ opacity: 0.8 }}
									animate={{ opacity: 1 }}
								>
									<motion.div
										className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
										animate={{
											rotate: 360,
										}}
										transition={{
											repeat: Infinity,
											duration: 1,
											ease: "linear",
										}}
									/>
									Processing...
								</motion.div>
							) : (
								"Create My Portfolio"
							)}
						</Button>
					</form>
				)}
			</div>
		</AnimatedSection>
	);
};

export default ChannelDetailForm;
