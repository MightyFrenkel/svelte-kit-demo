import type { RequestHandler } from '@sveltejs/kit';

/** Get a new joke */
export const get: RequestHandler = async () => {
	const response = await fetch('https://v2.jokeapi.dev/joke/any?type=single&safe-mode', {
		method: 'get',
		headers: {
			'content-type': 'application/json'
		}
	});
	const json = await response.json();

	return {
		body: {
			joke: json.joke
		}
	};
};
