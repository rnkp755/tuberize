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
	onClose: () => void;
}

export interface SocialLink {
	platform: string;
	url: string;
	id: string;
}

export interface channelDetailsFormdata {
	username: string;
	blogs: boolean;
	displayName?: string;
	displayPicture?: File | null;
	socialLinks?: SocialLink[];
}

export interface ChannelDetailsFromAPI {
	id: string;
	title: string;
	description: string;
	country: string;
	statistics: {
		viewCount: Number;
		subscriberCount: Number;
		hiddenSubscriberCount: boolean;
		videoCount: Number;
	};
	topics: string[];
	keywords: string;
}
