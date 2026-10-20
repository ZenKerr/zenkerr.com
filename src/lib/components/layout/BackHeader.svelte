<script lang="ts">
	import LanguageSelector from '$lib/components/shared/LanguageSelector.svelte';
	import Block from '$lib/components/shared/Block.svelte';
	import { resolve } from '$app/paths';
	import { extractLanguage, localize } from '$lib/utils/localization';
	import { page } from '$app/state';

	const language = $derived(extractLanguage(page));

	const navigation = { ru: 'Навигация', en: 'Navigation' };
	const toMain = {
		ru: 'На главную',
		en: 'To main',
	};
</script>

<header id="back-header">
	<Block id="back-header-navigation" borderRadius={[false, false, true, false]}>
		<nav aria-label={localize(navigation)}>
			<a href={resolve(`/${language}`)}>{localize(toMain)}</a>
		</nav>
	</Block>
	<LanguageSelector />
</header>

<style>
	#back-header {
		display: flex;
		position: sticky;
		top: 0;
		justify-content: space-between;

		@media (max-aspect-ratio: 9.5 / 8.25) {
			border-bottom: solid var(--default-border-width) var(--black);
			background-color: var(--black);
		}

		:global(#back-header-navigation) {
			display: flex;
			align-items: center;

			nav {
				padding: 0 var(--default-space);

				a {
					transition: var(--default-transition) linear;
					color: var(--black);
					font-size: var(--medium-font-size);
					font-family: var(--title-font), sans-serif;

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
		}
	}
</style>
