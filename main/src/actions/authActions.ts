"use server";

import { signIn, signOut } from "@/auth";

async function handleSignIn(provider: string) {
	await signIn(provider, { redirectTo: "/details" });
}

async function handleSignOut() {
	await signOut({ redirectTo: "/" });
}

export { handleSignIn, handleSignOut };
