<script lang="ts">
	import { localize } from '$lib/utils/localization';

	const now = new Date();
	const start = new Date('2021-09-01');

	const yearsNumber = new Date(now.getTime() - start.getTime()).getUTCFullYear() - 1970;

	const iAmAFreelanceDeveloperWithOver = {
		ru: 'Я разработчик\nфрилансер с более чем',
		en: 'I am a freelance\ndeveloper with over',
	};
	const yearsOfExperience = {
		ru: 'годами опыта',
		en: 'years of experience',
	};
</script>

<p id="experience">
	<span>{localize(iAmAFreelanceDeveloperWithOver)}</span>
	<strong>{yearsNumber}</strong>
	<span>{localize(yearsOfExperience)}</span>
</p>

<style>
	#experience {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: var(--default-space);
		margin-top: var(--x-large-space);
		color: var(--white);
		white-space: break-spaces;

		@media (max-aspect-ratio: 1 / 1) {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: var(--x-small-space);
		}

		span {
			font-size: var(--medium-font-size);
			font-family: var(--text-font), sans-serif;

			@media (min-aspect-ratio: 1 / 1) {
				&:first-child {
					justify-self: end;
				}

				&:last-child {
					align-self: end;
					justify-self: start;
					padding-bottom: var(--small-space);
				}
			}

			@media (max-aspect-ratio: 1 / 1) {
				text-align: center;
			}
		}

		strong {
			margin-top: var(--default-space);
			font-size: calc(var(--large-font-size) * 2);
			font-family: var(--title-font), sans-serif;

			@media (max-aspect-ratio: 1 / 1) {
				margin-top: 0;
			}
		}
	}
</style>
