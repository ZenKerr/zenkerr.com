import { MediaQuery } from 'svelte/reactivity';
import type { MetaTagsProps } from 'svelte-meta-tags';
import { extractLanguage, type Language, LANGUAGES } from '$lib/utils/localization';
import { page } from '$app/state';

export const isPhoneMediaQuery = new MediaQuery('max-aspect-ratio: 1 / 1');

export function afterNextPaint(callback: () => void) {
	requestAnimationFrame(() => requestAnimationFrame(callback));
}

export function getMetaTags(title: string, description: string): MetaTagsProps {
	const language = extractLanguage(page);

	function buildHref(language?: Language): string {
		const routeId = page.route.id || '';
		const path = routeId
			.replace('[language]', language === undefined ? '' : language)
			.replace(/\/$/, '');

		return page.url.origin + path;
	}

	function languageToCode(language: Language): string {
		switch (language) {
			case 'ru':
				return 'ru_RU';
			case 'en':
				return 'en_US';
		}
	}

	return {
		title,
		description,
		languageAlternates: [
			{ hrefLang: 'x-default', href: buildHref() },
			...LANGUAGES.map((target) => ({
				hrefLang: target,
				href: buildHref(target),
			})),
		],
		openGraph: {
			type: 'website',
			siteName: 'ZenKerr',
			url: page.url.href,
			locale: languageToCode(language),
			images: [
				{
					url: 'https://zenkerr.com/images/logo.png',
					width: 1200,
					height: 1200,
					alt: 'ZenKerr logo',
				},
			],
		},
		twitter: {
			cardType: 'summary',
			image: 'https://zenkerr.com/images/logo.png',
			imageAlt: 'ZenKerr logo',
		},
		additionalMetaTags: LANGUAGES.filter((language_) => language_ !== language).map(
			(language_) => ({
				property: 'og:locale:alternate',
				content: languageToCode(language_),
			}),
		),
	};
}
