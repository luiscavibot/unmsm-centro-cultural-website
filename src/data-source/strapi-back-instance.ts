const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_BACK_URL;

function buildQueryParams(params: Record<string, any>): string {
	const query = new URLSearchParams();

	Object.entries(params).forEach(([key, value]) => {
		if (value !== undefined && value !== null) {
			query.append(key, value);
		}
	});

	return query.toString() ? `?${query.toString()}` : '';
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

	const defaultHeaders = {
		'Content-Type': 'application/json',
	};

	const config: RequestInit = {
		method,
		headers: {
			...defaultHeaders,
			...headers,
		},
		body: body ? JSON.stringify(body) : undefined,
	};

	const response = await fetch(url, config);

	if (!response.ok) {
		throw new Error(`Error en la solicitud: ${response.statusText}`);
	}

	return response.json() as Promise<T>;
}
