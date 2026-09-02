<script lang="ts">
	import VerticalLine from '$lib/components/shared/VerticalLine.svelte';
	import Block from '$lib/components/shared/Block.svelte';
	import ProjectLink from '$lib/components/layout/my-projects/ProjectLink.svelte';
	import HorizontalLine from '$lib/components/shared/HorizontalLine.svelte';
	import type { Link } from '$lib/components/layout/my-projects/types';
	import { isPhoneMediaQuery } from '$lib/utils/helpers';

	interface Props {
		name: string;
		description: string;
		link?: Link;
	}

	const { name, description, link }: Props = $props();

	const isPhone = $derived(isPhoneMediaQuery.current);
</script>

{#snippet projectLink(link?: Link)}
	{#if link !== undefined}
		<ProjectLink href={link.href} text={link.text} />
	{/if}
{/snippet}

<Block class="project" borderRadius={[true]}>
	<div>
		<h4>{name}</h4>
		{#if !isPhone}
			{@render projectLink(link)}
		{/if}
	</div>
	{#if isPhone}
		<HorizontalLine class="project-delimiter" />
	{:else}
		<VerticalLine class="project-delimiter" />
	{/if}
	<div>{description}</div>
	{#if isPhone}
		{@render projectLink(link)}
	{/if}
</Block>

<style>
	:global(.project) {
		@media (min-aspect-ratio: 1 / 1) {
			display: flex;
		}

		@media (max-aspect-ratio: 1 / 1) {
			width: 100%;
		}

		div {
			color: var(--black);

			&:first-child {
				display: flex;
				width: 30vh;

				@media (min-aspect-ratio: 1 / 1) {
					flex-direction: column;
				}

				@media (max-aspect-ratio: 1 / 1) {
					justify-content: space-between;
					align-items: flex-start;
					width: 100%;
				}

				h4 {
					padding: var(--default-space);
					font-size: var(--large-font-size);
					font-family: var(--title-font), sans-serif;
				}
			}

			&:last-of-type {
				margin: var(--default-space);
				font-size: var(--default-font-size);
				font-family: var(--text-font), sans-serif;
				white-space: break-spaces;

				@media (min-aspect-ratio: 1 / 1) {
					width: 35vh;
				}
			}
		}

		:global(.project-delimiter) {
			margin: var(--default-space) 0;

			@media (max-aspect-ratio: 1 / 1) {
				margin: 0 var(--default-space);
			}
		}
	}
</style>
