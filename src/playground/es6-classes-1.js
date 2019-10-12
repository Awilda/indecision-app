class Person {
	// constructor - "function that gets called when we make a new instance and it gets called with all of the arguments that gets passed in"
	constructor(name = 'Anonymous', age = 0) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		// return 'Hi, I\'m ' + this.name + '!';

		// template strings
		return `Hi, I'm ${this.name}!`;
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age); // refers to parent class - will call parent constructor function
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	// override parent behavior
	getDescription() {
		let description = super.getDescription();

		if (this.hasMajor()) {
			description += ` Their major is ${this.major}`;
		}
		return description
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name);
		this.homeLocation = homeLocation;
	}
	hasHomeLocation() {
		return !!this.homeLocation;
	}
	// override parent behavior
	getGreeting() {
		let greeting = super.getGreeting();

		if (this.hasHomeLocation()) {
			greeting += ` I'm visiting from ${this.homeLocation}.`
		}
		return greeting;

	}
}

const me = new Traveler('Awilda Couverthier', 29, 'New York City');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());