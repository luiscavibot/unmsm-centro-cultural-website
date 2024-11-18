export function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void {
	let timeout: NodeJS.Timeout;

	return (...args: Parameters<T>) => {
		// Limpiar el timeout anterior si existe
		clearTimeout(timeout);

		// Configurar un nuevo timeout
		timeout = setTimeout(() => {
			fn(...args);
		}, delay);
	};
}