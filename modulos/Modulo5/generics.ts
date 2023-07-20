function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25); // OK
//numberArray.push('This is not a number');  // Generates a compile time type check error

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits"); // OK
//stringArray.push(30);                      // Generates a compile time type check error

//Using generic constraints to limit types
type ValidTypes = string | number;

function identity<T extends ValidTypes, U>(value: T, message: U): T {
  //let result: T = value + value;    // Error
  console.log(message);
  return value;
}

let returnNumber = identity<number, string>(100, "Hello!"); // OK
let returnString = identity<string, string>("100", "Hola!"); // OK
//let returnBoolean = identity<boolean, string>(true, "Bonjour!"); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };

console.log(getPets(pets1, "fish")); // Returns 6
//console.log(getPets(pets2, "3")); // Error
