<script lang="ts">
	import Header from '$lib/components/layout/header/Header.svelte';
	import Footer from '$lib/components/layout/footer/Footer.svelte';
	import AboutMe from '$lib/components/layout/about-me/AboutMe.svelte';
	import MyProjects from '$lib/components/layout/my-projects/MyProjects.svelte';
	import ToTop from '$lib/components/layout/ToTop.svelte';
	import Services from '$lib/components/layout/services/Services.svelte';
	import Contacts from '$lib/components/layout/contacts/Contacts.svelte';
	import { localize } from '$lib/utils/localization';
	import Content from '$lib/components/layout/Content.svelte';
	import {
		CRATES_IO_HREF,
		EMAIL_ADDRESS,
		GITHUB_HREF,
		STEAM_HREF,
		TELEGRAM_HREF,
	} from '$lib/constants';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
	import { getMetaTags } from '$lib/utils/helpers';

	const title = $derived(
		localize({
			ru: 'Иван Сарницкий | ZenKerr',
			en: 'Ivan Sarnitskii | ZenKerr',
		}),
	);
	const description = $derived(
		localize({
			ru: 'Разработчик-фрилансер, работаю с широким спектром технологий.',
			en: 'Freelance software developer working with a wide range of technologies.',
		}),
	);
	const schemaOrg = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: localize({
			ru: 'Иван Сарницкий',
			en: 'Ivan Sarnitskii',
		}),
		alternateName: 'ZenKerr',
		url: 'https://zenkerr.com',
		jobTitle: localize({
			ru: 'Разработчик-фрилансер',
			en: 'Freelance software developer',
		}),
		email: EMAIL_ADDRESS,
		sameAs: [GITHUB_HREF, CRATES_IO_HREF, STEAM_HREF, TELEGRAM_HREF],
	};
	const metaTags = $derived(getMetaTags(title, description));
</script>

<svelte:head>
	<MetaTags {...metaTags} />
	<JsonLd schema={schemaOrg} />
</svelte:head>

<Header />
<Content>
	<AboutMe />
	<MyProjects />
	<Services />
	<Contacts />
</Content>
<ToTop />
<Footer />
