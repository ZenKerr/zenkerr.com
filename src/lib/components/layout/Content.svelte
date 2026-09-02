<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();
</script>

<main id="content">
	{@render children()}
</main>

<style>
	#content {
		padding: 0 var(--default-space);
	}
</style>
