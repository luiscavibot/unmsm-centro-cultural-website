import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_STRAPI_BACK_URL;

export const strapiBackInstance = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
});
