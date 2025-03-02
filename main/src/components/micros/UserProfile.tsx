"use client";

import { useState, useRef, useEffect } from "react";
import { handleSignOut } from "@/actions/authActions";
import { UsersFromAuthJS } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

export default function UserProfile({ user }: { user: UsersFromAuthJS }) {
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setDropdownOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleToggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};

	return (
		<div className="relative inline-block" ref={dropdownRef}>
			<div
				className="rounded-full overflow-hidden w-8 h-8 bg-blue-500 cursor-pointer hover:scale-105 transition-transform"
				onClick={handleToggleDropdown}
			>
				{user.image ? (
					<img
						src={user.image || ""}
						alt="User Avatar"
						className="w-full h-full object-cover"
					/>
				) : (
					<div className="flex items-center justify-center h-full text-white">
						{user.email![0].toUpperCase()}
					</div>
				)}
			</div>

			<AnimatePresence>
				{isDropdownOpen && (
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{
							type: "spring",
							bounce: 0.2,
						}}
						className="absolute right-0 mt-2 w-48 bg-primary/20 border border-primary/40 rounded shadow-lg z-10"
					>
						<div className="p-2 cursor-default">
							<p className="font-semibold">
								{user.name}
							</p>
							<p className="text-sm text-muted-foreground">
								{user.email}
							</p>
						</div>
						<div className="border-t text-muted-background"></div>
						<button
							onClick={handleSignOut}
							className="w-full text-left p-2 text-red-600 hover:bg-primary/20 font-bold"
						>
							Sign Out
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
