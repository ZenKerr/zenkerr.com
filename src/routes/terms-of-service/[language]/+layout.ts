import { validateLanguage } from '$lib/utils/localization';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = ({ params }) => validateLanguage(params.language);
