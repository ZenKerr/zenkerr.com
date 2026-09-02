<script lang="ts">
	import { resolve } from '$app/paths';
	import { INTERNAL, type ListItems } from '$lib/components/shared/list/types';
	import type { Component } from 'svelte';

	interface Props {
		title: string;
		items: ListItems;
		id?: string;
		class?: string;
		selectable?: boolean;
	}

	const { title, items, id, class: className, selectable }: Props = $props();
</script>

{#snippet content(text: string, Icon?: Component)}
	<Icon class="list-icon" />
	{text}
{/snippet}

<div {id} class={['list', className, selectable && 'selectable']}>
	<h5>{title}</h5>
	<ul>
		{#each items as { text, icon, target }, i (i)}
			<li>
				{#if target === undefined}
					<span>{@render content(text, icon)}</span>
				{:else if target.type === INTERNAL}
					<a href={resolve(target.href)}>
						{@render content(text, icon)}
					</a>
				{:else}
					<a href={target.href} target="_blank" rel="external">
						{@render content(text, icon)}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style>
	.list {
		&.selectable {
			span,
			a {
				user-select: text;

				&::selection {
					background-color: var(--black);
					color: var(--white);
				}
			}
		}

		h5 {
			color: var(--black);
			font-size: var(--medium-font-size);
			font-family: var(--title-font), sans-serif;
			white-space: nowrap;
		}

		ul {
			li {
				span,
				a {
					display: flex;
					align-items: center;
					gap: var(--x-small-space);
					transition: var(--default-transition) linear;
					margin-top: var(--small-space);
					width: fit-content;
					color: var(--black);
					font-size: var(--default-font-size);
					font-family: var(--text-font), sans-serif;

					&:not(span):focus-visible {
						background-color: var(--red);
						color: var(--white);

						:global(.list-icon) {
							color: var(--white);
						}
					}

					@media (hover: hover) {
						&:not(span):hover {
							background-color: var(--red);
							color: var(--white);

							:global(.list-icon) {
								color: var(--white);
							}
						}
					}

					:global(.list-icon) {
						display: block;
						transition: var(--default-transition) linear;
						width: var(--small-size);
						height: var(--small-size);
						color: var(--black);
					}
				}
			}
		}
	}
</style>
