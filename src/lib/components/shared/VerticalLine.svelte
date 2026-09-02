<script lang="ts">
	interface Props {
		id?: string;
		class?: string;
	}

	const { id, class: className }: Props = $props();
</script>

<hr {id} class={['vertical-line', className]} />

<style>
	.vertical-line {
		backdrop-filter: invert(1);
		border-radius: var(--default-border-radius);
		width: var(--default-border-width);
	}
</style>
