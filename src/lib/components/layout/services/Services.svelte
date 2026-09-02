<script lang="ts">
	import { localize } from '$lib/utils/localization';
	import Service from '$lib/components/layout/services/Service.svelte';
	import Title from '$lib/components/shared/Title.svelte';

	const services = {
		ru: 'Услуги',
		en: 'Services',
	};
	const services_ = [
		{
			name: {
				ru: 'Написание скриптов',
				en: 'Script development',
			},
			description: {
				ru: 'Включая парсеры',
				en: 'Including web scrapers',
			},
			price: 50,
		},
		{
			name: {
				ru: 'Создание телеграм ботов',
				en: 'Telegram bot development',
			},
			description: {
				ru: 'На python или rust',
				en: 'Build with python or rust',
			},
			price: 75,
		},
		{
			name: {
				ru: 'Веб-разработка',
				en: 'Web development',
			},
			description: {
				ru: 'Фронтенд и бекенд',
				en: 'Frontend and backend',
			},
			price: 100,
		},
		{
			name: {
				ru: 'Обучение нейросетей',
				en: 'Training neural networks',
			},
			description: {
				ru: 'С нуля и дообучение',
				en: 'From scratch and fine-tuning',
			},
			price: 125,
		},
	];
</script>

<section id="services">
	<Title text={localize(services)} />
	<div>
		{#each services_ as { name, description, price } (price)}
			<Service name={localize(name)} description={localize(description)} {price} />
		{/each}
	</div>
</section>

<style>
	#services {
		padding-top: var(--x-large-space);

		div {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: var(--large-space);
		}
	}
</style>
