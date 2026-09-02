<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		id?: string;
		class?: string;
		borderRadius?: boolean[];
	}

	const { children, id, class: className, borderRadius = [false] }: Props = $props();

	const borderRadiusStyle = $derived(
		borderRadius.map((rounded) => (rounded ? 'var(--default-border-radius)' : '0')).join(' '),
	);
</script>

<div {id} class={['block', className]} style="border-radius: {borderRadiusStyle};">
	{@render children()}
</div>

<style>
	.block {
		background-color: var(--white);
	}
</style>
