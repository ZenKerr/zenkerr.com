<script lang="ts">
	import { type DocumentData, SECTION, TEXT } from '$lib/components/layout/terms-of-service/types';
	import { initNumberCounter } from '$lib/components/layout/terms-of-service/number-counter';
	import Section from '$lib/components/layout/terms-of-service/Section.svelte';
	import Text from '$lib/components/layout/terms-of-service/Text.svelte';

	interface Props {
		data: DocumentData;
	}

	const { data }: Props = $props();

	initNumberCounter();
</script>

<article id="document">
	<h1>{data.title}</h1>
	<p>{data.subtitle}</p>
	{#each data.children as child, i (i)}
		{#if child.type === SECTION}
			<Section data={child} />
		{:else if child.type === TEXT}
			<Text data={child} />
		{/if}
	{/each}
</article>

<style>
	#document {
		h1 {
			color: var(--black);
			font-size: var(--large-font-size);
			font-family: var(--title-font), sans-serif;
		}

		p {
			margin-bottom: var(--default-space);
			color: var(--black);
			font-size: var(--medium-font-size);
			font-family: var(--title-font), sans-serif;
		}
	}
</style>
