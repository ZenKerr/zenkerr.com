<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { ENGLISH, extractLanguage, type Language, RUSSIAN } from '$lib/utils/localization';
	import type { ResolvedPathname } from '$app/types';
	import type { RouteId } from '$app/types';

	const language = $derived(extractLanguage(page));

	function buildHref(target: Language): ResolvedPathname {
		const routeId = page.route.id;

		if ('language' in page.params && routeId !== null) {
			const route = routeId as Extract<RouteId, `${string}[language]`>;

			return resolve(route, {
				...page.params,
				language: target,
			});
		} else {
			return resolve('/');
		}
	}

	const buttons = [
		{ target: ENGLISH, text: 'En' },
		{ target: RUSSIAN, text: 'Ру' },
	] satisfies { target: Language; text: string }[];
</script>

<nav id="language-selector">
	{#each buttons as { target, text } (target)}
		{#if language === target}
			<div>{text}</div>
		{:else}
			<a href={buildHref(target)} data-sveltekit-noscroll>{text}</a>
		{/if}
	{/each}
</nav>

<style>
	#language-selector {
		display: flex;
		gap: var(--small-space);
		padding: var(--small-space) var(--default-space);

		> * {
			display: grid;
			place-items: center;
			border: solid var(--default-border-width) var(--white);
			border-radius: var(--circle-border-radius);
			width: var(--large-size);
			height: var(--large-size);
			font-size: calc(var(--default-font-size) * 1.25);
			font-family: var(--title-font), sans-serif;

			&:is(div) {
				background-color: var(--white);
				color: var(--black);
			}

			&:is(a) {
				transition: var(--default-transition) linear;
				background-color: var(--black);
				color: var(--white);

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
			}
		}
	}
</style>
