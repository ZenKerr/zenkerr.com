import type { EntryGenerator } from './$types';
import { LANGUAGE_ENTRIES } from '$lib/utils/localization';

export const entries: EntryGenerator = () => LANGUAGE_ENTRIES;
