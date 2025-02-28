import { signIn } from "@/auth";

export default function SignIn() {
	return (
		<div className="flex flex-col gap-4">
			<form
				action={async () => {
					"use server";
					await signIn("google", {
						redirectTo: "/details",
					});
				}}
			>
				<button type="submit">Signin with Google</button>
			</form>
			<form
				action={async () => {
					"use server";
					await signIn("github", {
						redirectTo: "/details",
					});
				}}
			>
				<button type="submit">Signin with GitHub</button>
			</form>
			<form
				action={async () => {
					"use server";
					await signIn("spotify", {
						redirectTo: "/details",
					});
				}}
			>
				<button type="submit">Signin with Spotify</button>
			</form>
		</div>
	);
}
