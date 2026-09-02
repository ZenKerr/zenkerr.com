<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import { localize } from '$lib/utils/localization';

	const alt = {
		ru: 'Логотип',
		en: 'Logo',
	};
</script>

<img id="logo" src={logo} alt={localize(alt)} />

<style>
	#logo {
		width: 100%;
	}
</style>
