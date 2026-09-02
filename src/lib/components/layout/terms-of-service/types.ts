export const DOCUMENT = 'document';
export const SECTION = 'section';
export const LIST = 'list';
export const TEXT = 'text';

export type Prefix = string | null;

export interface DocumentData {
	title: string;
	subtitle: string;
	children: DocumentChildren;
}

export type DocumentChild = SectionNode | TextNode;
export type DocumentChildren = DocumentChild[];
export type DocumentNode = { type: typeof DOCUMENT } & DocumentData;

export interface SectionData {
	title: string;
	children: SectionChildren;
}

export type SectionChild = ListNode | TextNode;
export type SectionChildren = SectionChild[];
export type SectionNode = { type: typeof SECTION } & SectionData;

export interface ListData {
	text: string;
	children: string[];
}

export type ListNode = { type: typeof LIST } & ListData;

export interface TextData {
	text: string;
	prefix?: Prefix;
}

export type TextNode = { type: typeof TEXT } & TextData;
