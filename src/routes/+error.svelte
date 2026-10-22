<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import Content from '$lib/components/layout/Content.svelte';
	import { localize } from '$lib/utils/localization';

	const error = {
		ru: 'Ошибка',
		en: 'Error',
	};
	const toMain = {
		ru: 'На главную',
		en: 'To main',
	};
</script>

<svelte:head>
	<title>{localize(error)} {page.status}</title>
</svelte:head>

<Content>
	<h1>{localize(error)} {page.status}</h1>
	<a href={resolve('/')}>{localize(toMain)}</a>
</Content>

<style>
	h1 {
		margin: var(--x-large-space) 0 0 var(--negative-default-space);
		width: 100vw;
		color: var(--white);
		font-size: var(--x-large-font-size);
		font-family: var(--title-font), sans-serif;
		text-align: center;
	}

	a {
		display: block;
		transition: var(--default-transition) linear;
		margin: var(--default-space) auto 0 auto;
		width: fit-content;
		color: var(--white);
		font-size: var(--medium-font-size);
		font-family: var(--text-font), sans-serif;

		&:focus-visible {
			background-color: var(--red);
		}

		@media (hover: hover) {
			&:hover {
				background-color: var(--red);
			}
		}
	}
</style>
