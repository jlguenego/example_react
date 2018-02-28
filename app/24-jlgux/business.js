export class Counter {

	constructor() {
		this.number = 10;
	}

	increment() {
		this.number++;
	}

	add(n) {
		this.number += n;
	}

	getNumber() {
		return this.number;
	}
}
