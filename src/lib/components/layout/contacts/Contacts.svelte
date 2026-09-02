<script lang="ts">
	import Title from '$lib/components/shared/Title.svelte';
	import { localize } from '$lib/utils/localization';
	import { EnvelopeSimpleIcon, TelegramLogoIcon } from 'phosphor-svelte';
	import Contact from '$lib/components/layout/contacts/Contact.svelte';
	import { EMAIL_ADDRESS, EMAIL_HREF, TELEGRAM_HREF, TELEGRAM_USERNAME } from '$lib/constants';

	const contacts = {
		ru: 'Контакты',
		en: 'Contacts',
	};
	const contacts_ = [
		{ icon: EnvelopeSimpleIcon, href: EMAIL_HREF, text: EMAIL_ADDRESS },
		{ icon: TelegramLogoIcon, href: TELEGRAM_HREF, text: TELEGRAM_USERNAME },
	];
</script>

<section id="contacts">
	<Title text={localize(contacts)} />
	<div>
		{#each contacts_ as { icon, href, text } (href)}
			<Contact {icon} {href} {text} />
		{/each}
	</div>
</section>

<style>
	#contacts {
		padding-top: var(--x-large-space);

		div {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: var(--large-space);
		}
	}
</style>
