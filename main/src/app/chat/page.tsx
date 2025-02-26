import { auth } from "@/auth";
import { SignOut } from "@/components/signout-button";

export default async function Page() {
	const session = await auth();
	if (!session) return <div>Not authenticated</div>;

	return (
		<div>
			<SignOut />
			<p>{JSON.stringify(session, null, 2)}</p>
		</div>
	);
}

// export default function Page() {
// 	return <div>Chat page</div>;
// }
