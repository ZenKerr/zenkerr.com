<script lang="ts">
	import type { Prefix } from '$lib/components/layout/terms-of-service/types';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		type: 'title' | 'text';
		prefix?: Prefix;
	}

	const { children, type, prefix }: Props = $props();
</script>

<div class={['block-with-prefix', type]}>
	{#if prefix}
		<span>{prefix}</span>
	{/if}
	<div>
		{@render children()}
	</div>
</div>

<style>
	.block-with-prefix {
		display: flex;
		gap: var(--x-small-space);
		color: var(--black);

		&.title {
			font-size: var(--medium-font-size);
			font-family: var(--title-font), sans-serif;
		}

		&.text {
			font-size: var(--default-font-size);
			font-family: var(--text-font), sans-serif;
		}

		span {
			font-variant-numeric: tabular-nums;
			white-space: nowrap;
		}
	}
</style>
