<script lang="ts">
	import { goto } from '$app/navigation';
	import { defaultLanguage } from '$lib/utils/localization';
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';

	onMount(() => {
		const language = defaultLanguage();

		goto(resolve(`/${language}`), { replaceState: true });
	});
</script>
