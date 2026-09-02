<script lang="ts">
	interface Props {
		text: string;
	}

	const { text }: Props = $props();
</script>

<h2 class="section-title">{text}</h2>

<style>
	.section-title {
		margin-bottom: var(--large-space);
		color: var(--white);
		font-size: var(--x-large-font-size);
		font-family: var(--title-font), sans-serif;
		text-align: center;
	}
</style>
