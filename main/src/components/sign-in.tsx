import { signIn } from "@/auth";

export default function SignIn() {
	return (
		<div className="flex flex-col gap-4">
			<form
				action={async () => {
					"use server";
					await signIn("google", { redirectTo: "/chat" });
				}}
			>
				<button type="submit">Signin with Google</button>
			</form>
			<form
				action={async () => {
					"use server";
					await signIn("github", { redirectTo: "/chat" });
				}}
			>
				<button type="submit">Signin with GitHub</button>
			</form>
		</div>
	);
}
