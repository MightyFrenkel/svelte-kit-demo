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

<section>
	<p>/////////////////////////////////////////////////////////////////////////////////</p>
	<p>This part is static html only</p>
	<p>Jokes by https://jokeapi.dev</p>
	<p>{jokes[0]}</p>
	<p>/////////////////////////////////////////////////////////////////////////////////</p>
	<ul>
		{#each jokes as joke}
			<li>{joke}</li>
		{/each}
	</ul>
	<button on:click={addJoke}> Get new joke!</button>
</section>
