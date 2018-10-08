var nameVar = 'Adam';
console.log('nameVar', nameVar);

// Can re-assign but not re-define let variables. i.e. let a = 1; let a = 2; will throw an error.
// However, the code below is fine, because it just re-assigns the variable.
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// Const cannot be re-defined or re-assigned
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// const, let, and var, are all locally scoped. Cannot be accessed outside of the funtion
const getPetName = () => {
  let petName = 'Josie';
  return petName;
}

// Block scoping - let and const are block scoped

// var based variables are function scoped but not block-scoped,
// so can be accessed outside of the if statement. Let and Const cannot.
const fullName = 'Andy Mark';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
}

console.log(firstName);
