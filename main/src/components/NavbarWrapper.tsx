import { UsersFromAuthJS } from "@/types";
import { Navbar, UserProfile } from "./index.js";
import { auth } from "@/auth";
import { ReactNode } from "react";

export default async function NavbarWrapper() {
	const session = await auth();
	const user: UsersFromAuthJS | undefined = session?.user
		? {
				name: session.user.name ?? "",
				email: session.user.email ?? "",
				image: session.user.image ?? "",
		  }
		: undefined;

	const userProfile: ReactNode | null = user ? (
		<UserProfile user={user} />
	) : undefined;

	return <Navbar userProfile={userProfile} isLoggedIn={!!session?.user} />;
}
