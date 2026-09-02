<script lang="ts">
	import type { TextData } from '$lib/components/layout/terms-of-service/types';
	import BlockWithPrefix from '$lib/components/layout/terms-of-service/BlockWithPrefix.svelte';
	import { getNumberCounter } from '$lib/components/layout/terms-of-service/number-counter';
	import { untrack } from 'svelte';

	interface Props {
		data: TextData;
	}

	const { data }: Props = $props();

	const prefix = untrack(() =>
		data.prefix === undefined ? getNumberCounter().nextPoint() : data.prefix,
	);
</script>

<div class="text">
	<BlockWithPrefix {prefix} type="text">
		{data.text}
	</BlockWithPrefix>
</div>
