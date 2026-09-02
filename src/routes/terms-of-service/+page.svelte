<script lang="ts">
	import { goto } from '$app/navigation';
	import { defaultLanguage } from '$lib/utils/localization';
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';

	onMount(() => {
		const language = defaultLanguage();

		goto(resolve(`/terms-of-service/${language}`), { replaceState: true });
	});
</script>
