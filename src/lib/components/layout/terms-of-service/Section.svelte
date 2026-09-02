<script lang="ts">
	import { LIST, type SectionData, TEXT } from '$lib/components/layout/terms-of-service/types';
	import BlockWithPrefix from '$lib/components/layout/terms-of-service/BlockWithPrefix.svelte';
	import { getNumberCounter } from '$lib/components/layout/terms-of-service/number-counter';
	import List from '$lib/components/layout/terms-of-service/List.svelte';
	import Text from '$lib/components/layout/terms-of-service/Text.svelte';

	interface Props {
		data: SectionData;
	}

	const { data }: Props = $props();

	const prefix = getNumberCounter().nextSection();
</script>

<div class="section">
	<BlockWithPrefix {prefix} type="title">
		<h2>{data.title}</h2>
		{#each data.children as child, i (i)}
			{#if child.type === LIST}
				<List data={child} />
			{:else if child.type === TEXT}
				<Text data={child} />
			{/if}
		{/each}
	</BlockWithPrefix>
</div>

<style>
	.section {
		margin-top: var(--default-space);

		h2 {
			margin-bottom: var(--small-space);
			font-size: inherit;
		}
	}
</style>
