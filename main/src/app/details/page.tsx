import { auth } from "@/auth";
import { SignOut } from "@/components/index.js";

export default async function Details() {
	const session = await auth();
	if (!session) return <div>Not authenticated</div>;

	return (
		<div className="pt-24 px-24">
			<SignOut />
			{/* <UserAvatar /> */}
			<p>{JSON.stringify(session, null, 2)}</p>
		</div>
	);
}
