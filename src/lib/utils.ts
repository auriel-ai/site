import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const WORDS_PER_MINUTE = 225; // Average adult reading speed

export function calculateReadingTime(content: string): string {
	const words = content.trim().split(/\s+/).length;
	const minutes = Math.ceil(words / WORDS_PER_MINUTE);
	return `${minutes} min read`;
}
