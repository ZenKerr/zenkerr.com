import { LANGUAGE_ENTRIES } from '$lib/utils/localization';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => LANGUAGE_ENTRIES;
