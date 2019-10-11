// argument object - no longer bound with arrow function

// const add = (a, b) => {
// 	console.log(arguments);
// 	return a + b;
// }

// console.log(add(55, 1, 1001))

// will get 'arguments not defined' error instead of displaying arguments like in es5


// this keyword - no longer bound with arrow functions


// (es5) won't work unless you do a work-around such as assigning 'this' to a new variable such as 'that'

// const user = {
// 	name: 'Awilda',
// 	cities: ['Philidelphia', 'New York', 'Dublin'],
// 	printPlacesLived: function () {
// 		console.log(this.name);
// 		console.log(this.cities);
// 		// const that = this;

// 		this.cities.forEach(function (city) {
// 			console.log(this.name + ' has lived in ' + city);
// 		});
// 		// that.cities.forEach(function (city) {
// 		// 	console.log(that.name + ' has lived in ' + city);
// 		// });
// 	}
// };


// (es6) - 'this' will work
// will not work for printPlacesLived, because then we'd lose access to this.cities

const user = {
	name: 'Awilda',
	cities: ['Philidelphia', 'New York', 'Dublin'],

	// es5 version
	// printPlacesLived: function () {
	// 	this.cities.forEach((city) => {
	// 		console.log(this.name + ' has lived in ' + city);
	// 	});
	// }

	// es6 way of defining the method
	// printPlacesLived() {
	// 	this.cities.forEach((city) => {
	// 		console.log(this.name + ' has lived in ' + city);
	// 	});
	// }

	// using map
	printPlacesLived() {
		// const cityMessages = this.cities.map((city) => {
		// 	return this.name + ' has lived in ' + city;
		// });
		// return cityMessages;
		// shorthand syntax
		return this.cities.map((city) => this.name + ' has lived in ' + city);
	}
};

console.log(user.printPlacesLived());


// Challenge area
	// numbers - array of numbers that we want to multiply
	// multiplyBy - single number
	//multiply - return a new array where the numbers have been multiplied

const multiplier = {
	numbers: [1,2,3],
	multiplyBy: 2,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
};

console.log(multiplier.multiply()); // [1,2,3] => [2,4,6]