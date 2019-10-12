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

const me = new Person('Awilda Couverthier', 29);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());