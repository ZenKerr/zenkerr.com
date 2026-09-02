<script lang="ts">
	import { Tween } from 'svelte/motion';

	interface Props {
		text: string;
		isShown: boolean;
		id?: string;
		class?: string;
	}

	const { text, isShown, id, class: className }: Props = $props();

	const animationProgress = Tween.of(() => (isShown ? 1 : 0), { duration: 150 });

	const currentLength = $derived(Math.round(animationProgress.current * text.length));
	const currentText = $derived(text.slice(0, currentLength));
</script>

<span {id} class={className}>{currentText}</span>
