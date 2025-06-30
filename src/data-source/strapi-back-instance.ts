import qs from 'qs';

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_BACK_URL;

function buildQueryParams(params: Record<string, any>): string {
	return qs.stringify(params, {
		addQueryPrefix: true,
		encode: false,
	});
}

export async function strapiFetch<T>(
	endpoint: string,
	options: {
		method?: string;
		params?: Record<string, any>;
		body?: any;
		headers?: Record<string, string>;
	} = {}
): Promise<T> {
	const { method = 'GET', params, body, headers } = options;
	const queryString = params ? buildQueryParams(params) : '';
	const url = `${BASE_URL}${endpoint}${queryString}`;

	const response = await fetch(url, {
		method,
		headers: { 'Content-Type': 'application/json', ...headers },
		body: body ? JSON.stringify(body) : undefined,
	});
	if (!response.ok) {
		throw new Error(`Error en la solicitud: ${response.statusText}`);
	}
	return response.json() as Promise<T>;
}
