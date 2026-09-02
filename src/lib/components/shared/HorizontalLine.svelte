<script lang="ts">
	interface Props {
		id?: string;
		class?: string;
	}

	const { id, class: className }: Props = $props();
</script>

<hr {id} class={['horizontal-line', className]} />

<style>
	.horizontal-line {
		backdrop-filter: invert(1);
		border-radius: var(--default-border-radius);
		height: var(--default-border-width);
	}
</style>
