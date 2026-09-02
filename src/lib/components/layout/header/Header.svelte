<script lang="ts">
	import Navigation from '$lib/components/layout/header/Navigation.svelte';
	import LanguageSelector from '$lib/components/shared/LanguageSelector.svelte';
</script>

<header id="header">
	<Navigation />
	<LanguageSelector />
</header>

<style>
	#header {
		display: flex;
		position: sticky;
		top: 0;
		justify-content: space-between;
		z-index: 67;
		border-bottom: solid var(--default-border-width) var(--black);
		background-color: var(--black);

		@media (max-aspect-ratio: 1 / 1) {
			flex-direction: row-reverse;
		}
	}
</style>
