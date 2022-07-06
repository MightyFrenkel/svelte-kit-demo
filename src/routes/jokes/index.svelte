<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	// This gets in first joke on the server
	export let jokes: string[];

	async function addJoke() {
		const response = await fetch('/jokes/new', {
			method: 'get',
			headers: {
				'content-type': 'application/json'
			}
		});
		const json = await response.json();

		// Force to re-render jokes
		jokes = [...jokes, json.joke];
	}
</script>

<div>
	<p>Jokes by https://jokeapi.dev</p>
	<ul>
		{#each jokes as joke}
			<li>{joke}</li>
		{/each}
	</ul>
	<button on:click={addJoke}> Click me!</button>
</div>
