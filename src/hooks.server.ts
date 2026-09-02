import { extractLanguage } from '$lib/utils/localization';

export async function handle({ event, resolve }) {
	const language = extractLanguage(event);

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%language%', language),
	});
}
