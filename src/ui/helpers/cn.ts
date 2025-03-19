import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases dinámicas usando clsx y optimiza con tailwind-merge.
 * @param classes - Lista de clases.
 * @returns Clases optimizadas como cadena.
 */
export function cn(...classes: ClassValue[]): string {
	return twMerge(clsx(...classes));
}