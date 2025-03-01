import { ReactNode } from "react";

export interface UsersFromAuthJS {
	name?: string;
	email?: string;
	image?: string;
}

export interface NavbarProps {
	userProfile: ReactNode | null;
	isLoggedIn: boolean;
}

export interface SignInModalProps {
	onClose: () => void; // Function type
}
