<script lang="ts">
	import Footer from '$lib/components/layout/footer/Footer.svelte';
	import TermsOfService from '$lib/components/layout/terms-of-service/TermsOfService.svelte';
	import ToMainHeader from '$lib/components/layout/ToMainHeader.svelte';
	import ToTop from '$lib/components/layout/ToTop.svelte';
	import { localize } from '$lib/utils/localization';
	import Content from '$lib/components/layout/Content.svelte';
	import { getMetaTags } from '$lib/utils/helpers';
	import { MetaTags } from 'svelte-meta-tags';

	const title = $derived(
		localize({
			ru: 'Условия оказания услуг - Иван Сарницкий | ZenKerr',
			en: 'Terms of service - Ivan Sarnitskii | ZenKerr',
		}),
	);
	const description = $derived(
		localize({
			ru: 'Информация об условиях оказания услуг по разработке программного обеспечения.',
			en: 'Information on the terms of service for software development.',
		}),
	);
	const metaTags = $derived(getMetaTags(title, description));
</script>

<svelte:head>
	<MetaTags {...metaTags} />
</svelte:head>

<ToMainHeader />
<Content>
	<TermsOfService />
</Content>
<ToTop />
<Footer />
