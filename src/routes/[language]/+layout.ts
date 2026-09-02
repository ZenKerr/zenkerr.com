import type { LayoutLoad } from './$types';
import { validateLanguage } from '$lib/utils/localization';

export const prerender = true;

export const load: LayoutLoad = ({ params }) => validateLanguage(params.language);
