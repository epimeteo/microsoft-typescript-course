//Named Functions
/* 
Named function declarations are loaded into the execution context before any code runs. 
This process is known as hoisting, 
and it means that you can use the function before you declare it.
*/
function addNumbers(x: number, y: number): number {
  return x + y;
}
addNumbers(1, 2);

//Anonymous functions
/*
-Is a function that isn't pre-loaded into the execution context, and only runs when the code encounters it.
-Function expressions are created at runtime and must be declared before they can be called (They aren't hoisted).
-Function expressions represent values so they're usually assigned to a variable or passed to other functions, 
 and can be anonymous,meaning the function has no name.
*/
let sumNumbers = function (x: number, y: number): number {
  return x + y;
};
console.log(sumNumbers(1, 2));

let sum = function (input: number[]): number {
  let total: number = 0;
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
};
console.log(sum([1, 2, 3]));
//Arrow/Lambda functions
/*
-Provide shorthand syntax for defining an anonymous function
-Often used with simple functions and in some event handling scenarios.
*/
// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
  return x + y;
};

// Arrow function
/*
Try calling the function by entering addThreeNumbers(10, 20). 
TypeScript raises the error Expected 3 arguments but got 2. An argument for 'z' was not provided. 
When it runs, the function returns NaN because the third argument was passed as undefined, 
making the calculation invalid.

What happens when you enter addThreeNumbers(10, 20, 30, 40)? 
TypeScript raises the error Expected 3 arguments but got 4. 
When it runs, the fourth argument drops off and the function returns 60.
*/
let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;

/*
TypeScript compiler verifies:
    1. A value has been provided for each parameter.
    2. Only parameters that the function requires are passed to it.
    3. The parameters are passed in the order in which they're defined in the function.
 */
//Required parameters
function addNumbersP1(x: number, y: number): number {
  return x + y;
}
addNumbersP1(1, 2); // Returns 3
//addNumbersP1(1);    // Returns an error

//Optional parameters
function addNumbersPO1(x: number, y?: number): number {
  if (y === undefined) {
    return x;
  } else {
    return x + y;
  }
}

addNumbersPO1(1, 2); // Returns 3
addNumbersPO1(1); // Returns 1

//Default parameters
// If a value is passed as an argument to the optional parameter,
// that value will be assigned to it. Otherwise, the default value will be assigned to it.
let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;
subtractThreeNumbers(10, 20); // returns -110 because 'z' has been assigned the value 100
subtractThreeNumbers(10, 20, 15); // returns -25

//Rest parameters
let addAllNumbers = (
  firstNumber: number,
  ...restOfNumbers: number[]
): number => {
  let total: number = firstNumber;
  for (let counter = 0; counter < restOfNumbers.length; counter++) {
    if (isNaN(restOfNumbers[counter])) {
      continue;
    }
    total += Number(restOfNumbers[counter]);
  }
  return total;
};

addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2
//addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5

//Deconstructed object parameters
/*
Function parameters are positional and must be passed in the order in which they're defined in the function. Positional parameters can make your code less-readable when calling a function with multiple parameters that are optional or the same data type.
To enable named parameters, you can use a technique called deconstructed object parameters. This technique enables you to use an interface to defined named, rather than positional, parameters in your functions.
*/

interface Message {
  text: string;
  sender: string;
}

function displayMessage({ text, sender }: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({ sender: "Christopher", text: "hello, world" });

// Define function types

/*
You can define a function type using a type alias or an interface. 
Both approaches work essentially the same so it's up to you to decide which is best:

    1. An interface is better if you want to have the option of extending the function type. 
    2. A type alias is better if you want to use unions or tuples.
*/

type calculator = (x: number, y: number) => number;
// interface Calculator {
//     (x: number, y: number): number;
// }

let sumaNumbers: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;

let doCalculation = (operation: "add" | "subtract"): calculator => {
  if (operation === "add") {
    return sumaNumbers;
  } else {
    return subtractNumbers;
  }
};
console.log(doCalculation("add")(1, 2));
console.log(sumaNumbers(1, 2));
console.log(subtractNumbers(1, 2));
