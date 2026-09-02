import {
	DOCUMENT,
	type DocumentChildren,
	type DocumentNode,
	LIST,
	type ListNode,
	type Prefix,
	SECTION,
	type SectionChildren,
	type SectionNode,
	TEXT,
	type TextNode,
} from '$lib/components/layout/terms-of-service/types';

export function document(
	title: string,
	subtitle: string,
	children: DocumentChildren,
): DocumentNode {
	return {
		type: DOCUMENT,
		title,
		subtitle,
		children,
	};
}

export function section(title: string, children: SectionChildren): SectionNode {
	return {
		type: SECTION,
		title,
		children,
	};
}

export function list(text: string, children: string[]): ListNode {
	return {
		type: LIST,
		text,
		children,
	};
}

export function text(text: string, prefix?: Prefix): TextNode {
	return {
		type: TEXT,
		text,
		prefix,
	};
}
