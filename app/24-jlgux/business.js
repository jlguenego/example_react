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

	times(n) {
		this.number *= n;
	}

	getNumber() {
		return this.number;
	}
}

// export class Counter {

// 	constructor() {
// 		let number = 10;
// 		this.getNumber = () => number;
// 		this.increment = () => {
// 			number++;
// 		};
// 		this.add = n => {
// 			number += n;
// 		};
// 	}
// }
