<script lang="ts">
	import type { Component } from 'svelte';
	import Block from '$lib/components/shared/Block.svelte';
	import { localize } from '$lib/utils/localization';

	interface Props {
		icon: Component;
		name: string;
		href: string;
		text: string;
	}

	let isHovered = $state(false);

	const { icon: Icon, name, href, text }: Props = $props();

	const borderRadius = $derived(isHovered ? [false, true, true, false] : [true]);

	const writeTo = {
		ru: 'Написать на',
		en: 'Write to',
	};
</script>

<div class="contact">
	<Block class="contact-block" {borderRadius}>
		<a
			{href}
			target="_blank"
			rel="external"
			aria-label="{localize(writeTo)} {name}"
			onmouseenter={() => (isHovered = true)}
			onmouseleave={() => (isHovered = false)}
			onfocus={(event) => (isHovered = event.currentTarget.matches(':focus-visible'))}
			onblur={() => (isHovered = false)}
		>
			<Icon class="contact-icon" />
		</a>
		<span>{text}</span>
	</Block>
</div>

<style>
	.contact {
		:global(.contact-block) {
			display: flex;
			align-items: center;
			gap: var(--small-space);
			transition: var(--default-transition) linear;
			padding: var(--x-small-space) 0 var(--x-small-space) var(--x-small-space);

			a {
				&:focus-visible {
					:global(.contact-icon) {
						border-radius: 0;
						background-color: var(--red);
					}
				}

				@media (hover: hover) {
					&:hover {
						:global(.contact-icon) {
							border-radius: 0;
							background-color: var(--red);
						}
					}
				}

				:global(.contact-icon) {
					display: block;
					transition: var(--default-transition) linear;
					border-radius: var(--children-border-radius);
					background-color: var(--black);
					padding: var(--small-space);
					width: var(--default-size);
					height: var(--default-size);
					color: var(--white);
				}
			}

			span {
				padding-right: var(--default-space);
				color: var(--black);
				font-size: var(--default-font-size);
				font-family: var(--text-font), sans-serif;
				user-select: text;

				&::selection {
					background-color: var(--black);
					color: var(--white);
				}
			}
		}
	}
</style>
