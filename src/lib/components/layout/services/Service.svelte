<script lang="ts">
	import { localize } from '$lib/utils/localization';
	import Block from '$lib/components/shared/Block.svelte';

	interface Props {
		name: string;
		description: string;
		price: number;
	}

	const { name, description, price }: Props = $props();

	const currencyCoefficient = {
		ru: 100,
		en: 1,
	};
	const currency = {
		ru: '₽',
		en: '$',
	};
	const from = {
		ru: 'От',
		en: 'From',
	};
</script>

<Block class="service" borderRadius={[true]}>
	<h4>{name}</h4>
	<div>{description}</div>
	<div>
		{localize(from)}
		<span>{price * localize(currencyCoefficient)}{localize(currency)}</span>
	</div>
</Block>

<style>
	:global(.service) {
		padding: var(--default-space);
		color: var(--black);

		@media (min-aspect-ratio: 1 / 1) {
			min-width: calc(30vh - var(--default-space) * 2);
		}

		@media (max-aspect-ratio: 1 / 1) {
			width: 100%;
		}

		h4 {
			font-size: var(--medium-font-size);
			font-family: var(--title-font), sans-serif;
		}

		div {
			margin-top: var(--x-small-space);
			font-size: var(--default-font-size);
			font-family: var(--text-font), sans-serif;

			&:last-child {
				text-align: right;

				span {
					position: relative;
					font-size: var(--medium-font-size);

					&:after {
						position: absolute;
						bottom: 0;
						left: 0;
						transform: rotate(-2.5deg);
						border-radius: var(--default-border-radius);
						background-color: var(--red);
						width: 100%;
						height: var(--default-border-width);
						content: '';
					}
				}
			}
		}
	}
</style>
