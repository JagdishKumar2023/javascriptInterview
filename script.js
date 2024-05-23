// Quesion :- 1

// What is scope in javascript ?

// Gobal - accessible anywhere
// let globalVariable = "global";

// greet();

// function greet() {
//   // Funtion - acessblile inside function only
//   let functionVarible = "function";
//   if (true) {
//     //Block - acessbile inside block only
//     let blockVariables = "block";
//     console.log(blockVariables);
//   }
//   console.log(functionVarible);
//   console.log(globalVariable);
// }

// Quesion :- 2
// "var" is implicit type of varible when a variable is declared without var let or  const keywords

// function number() {
//   numberTen = 4;
//   console.log(numberTen);
// }

// number();

//Question :- 3
// What is Hositing in Javascript ?
//Ans: Hositing is a Javascript behavior where functions and variable declaration are moved to the top of their respective scope during the compilation phase

// function Hositing

//Function hositing
// myFunction();
// function myFunction() {
//   console.log("Hi JAGDISH");
// }

// //Variable Hoisting
// x = 10;
// console.log(x);

// var x;

// What is JSON

//JSON(Javscript Object Notation) is a lightweight data interchange format

//Json consist of key-value pairs

//  {
//   "name": "Jonhn Doe",
//   "age": 30,
//  }

//Chapter2 : Variable and Datatypes

//Question : 3
//What is variable? What is the difference between let var const?// V.IMP

//-> Variable are used to store data
// var count = 10

//Using Var
// var create a function-scoped variable

// function expample() {
//   if (true) {
//     var count = 5;
//     console.log(count);
//     // outPut: 10
//   }
// console.log(count);
// }

// expample();

// //Using Let
// //let create a block variable

// function expampleOfLet() {
//   if (true) {
//     let count = 15;

//     console.log(count);
//   }
// }

// expampleOfLet();

// //Using Const
// //const can be assigined only once and its value cannot be changed afterwards

// const z = 10;
// z = 30;
// console.log(z);

// Question: 4
// What is Loop? What are the type of Loops in Javascript?
//Ans: A loop is a programming way to run a set of instrution(code) repeatedly until a certain condition is met

// Javascript Loop:-
// 1) for, 2)while, 3)do-while, 4) for...of, 5) for...in

// Question: 5
// What is the difference between for, while, and do-while loops ?

//USING FOR LOOP
// Ans: For Loop allows to iterate a block of code a specific number  of times

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

//USING WHILE LOOP
//While loop execute a block of code while a certain condition is true

// let j = 5;
// while (j <= 15) {
//   console.log(j);
//   j++;
// }

//USING DO-WHILE LOOP
// The do-while loop is similar to the while loop except that the block of code is executed atleast once even if the condition is false

let k = 0;

do {
  console.log(k);
  k++;
} while (k > 1);
