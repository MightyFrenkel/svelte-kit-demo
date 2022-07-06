import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const response = await fetch('http://localhost:3000/jokes/new', {
		method: 'get',
		headers: {
			'content-type': 'application/json'
		}
	});
	const json = await response.json();

	return {
		body: {
			// index.svelte can access this data
			jokes: ['Server sided joke: ' + json.joke]
		}
	};
};
