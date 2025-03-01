"use client";
import { useRouter } from "next/navigation";
import { SignInModal } from "@/components/index.js";

export default function LoginPage() {
	const router = useRouter();

	return <SignInModal />;
}
