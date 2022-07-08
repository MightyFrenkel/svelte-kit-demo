<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/jokes'}>
				<a sveltekit:prefetch href="/jokes">Jokes</a>
			</li>
		</ul>
	</nav>
</header>

<style>
</style>
