"use client";

import { useRouter } from "next/navigation";
import { handleSignIn } from "@/actions/authActions";
import { X, Github } from "lucide-react";
import { Button } from "../index.js";
import { motion, AnimatePresence } from "framer-motion";

const SignInModal = () => {
	const router = useRouter();

	const handleClose = () => {
		router.push("/");
	};

	return (
		<AnimatePresence>
			{/* Backdrop */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
				onClick={() => handleClose()}
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.95 }}
					transition={{
						type: "spring",
						bounce: 0.2,
					}}
					className="relative w-full max-w-md p-6 rounded-xl bg-background border border-border shadow-2xl"
					onClick={(e) => e.stopPropagation()}
				>
					{/* Close button */}
					<button
						onClick={() => handleClose()}
						className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
						aria-label="Close"
					>
						<X size={20} />
					</button>

					<div className="text-center mb-8">
						<h2 className="text-2xl font-bold mb-2">
							Sign in to Tuberize
						</h2>
						<p className="text-muted-foreground">
							Build your Creator portfolio in
							minutes
						</p>
					</div>

					<div className="flex flex-col gap-3 mb-2">
						{/* Google Auth Button */}
						<form action={() => handleSignIn("google")}>
							<Button
								type="submit"
								variant="outline"
								className="w-full py-6 flex items-center justify-center gap-3"
							>
								<svg
									className="h-5 w-5"
									viewBox="0 0 24 24"
								>
									<path
										d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
										fill="#4285F4"
									/>
									<path
										d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
										fill="#34A853"
									/>
									<path
										d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
										fill="#FBBC05"
									/>
									<path
										d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
										fill="#EA4335"
									/>
								</svg>
								<span className="text-base">
									Continue with Google
								</span>
							</Button>
						</form>

						{/* GitHub Auth Button */}
						<form action={() => handleSignIn("github")}>
							<Button
								type="submit"
								variant="outline"
								className="w-full py-6 flex items-center justify-center gap-3"
							>
								<Github className="h-5 w-5" />
								<span className="text-base">
									Continue with GitHub
								</span>
							</Button>
						</form>

						{/* Spotify Auth Button */}
						<form
							action={() => handleSignIn("spotify")}
						>
							<Button
								type="submit"
								variant="outline"
								className="w-full py-6 flex items-center justify-center gap-3"
							>
								<svg
									className="h-5 w-5"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
										fill="#1ED760"
									/>
									<path
										d="M16.7461 16.8921C16.5678 17.1703 16.2106 17.2464 15.9324 17.0682C13.559 15.5915 10.5343 15.3698 6.79776 16.232C6.47661 16.3096 6.15869 16.1131 6.08098 15.792C6.00327 15.4708 6.19977 15.1529 6.52093 15.0752C10.5686 14.1397 13.9116 14.4036 16.5701 16.0784C16.8483 16.2566 16.9244 16.6139 16.7461 16.8921ZM18.0747 14.0565C17.8526 14.4073 17.4013 14.5046 17.0504 14.2824C14.3026 12.559 10.0468 12.0834 6.66764 13.1762C6.27428 13.2984 5.85693 13.0862 5.73464 12.6929C5.61258 12.2995 5.82472 11.8822 6.21808 11.7598C10.0847 10.5127 14.7783 11.0444 17.8489 13.0321C18.1997 13.2543 18.297 13.7056 18.0747 14.0565ZM18.1866 11.1118C14.9182 9.0826 9.22975 8.88455 6.18775 10.0691C5.72569 10.214 5.2289 9.95178 5.08396 9.48971C4.93902 9.02765 5.20121 8.53086 5.66328 8.38593C9.15812 7.02812 15.4057 7.2604 19.1711 9.60255C19.5886 9.85362 19.7135 10.4047 19.4624 10.8219C19.2115 11.2393 18.6604 11.3643 18.243 11.1132L18.1866 11.1118Z"
										fill="black"
									/>
								</svg>
								<span className="text-base">
									Continue with Spotify
								</span>
							</Button>
						</form>
					</div>

					<div className="text-center mt-6">
						<p className="text-sm text-muted-foreground">
							By continuing, you agree to our{" "}
							<a
								href="#"
								className="text-primary hover:underline"
							>
								Terms of Service
							</a>{" "}
							and{" "}
							<a
								href="#"
								className="text-primary hover:underline"
							>
								Privacy Policy
							</a>
							.
						</p>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default SignInModal;
