// es5 function ex.
function square(x) {
  return x * x;
}

console.log(square(3));

// const squareArrow = (x) => {
//   return x * x;
// };

// Return is not used. The expression is implicitly returned.
const squareArrow = x => x * x;

console.log(squareArrow(8));

// es6 function ex.
const fullName = 'Jane Smith';

const getFirstName = name => name.split(' ')[0];

console.log(getFirstName(fullName));
