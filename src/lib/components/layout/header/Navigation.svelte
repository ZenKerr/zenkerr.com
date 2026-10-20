<script lang="ts">
	import { localize } from '$lib/utils/localization';
	import Block from '$lib/components/shared/Block.svelte';
	import { CaretDoubleDownIcon } from 'phosphor-svelte';
	import { isPhoneMediaQuery } from '$lib/utils/helpers';

	let isOpened = $state(false);
	let toggleButtonIsHovered = $state(false);

	const isPhone = $derived(isPhoneMediaQuery.current);
	const borderRadius = $derived(toggleButtonIsHovered ? [false] : [false, false, true, false]);
	const className = $derived(isOpened ? 'opened' : undefined);

	const navigation = { ru: 'Навигация', en: 'Navigation' };
	const links = [
		{
			target: 'about-me',
			text: {
				ru: 'Обо мне',
				en: 'About me',
			},
		},
		{
			target: 'my-projects',
			text: {
				ru: 'Мои проекты',
				en: 'My projects',
			},
		},
		{
			target: 'services',
			text: {
				ru: 'Услуги',
				en: 'Services',
			},
		},
		{
			target: 'contacts',
			text: {
				ru: 'Контакты',
				en: 'Contacts',
			},
		},
	];
	const openNavigation = {
		ru: 'Открыть навигацию',
		en: 'Open navigation',
	};
	const closeNavigation = {
		ru: 'Закрыть навигацию',
		en: 'Close navigation',
	};
	const toggleNavigation = $derived(isOpened ? closeNavigation : openNavigation);
</script>

<Block id="header-navigation" class={className} {borderRadius}>
	<nav id="header-navigation-links" aria-label={localize(navigation)}>
		{#each links as { target, text } (target)}
			<a href={`#${target}`} onclick={() => (isOpened = false)}>{localize(text)}</a>
		{/each}
	</nav>
	{#if isPhone}
		<button
			aria-label={localize(toggleNavigation)}
			aria-controls="header-navigation-links"
			aria-expanded={isOpened}
			onmouseenter={() => (toggleButtonIsHovered = true)}
			onmouseleave={() => (toggleButtonIsHovered = false)}
			onfocus={(event) => (toggleButtonIsHovered = event.currentTarget.matches(':focus-visible'))}
			onblur={() => (toggleButtonIsHovered = false)}
			onclick={() => (isOpened = !isOpened)}
		>
			<CaretDoubleDownIcon id="header-navigation-toggle-button-icon" class={className} />
		</button>
	{/if}
</Block>

<style>
	:global(#header-navigation) {
		display: flex;
		align-items: center;
		transition: var(--default-transition) linear;
		width: 100%;

		@media (max-aspect-ratio: 1 / 1) {
			position: absolute;
			top: 0;
			left: 0;
			flex-direction: column;
			transform: translateY(
				calc(-100% + var(--large-size) + var(--small-space) * 2 + var(--default-border-width) * 2)
			);
			padding: var(--x-small-space);
			width: fit-content;

			&.opened {
				transform: translateY(0);
			}
		}

		nav {
			display: flex;
			position: absolute;
			right: 0;
			left: 0;
			justify-content: space-between;
			margin: 0 auto;
			max-width: 100vh;

			@media (max-aspect-ratio: 1 / 1) {
				gap: var(--small-space);
				padding: var(--default-space);
			}

			@media (max-aspect-ratio: 12.5 / 8.25) {
				position: static;
				justify-content: space-around;
				width: 100%;

				@media (max-aspect-ratio: 1 / 1) {
					flex-direction: column;
				}
			}

			a {
				transition: var(--default-transition) linear;
				color: var(--black);
				font-size: var(--medium-font-size);
				font-family: var(--title-font), sans-serif;

				@media (max-aspect-ratio: 1 / 1) {
					width: fit-content;
					font-size: var(--large-font-size);
				}

				&:focus-visible {
					background-color: var(--red);
					color: var(--white);
				}

				@media (hover: hover) {
					&:hover {
						background-color: var(--red);
						color: var(--white);
					}
				}
			}
		}

		button {
			transition: var(--default-transition) linear;
			cursor: pointer;
			border-radius: var(--children-border-radius);
			background-color: var(--black);
			padding: var(--x-small-space);
			width: 100%;

			&:focus-visible {
				border-radius: 0;
				background-color: var(--red);
			}

			@media (hover: hover) {
				&:hover {
					border-radius: 0;
					background-color: var(--red);
				}
			}

			:global(#header-navigation-toggle-button-icon) {
				display: block;
				transform: rotate(0deg);
				transition: var(--default-transition) linear;
				margin: 0 auto;
				width: var(--large-size);
				height: var(--large-size);
				color: var(--white);

				&.opened {
					transform: rotate(180deg);
				}
			}
		}
	}
</style>
