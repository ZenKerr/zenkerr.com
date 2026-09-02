import { createContext } from 'svelte';

class NumberCounter {
	private section: number;
	private point: number;

	constructor() {
		this.section = 0;
		this.point = 0;
	}

	public nextSection(): string {
		this.section += 1;
		this.point = 0;

		return `${this.section}.`;
	}

	public nextPoint(): string {
		this.point += 1;

		return `${this.section}.${this.point}.`;
	}
}

export const [getNumberCounter, setNumberCounter] = createContext<NumberCounter>();
export const initNumberCounter = () => setNumberCounter(new NumberCounter());
