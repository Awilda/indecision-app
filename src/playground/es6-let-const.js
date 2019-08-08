var nameVar = 'Awilda';
nameVar = 'Jake';
nameVar = 'Mike';
console.log('nameVar:', nameVar);

// let

let nameLet = 'Jen';
// You cannot redefine a variable, you will get an error
// let nameLet = 'Ellie';
// You can still reassign
nameLet = 'Julie';
console.log('nameLet:', nameLet);


// const

const nameConst = 'Frank';
// You cannot redefine a variable, you will get an error
// const nameConst = 'Gunther';
// You cannot reassign a variable either
// nameConst = 'Tommy';
console.log('nameConst:', nameConst);


// notes: 
// const will be our default unless we need to reassign

// Block Scoping
// With const and let, if a variable is defined within a code block it cannot be accessed outside of that block

const fullName = 'Awilda Couverthier';
let firstName;

if (fullName) {
	firstName = fullName.split(' ')[0];
	console.log(firstName);
}

console.log(firstName);