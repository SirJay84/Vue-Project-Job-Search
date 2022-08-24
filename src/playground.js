//ES6 spreading syntax - copy elements from other arrays into new arrays while getting rid of original array structure:
const fruits = ["Apple", "Banana", "Orange"];
const vegetables = ["Cucumber", "Radish"];

// console.log([fruits, vegetables]);
console.log([...fruits, ...vegetables]);