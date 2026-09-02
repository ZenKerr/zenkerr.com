<script lang="ts">
	import Text from '$lib/components/layout/terms-of-service/Text.svelte';
	import type { ListData } from '$lib/components/layout/terms-of-service/types';
	import { getNumberCounter } from '$lib/components/layout/terms-of-service/number-counter';
	import BlockWithPrefix from '$lib/components/layout/terms-of-service/BlockWithPrefix.svelte';

	interface Props {
		data: ListData;
	}

	const { data }: Props = $props();

	const prefix = getNumberCounter().nextPoint();
</script>

<div class="list">
	<BlockWithPrefix {prefix} type="text">
		<Text data={{ text: data.text, prefix: null }} />
		<ul>
			{#each data.children as child, i (i)}
				<li>
					<Text data={{ text: child, prefix: '•' }} />
				</li>
			{/each}
		</ul>
	</BlockWithPrefix>
</div>

<style>
	.list {
		display: flex;
		gap: var(--x-small-space);
	}
</style>
