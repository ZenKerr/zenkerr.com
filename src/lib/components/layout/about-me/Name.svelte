<script lang="ts">
	import { localize } from '$lib/utils/localization';

	const myNameIs = {
		ru: 'Меня зовут',
		en: 'My name is',
	};
	const ivanSarnitskii = {
		ru: 'Иван Сарницкий',
		en: 'Ivan Sarnitskii',
	};
</script>

<div id="name">
	<span>{localize(myNameIs)}</span>
	<h1>{localize(ivanSarnitskii)}</h1>
</div>

<style>
	#name {
		color: var(--white);
		text-align: center;

		span {
			font-size: var(--x-large-font-size);
			font-family: var(--text-font), sans-serif;

			@media (max-aspect-ratio: 1 / 1) {
				font-size: var(--medium-font-size);
			}
		}

		h1 {
			font-size: calc(var(--x-large-font-size) * 2);
			font-family: var(--title-font), sans-serif;

			@media (max-aspect-ratio: 1 / 1) {
				font-size: calc(var(--x-large-font-size));
			}
		}
	}
</style>
