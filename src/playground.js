//ES6 spreading syntax - copy elements from other arrays into new arrays while getting rid of original array structure:
// const fruits = ["Apple", "Banana", "Orange"];
// const vegetables = ["Cucumber", "Radish"];

// // console.log([fruits, vegetables]);
// console.log([...fruits, ...vegetables]);

// const developer = {
//   salary: 100000,
//   experience: 4.5,
//   techStack: ["Vue","HTML","CSS"],
//   lookingForWork: true,
//   doubleSalary() {
//     this.salary = this.salary * 2;
//     this.lookingForWork = false;
//   }
// };

// console.log(developer.salary);
// console.log(developer.lookingForWork);

// developer.doubleSalary();

// console.log(developer.salary);
// console.log(developer.lookingForWork);

// export const evenOrOdd = (number) => {
//   if(number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };

// export const multiply = (num1, num2) =>  num1 * num2;

// The map method on an array:
const numbers = [1,2,3,4,5];

// function inside a map method.
// const squares = numbers.map((number) => {
//   return number * number;
// });

//Or
const squares = numbers.map((number) => number * number);

console.log(squares);


