<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<img src="/favicon.png" alt="Svelte logo" />
	<h1>Welcome to the SvelteKit demo!</h1>
	<p>
		The source code for this demo can be found on <a
			href="https://github.com/MightyFrenkel/svelte-kit-demo">Github</a
		>
	</p>
	<h2>This demo contains the following features</h2>
	<ul>
		<li>Prefetch pages by hovering over navbar links</li>
		<li>Routing pages</li>
		<li>
			Routing endpoints <a href="http://localhost:3000/jokes/new"
				>http://localhost:3000/jokes/new
			</a>
		</li>
		<li>Loading jokes at <a sveltekit:prefetch href="/jokes">/jokes</a></li>

		<li>
			Server sided rendering on page load, it loads a joke on the server before it is send to the
			client. This way you will even get a joke when javascript is turned off.
		</li>
		<li>Adding new jokes to a list and re-render on the client side</li>
	</ul>
</section>

<style>
</style>
