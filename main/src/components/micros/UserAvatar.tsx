import { auth } from "@/auth";

export default async function UserAvatar() {
	const session = await auth();

	if (!session?.user) return null;

	console.log(session.user);

	return (
		<div className="rounded-full overflow-hidden w-8 h-8 bg-blue-500">
			{session.user.image ? (
				<img src={session.user.image || ""} alt="User Avatar" />
			) : (
				<div className="flex items-center justify-center h-full text-white">
					{session.user.email![0].toUpperCase()}
				</div>
			)}
		</div>
	);
}
