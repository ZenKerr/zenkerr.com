<script lang="ts">
	import { LinkSimpleIcon } from 'phosphor-svelte';
	import Writer from '$lib/components/shared/Writer.svelte';
	import { isPhoneMediaQuery } from '$lib/utils/helpers';

	interface Props {
		href: string;
		text: string;
	}

	let isHovered = $state(false);

	const isPhone = $derived(isPhoneMediaQuery.current);

	const { href, text }: Props = $props();
</script>

<a
	class="project-link"
	{href}
	target="_blank"
	rel="external"
	onmouseenter={() => (isHovered = true)}
	onmouseleave={() => (isHovered = false)}
	onfocus={(event) => (isHovered = event.currentTarget.matches(':focus-visible'))}
	onblur={() => (isHovered = false)}
>
	<LinkSimpleIcon class="project-link-icon" />
	<Writer {text} isShown={isHovered || isPhone} />
</a>

<style>
	.project-link {
		display: flex;
		align-items: center;
		gap: var(--small-space);
		transition: var(--default-transition) linear;
		margin: auto var(--x-small-space) var(--x-small-space) var(--x-small-space);
		border-radius: var(--children-border-radius);
		background-color: var(--black);
		padding: var(--small-space) 0 var(--small-space) var(--small-space);
		width: fit-content;
		color: var(--white);
		font-size: var(--default-font-size);
		font-family: var(--text-font), sans-serif;

		@media (max-aspect-ratio: 1 / 1) {
			margin: var(--x-small-space) var(--x-small-space) var(--x-small-space) auto;
			padding: var(--small-space);
		}

		&:focus-visible {
			border-radius: 0 0 0 var(--children-border-radius);
			background-color: var(--red);
			padding: var(--small-space);

			@media (max-aspect-ratio: 1 / 1) {
				border-radius: 0 0 var(--children-border-radius) 0;
			}
		}

		@media (hover: hover) {
			&:hover {
				border-radius: 0 0 0 var(--children-border-radius);
				background-color: var(--red);
				padding: var(--small-space);

				@media (max-aspect-ratio: 1 / 1) {
					border-radius: 0 0 var(--children-border-radius) 0;
				}
			}
		}

		:global(.project-link-icon) {
			display: block;
			width: var(--default-size);
			height: var(--default-size);
		}
	}
</style>
