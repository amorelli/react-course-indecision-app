// ES6 arrow functions do not have access to 'arguments' array, which returns the arguments passed in to the function

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

// ES5 functions bind their own 'this' variable, whereas ES6 arrow functions do not, they use the 'this' binding of the parent scope.
// When we create a function on an object property, 'this' value is bound to that object, however when we define an anonymous function,
// like the one below, there is no 'this' value, and it is set to undefined. One workaround is to set 'that = this', and we can access 'that' in
// our nested functions.
// Arrow functions use 'this' value of the context in which they are created, so use their parent's value.
// However, when creating a method, use ES5 function, else arrow function won't bind 'this' value equal to the object, 
// will use global scope (undefined).
const user = {
  name: 'Adam',
  cities: ['Raleigh', 'Baltimore', 'Boston'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
};
console.log(multiplier.multiply());