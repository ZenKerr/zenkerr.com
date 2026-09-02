<script lang="ts">
	import { CaretDoubleUpIcon } from 'phosphor-svelte';
	import { onMount } from 'svelte';
	import { afterNextPaint } from '$lib/utils/helpers';

	let isHidden = $state(true);
	let withTransition = $state(false);

	const handleScroll = () => (isHidden = window.scrollY === 0);
	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	onMount(() => {
		handleScroll();

		afterNextPaint(() => (withTransition = true));
	});
</script>

<svelte:window onscroll={handleScroll} />

<button
	id="to-top"
	class={[isHidden && 'hidden', withTransition && 'with-transition']}
	onclick={scrollToTop}
>
	<CaretDoubleUpIcon id="to-top-icon" />
</button>

<style>
	#to-top {
		display: block;
		position: sticky;
		right: var(--default-space);
		bottom: var(--default-space);
		cursor: pointer;
		margin: var(--default-space) var(--default-space) var(--default-space) auto;
		border: solid var(--default-border-width) var(--white);
		border-radius: var(--circle-border-radius);
		background-color: var(--black);
		padding: var(--small-space);
		width: fit-content;

		&.hidden {
			transform: translateY(0.5vh);
			opacity: 0;
			pointer-events: none;
		}

		&.with-transition {
			transition: var(--default-transition) linear;
		}

		&:focus-visible {
			border-color: var(--red);
			border-radius: 0;
			background-color: var(--red);
		}

		@media (hover: hover) {
			&:hover {
				border-color: var(--red);
				border-radius: 0;
				background-color: var(--red);
			}
		}

		:global(#to-top-icon) {
			display: block;
			width: var(--large-size);
			height: var(--large-size);
			color: var(--white);
		}
	}
</style>
