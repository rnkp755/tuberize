"use client";

import { useState } from "react";
import { handleSignOut } from "@/actions/authActions";
import { UsersFromAuthJS } from "@/types";

export default async function UserAvatar({ user }: { user: UsersFromAuthJS }) {
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const handleMouseEnter = () => {
		setDropdownOpen(true);
	};

	const handleMouseLeave = () => {
		setDropdownOpen(false);
	};

	return (
		<div
			className="relative inline-block"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className="rounded-full overflow-hidden w-8 h-8 bg-blue-500 cursor-pointer">
				{user.image ? (
					<img
						src={user.image || ""}
						alt="User  Avatar"
						className="w-full h-full object-cover"
					/>
				) : (
					<div className="flex items-center justify-center h-full text-white">
						{user.email![0].toUpperCase()}
					</div>
				)}
			</div>

			{isDropdownOpen && (
				<div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
					<div className="p-2">
						<p className="font-semibold">{user.name}</p>
						<p className="text-sm text-gray-500">
							{user.email}
						</p>
					</div>
					<div className="border-t border-gray-300"></div>
					<button
						onClick={handleSignOut}
						className="w-full text-left p-2 hover:bg-gray-100"
					>
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
}
