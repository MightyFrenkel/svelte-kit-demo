<script lang="ts">
	import Header from '$lib/NavBar.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<!-- This is where the nested pages are rendered -->
	<slot />
</main>
