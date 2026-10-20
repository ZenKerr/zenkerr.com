<script lang="ts">
	import { localize } from '$lib/utils/localization';
	import List from '$lib/components/shared/list/List.svelte';
	import Block from '$lib/components/shared/Block.svelte';
	import VerticalLine from '$lib/components/shared/VerticalLine.svelte';
	import { isPhoneMediaQuery } from '$lib/utils/helpers';

	const borderRadius = $derived(isPhoneMediaQuery.current ? [false] : [false, true, true, false]);

	const myTechStack = {
		ru: 'Мой стек',
		en: 'My tech stack',
	};
	const technologyColumns = $derived([
		[
			{
				title: 'Python',
				items: [
					{ text: 'FastAPI' },
					{ text: 'Flask/Quart' },
					{ text: 'Django' },
					{ text: 'PyTelegramBotAPI' },
					{ text: 'PyTorch' },
					{ text: 'PyGame' },
					{ text: 'Playwright' },
					{ text: 'Selenium' },
				],
			},
		],
		[
			{
				title: 'Rust',
				items: [{ text: 'Axum' }, { text: 'Teloxide' }, { text: 'Egui' }],
			},
			{
				title: 'JavaScript/TypeScript',
				items: [{ text: 'Svelte' }, { text: 'React/Next.js' }, { text: 'Vue.js' }],
			},
		],
		[
			{
				title: localize({
					ru: 'Прочее',
					en: 'Other',
				}),
				items: [
					{ text: 'C/C++' },
					{ text: 'C#' },
					{ text: 'MySQL' },
					{ text: 'PostgreSQL' },
					{ text: 'SQLite' },
					{ text: 'Nginx' },
					{ text: 'Docker' },
				],
			},
		],
	]);
</script>

<div id="tech-stack">
	<Block>
		<h3>{localize(myTechStack)}</h3>
	</Block>
	<Block id="tech-stack-content" {borderRadius}>
		{#each technologyColumns as technologyColumn, i (i)}
			{#if i > 0}
				<VerticalLine class="tech-stack-delimiter" />
			{/if}
			<div>
				{#each technologyColumn as { title, items }, i (i)}
					<List {title} {items} />
				{/each}
			</div>
		{/each}
	</Block>
</div>

<style>
	#tech-stack {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		margin: var(--x-large-space) 0 0 var(--negative-default-space);
		width: calc(100% + var(--default-space));

		@media (max-aspect-ratio: 10.5 / 8.25) {
			grid-template-columns: 1.25fr auto 0.75fr;

			@media (max-aspect-ratio: 9.55 / 8.25) {
				grid-template-columns: auto auto 0.5fr;

				@media (max-aspect-ratio: 1 / 1) {
					display: block;
					margin-left: 0;
					width: calc(100% + var(--default-space) * 2);
				}
			}
		}

		h3 {
			padding: var(--default-space);
			color: var(--black);
			font-size: var(--large-font-size);
			font-family: var(--title-font), sans-serif;

			@media (min-aspect-ratio: 1 / 1) {
				text-align: right;
			}
		}

		:global(#tech-stack-content) {
			display: flex;
			flex-wrap: wrap;
			gap: var(--default-space);
			padding: var(--default-space);

			@media (max-aspect-ratio: 1 / 1) {
				justify-content: space-around;
			}

			:global(.tech-stack-delimiter) {
				height: 100%;

				@media (max-aspect-ratio: 1 / 1) {
					display: none;
				}
			}

			div {
				display: flex;
				flex-direction: column;
				gap: var(--default-space);

				@media (max-aspect-ratio: 1 / 1) {
					&:last-child {
						display: none;
					}
				}
			}
		}
	}
</style>
