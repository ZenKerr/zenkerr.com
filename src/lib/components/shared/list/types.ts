import type { PathnameWithSearchOrHash } from '$app/types';
import type { Component } from 'svelte';

export const INTERNAL = 'internal';
export const EXTERNAL = 'external';

export interface ListItem {
	text: string;
	icon?: Component;
	target?:
		| {
				type: typeof INTERNAL;
				href: PathnameWithSearchOrHash;
		  }
		| {
				type: typeof EXTERNAL;
				href: string;
		  };
}

export type ListItems = ListItem[];
