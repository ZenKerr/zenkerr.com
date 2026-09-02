<script lang="ts">
	import Block from '$lib/components/shared/Block.svelte';
	import Copyright from '$lib/components/layout/footer/Copyright.svelte';
	import { extractLanguage, localize, localizeArray } from '$lib/utils/localization';
	import { page } from '$app/state';
	import List from '$lib/components/shared/list/List.svelte';
	import { EXTERNAL, INTERNAL, type ListItems } from '$lib/components/shared/list/types';
	import {
		EnvelopeSimpleIcon,
		FileTextIcon,
		GithubLogoIcon,
		PackageIcon,
		SteamLogoIcon,
		TelegramLogoIcon,
	} from 'phosphor-svelte';
	import {
		CRATES_IO_HREF,
		EMAIL_ADDRESS,
		EMAIL_HREF,
		GITHUB_HREF,
		STEAM_HREF,
		TELEGRAM_HREF,
	} from '$lib/constants';

	const language = $derived(extractLanguage(page));

	const lists = $derived([
		{
			title: {
				ru: 'Юридические документы',
				en: 'Legal documents',
			},
			items: [
				{
					text: localize({
						ru: 'Условия оказания услуг',
						en: 'Terms of service',
					}),
					icon: FileTextIcon,
					target: {
						type: INTERNAL,
						href: `/terms-of-service/${language}`,
					},
				},
			] satisfies ListItems,
		},
		{
			title: {
				ru: 'Ссылки',
				en: 'Links',
			},
			items: [
				{
					text: 'GitHub',
					icon: GithubLogoIcon,
					target: {
						type: EXTERNAL,
						href: GITHUB_HREF,
					},
				},
				{
					text: 'Steam',
					icon: SteamLogoIcon,
					target: {
						type: EXTERNAL,
						href: STEAM_HREF,
					},
				},
				{
					text: 'Crates.io',
					icon: PackageIcon,
					target: {
						type: EXTERNAL,
						href: CRATES_IO_HREF,
					},
				},
			] satisfies ListItems,
		},
		{
			title: {
				ru: 'Контакты',
				en: 'Contacts',
			},
			items: [
				{
					text: EMAIL_ADDRESS,
					icon: EnvelopeSimpleIcon,
					target: {
						type: EXTERNAL,
						href: EMAIL_HREF,
					},
				},
				{
					text: '@zen_kerr',
					icon: TelegramLogoIcon,
					target: {
						type: EXTERNAL,
						href: TELEGRAM_HREF,
					},
				},
			] satisfies ListItems,
		},
	]);
	const legalInformationTitle = {
		ru: 'Юридическая информация',
		en: 'Legal information',
	};
	const legalInformationItems = [
		{
			ru: 'Индивидуальный предприниматель\nИван\u00A0Сарницкий',
			en: 'Individual entrepreneur Ivan\u00A0Sarnitskii',
		},
		{
			ru: 'Идентификационный номер 300480717',
			en: 'Identification number 300480717',
		},
		{
			ru: 'Тбилиси, 2-й тупик Теймураза Бочоришвили,\nдом 5, квартира 152',
			en: 'Tbilisi, Teimuraz Bochorishvili II Dead End,\nNo. 5, Apartment No. 152',
		},
	];
</script>

<Block id="footer-navigation" borderRadius={[true, true, false, false]}>
	<div>
		{#each lists as { title, items }, i (i)}
			<List class="footer-navigation-list" title={localize(title)} {items} />
		{/each}
		<List
			id="legal-information-list"
			title={localize(legalInformationTitle)}
			items={localizeArray(legalInformationItems).map((text) => ({ text }))}
			selectable={true}
		/>
	</div>
	<Copyright />
</Block>

<style>
	:global(#footer-navigation) {
		padding: var(--default-space);

		div {
			display: flex;
			flex-wrap: wrap;
			gap: var(--x-large-space);

			@media (max-aspect-ratio: 11.55 / 8.25) {
				justify-content: space-around;
				gap: var(--large-space);

				@media (max-aspect-ratio: 1 / 1) {
					justify-content: space-between;
				}
			}
		}

		:global(.footer-navigation-list) {
			@media (max-aspect-ratio: 1 / 1) {
				order: 0;
				min-width: 30vw;

				&:first-child {
					order: 1;
				}
			}
		}

		:global(#legal-information-list) {
			@media (min-aspect-ratio: 11.55 / 8.25) {
				margin-left: auto;
				text-align: right;
			}

			@media (max-aspect-ratio: 1 / 1) {
				order: 2;
			}

			@media (max-aspect-ratio: 10.3 / 8.25) {
				@media (min-aspect-ratio: 1 / 1) {
					:global(ul) {
						display: flex;
						gap: var(--default-space);
					}
				}
			}

			:global(span) {
				@media (min-aspect-ratio: 10.3 / 8.25) {
					white-space: pre-line;

					@media (min-aspect-ratio: 11.55 / 8.25) {
						margin-left: auto;
					}
				}
			}
		}
	}
</style>
