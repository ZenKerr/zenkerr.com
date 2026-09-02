import { error, type Page, type RequestEvent } from '@sveltejs/kit';
import { page } from '$app/state';

export type Language = (typeof LANGUAGES)[number];
export type Expression<T> = Record<Language, T>;

export const ENGLISH = 'en';
export const RUSSIAN = 'ru';
export const DEFAULT_LANGUAGE = ENGLISH;
export const LANGUAGES = [ENGLISH, RUSSIAN] as const;
export const LANGUAGE_ENTRIES = LANGUAGES.map((language) => ({ language }));

export function isLanguage(maybeLanguage: string | undefined): maybeLanguage is Language {
	return LANGUAGES.some((language) => language === maybeLanguage);
}

export function validateLanguage(language: string): { language: Language } {
	if (isLanguage(language)) {
		return { language };
	} else {
		throw error(404, 'Not found');
	}
}

export function defaultLanguage(): Language {
	for (const language of navigator.languages) {
		const languageCode = language.split('-')[0].toLowerCase();

		if (isLanguage(languageCode)) {
			return languageCode;
		}
	}

	return DEFAULT_LANGUAGE;
}

export function extractLanguage(source: Page | RequestEvent): Language {
	const { language } = source.params;

	return isLanguage(language) ? language : defaultLanguage();
}

export function localize<T>(expression: Expression<T>): T {
	return expression[extractLanguage(page)];
}

export function localizeArray<T>(expressions: Expression<T>[]): T[] {
	return expressions.map((expression) => localize(expression));
}
