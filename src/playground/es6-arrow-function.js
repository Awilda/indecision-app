// // es5
// const square = function(x) {
// 	return x * x;
// };

// // function square(x) {
// // 	return x * x;
// // };


// //es6
// const squareArrow = (x) => {
// 	return x * x;
// };

// // single expression:
// // const squareArrow = (x) => x * x;

// console.log(square(8));
// console.log(squareArrow(11));


// Challenge - Use arrow functions
// getFirstName('Mike Smith') --> 'Mike'
// Create regular arrow function
// Create arrow function using shorthand syntax

const person = {
	name: 'Mike Smith'
}

let firstName;

// const getFirstName = (name) => {
// 	if (person.name) {
// 		firstName = person.name.split(' ')[0];
// 		return firstName;
// 	}
// }

// console.log(getFirstName(person));


//shorthand syntax
const getFirstName = (fullName) => firstName = person.name.split(' ')[0];

console.log(getFirstName(person.name));