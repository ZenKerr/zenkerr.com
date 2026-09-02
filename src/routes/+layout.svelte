<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { extractLanguage } from '$lib/utils/localization';
	import '../app.css';
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	onNavigate((navigation) => {
		if (document.startViewTransition) {
			return new Promise((resolve) => {
				document.startViewTransition(async () => {
					resolve();

					await navigation.complete;
				});
			});
		}
	});

	$effect(() => {
		document.documentElement.lang = String(extractLanguage(page));
	});
</script>

{@render children()}
