<script lang="ts">
	import { localize } from '$lib/utils/localization';
	import Project from '$lib/components/layout/my-projects/Project.svelte';
	import Title from '$lib/components/shared/Title.svelte';

	const myProjects = {
		ru: 'Мои проекты',
		en: 'My projects',
	};
	const projects = [
		{
			name: 'localize_it',
			description: {
				ru: 'Компактная и быстрая Rust библиотека для локализации, не имеющая зависимостей во время выполнения и поддерживающая #!\u2060[no_std]\n\nРеализована с помощью процедурных макросов',
				en: 'A tiny, fast Rust localization library with zero runtime dependencies and #!\u2060[no_std] support\n\nImplemented using procedural macros',
			},
			link: {
				href: 'https://crates.io/crates/localize_it',
				text: 'Crates.io',
			},
		},
		{
			name: 'easy_callback',
			description: {
				ru: 'Rust библиотека для кодирования callback-данных в Teloxide\n\nРеализует derive макросы для применения к пользовательским типам и имеет поддержку разных бекендов сериализации',
				en: 'A Rust library for encoding callback data in Teloxide\n\nProvides derive macros for user-defined types and supports multiple serialization backends',
			},
			link: {
				href: 'https://crates.io/crates/easy_callback',
				text: 'Crates.io',
			},
		},
		{
			name: 'Simple Arcade',
			description: {
				ru: 'Простая игра вдохновленная первыми аркадными играми\n\nСоздана на Python с PyGame и компилируется с помощью PyInstaller',
				en: 'A simple game inspired by the first arcade games\n\nBuilt with Python and PyGame and compiled using PyInstaller',
			},
			link: {
				href: 'https://store.steampowered.com/app/2333840',
				text: 'Steam',
			},
		},
		{
			name: 'zenkerr.com',
			description: {
				ru: 'Сайт-портфолио, на котором вы сейчас находитесь\n\nСоздан на Svelte, собирается с помощью Vite и размещается на Cloudflare Pages',
				en: 'The portfolio website you are currently viewing\n\nBuilt with Svelte, built using Vite, and hosted on Cloudflare Pages',
			},
		},
	];
</script>

<section id="my-projects">
	<Title text={localize(myProjects)} />
	<div>
		{#each projects as { name, description, link } (link)}
			<Project {name} description={localize(description)} {link} />
		{/each}
	</div>
</section>

<style>
	#my-projects {
		padding-top: var(--x-large-space);

		div {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: var(--large-space);
		}
	}
</style>
