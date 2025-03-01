"use client";

import { handleSignOut } from "@/actions/authActions";
import { Button } from "..";

export default function SignOut() {
	return (
		<form action={() => handleSignOut()}>
			<Button type="submit">Sign Out</Button>
		</form>
	);
}
