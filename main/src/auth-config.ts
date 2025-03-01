import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Spotify from "next-auth/providers/spotify";
import type { NextAuthConfig } from "next-auth";

// Notice this is only an object, not a full Auth.js instance
export default {
	providers: [GitHub, Google, Spotify],
	pages: {
		signIn: "/login",
	},
	callbacks: {
		async authorized({ auth, request: { nextUrl } }) {
			const isAuthorized = !!auth?.user;
			const isAuthPage = nextUrl.pathname.startsWith("/sign-in");
			const isPublicPage = ["/"].includes(nextUrl.pathname);
			const isStaticAsset =
				nextUrl.pathname.startsWith("/_next") ||
				nextUrl.pathname.includes("/public/") ||
				nextUrl.pathname.endsWith(".svg") ||
				nextUrl.pathname.endsWith(".ico") ||
				nextUrl.pathname.endsWith(".png") ||
				nextUrl.pathname.endsWith(".jpg") ||
				nextUrl.pathname.endsWith(".jpeg") ||
				nextUrl.pathname.endsWith(".gif") ||
				nextUrl.pathname.endsWith(".webp") ||
				nextUrl.pathname.endsWith(".mp4") ||
				nextUrl.pathname.includes("/images/");
			return (
				isAuthorized ||
				isAuthPage ||
				isPublicPage ||
				isStaticAsset
			);
		},
	},
} satisfies NextAuthConfig;
