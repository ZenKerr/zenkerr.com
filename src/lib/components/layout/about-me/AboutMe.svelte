<script lang="ts">
	import Name from '$lib/components/layout/about-me/Name.svelte';
	import Username from '$lib/components/layout/about-me/Username.svelte';
	import HorizontalLine from '$lib/components/shared/HorizontalLine.svelte';
	import Experience from '$lib/components/layout/about-me/Experience.svelte';
	import TechStack from '$lib/components/layout/about-me/TechStack.svelte';
</script>

<section id="about-me">
	<Name />
	<HorizontalLine id="about-me-delimiter" />
	<Username />
	<Experience />
	<TechStack />
</section>

<style>
	#about-me {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: var(--x-large-space);

		:global(#about-me-delimiter) {
			margin-bottom: var(--small-space);
			width: var(--half-screen-size);

			@media (max-aspect-ratio: 1 / 1) {
				margin: var(--small-space) 0;
			}
		}
	}
</style>
