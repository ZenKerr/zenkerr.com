<script lang="ts">
	import { localize } from '$lib/utils/localization';

	const myUsernameIs = {
		ru: 'Мой никнейм',
		en: 'My username is',
	};
</script>

<div id="username">
	<span>{localize(myUsernameIs)}</span>
	<h1>ZenKerr</h1>
</div>

<style>
	#username {
		color: var(--white);
		text-align: center;

		span {
			display: block;
			margin-bottom: var(--x-small-space);
			font-size: var(--large-font-size);
			font-family: var(--text-font), sans-serif;

			@media (max-aspect-ratio: 1 / 1) {
				margin-bottom: 0;
				font-size: var(--medium-font-size);
			}
		}

		h1 {
			font-size: calc(var(--large-font-size) * 2);
			font-family: var(--title-font), sans-serif;

			@media (max-aspect-ratio: 1 / 1) {
				font-size: calc(var(--x-large-font-size));
			}
		}
	}
</style>
