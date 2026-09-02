<script lang="ts">
	import { extractLanguage, localize } from '$lib/utils/localization';
	import Block from '$lib/components/shared/Block.svelte';
	import { enData } from '$lib/components/layout/terms-of-service/data/en';
	import { ruData } from '$lib/components/layout/terms-of-service/data/ru';
	import Document from '$lib/components/layout/terms-of-service/Document.svelte';
	import { page } from '$app/state';
	import { isPhoneMediaQuery } from '$lib/utils/helpers';

	const language = $derived(extractLanguage(page));
	const borderRadius = $derived(isPhoneMediaQuery.current ? [false] : [true]);

	const data = {
		en: enData,
		ru: ruData,
	};
</script>

<Block id="terms-of-service" {borderRadius}>
	{#key language}
		<Document data={localize(data)} />
	{/key}
</Block>

<style>
	:global(#terms-of-service) {
		margin: var(--x-large-space) auto 0 auto;
		padding: var(--default-space);
		width: calc(100% - 50vh);
		max-width: 150vh;

		@media (max-aspect-ratio: 11.5 / 8.25) {
			width: calc(100% - 45vh);

			@media (max-aspect-ratio: 11 / 8.25) {
				width: calc(100% - 40vh);

				@media (max-aspect-ratio: 9.5 / 8.25) {
					width: calc(100% - var(--default-space) * 2);

					@media (max-aspect-ratio: 1 / 1) {
						margin: var(--default-space) 0 0 var(--negative-default-space);
						width: 100%;
					}
				}
			}
		}
	}
</style>
