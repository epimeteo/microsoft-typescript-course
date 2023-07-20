/*
Overview of types in TypeScript
    -The main benefit of TypeScript is that it enables you to add static types to your JavaScript code.
    -Types place static constraints on program entities, such as functions, variables, and properties, so that compilers and development tools can offer better verification and assistance
Primitive types
    -The primitive types are the boolean, number, string, void, null, and undefined types along with user-defined enumeration or enum types
    -The void type exists purely to indicate the absence of a value.
    -The null and undefined types are subtypes of all other types.
        -Examples:
            let z: number = 123.456;
            let big: bigint = 100n;
            let firstName: string = "Mateo";
            let flag: boolean = true;
            enum ContractStatus {
                        Permanent = 1,
                        Temp,
                        Apprentice
                    }
            let employeeStatus: ContractStatus = ContractStatus.Temp;
Object types
    -The object types are all class, interface, array, and literal types.
Any and unknown types
    -The any type is the one type that can represent any JavaScript value with no constraints.
    -Type safety is one of the main motivations for using TypeScript. You should avoid using any when it's not necessary.
    -The unknown type is similar to the any type in that any value is assignable to type unknown.
Type assertion
    -A type assertion tells TypeScript you've performed any special checks that you need before calling the statement             
    -A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. It has no runtime effect and is used purely by the compiler       
    -Type assertions have two forms. One is the as-syntax:
        (randomValue as string).toUpperCase();
    -The other version is the "angle-bracket" syntax:
        (<string>randomValue).toUpperCase();     
Type guards 
    -You may be familiar with using typeof and instanceof in JavaScript to test for these conditions. 
    -TypeScript understands these conditions and will change type inference accordingly when used in an if block.                
        *Type*	    *Predicate*
        string	    typeof s === "string"
        number	    typeof n === "number"
        boolean	    typeof b === "boolean"
        undefined	typeof undefined === "undefined"
        function	typeof f === "function"
        array	    Array.isArray(a)
Union and intersection types in TypeScript
    -Union and Intersection types help you handle situations where a type is composed of two or more possible types.                
    -A union type uses the vertical bar or pipe (|) to separate each type.
        Example:
            let multiType: number | boolean;
            multiType = 20;         //* Valid
            multiType = true;       //* Valid
            multiType = "twenty";   //* Invalid
Literal types
    -A literal is a more concrete subtype of a collective type.
    -There are three sets of literal types available in TypeScript: string, number, and boolean.  

COLLECTION TYPES IN TYPESCRIPT
    -The object types are all class, interface, array, and literal types (anything that isn't a primitive type.)               
Arrays
    -Type of the elements followed by square brackets ([ ])            
    -The second way uses a generic Array type, using the syntax Array<type>:
        Example:                
            let list: number[] = [1, 2, 3];
            let list: Array<number> = [1, 2, 3];    
Tuples
    -Array that contains values of mixed types.         
    -The order of the values must match the order of the types.
        Example
            let person1: [string, number] = ['Marcia', 35];       //Valid
            let person1: [string, number] = ['Marcia', 35, true]; //invalid
            let person1: [string, number] = [35, 'Marcia'];       //invalid

*/

//Excercise enum type
console.log("Ejercicio de enum type");
enum ContractStatus {
  Permanent = 1, //If you remove/change the mark (1) it will start from 0 for default.
  Temp,
  Apprentice,
}
let employeeStatus: ContractStatus = ContractStatus.Temp;

console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
console.log("<----------------------------------->");

//Excercise type assertions
console.log("Ejercicio de type assertions");
let randomValue: unknown = 10;

randomValue = true;
randomValue = "Mateo";

if (typeof randomValue === "string") {
  console.log((randomValue as string).toUpperCase()); //* Returns MATEO to the console.
} else {
  console.log("Error - A string was expected here."); //* Returns an error message.
}
//TypeScript now assumes that you have made the necessary check.
//The type assertion says that randomValue should be treated as a string and then the toUpperCase method can be applied.
console.log("<----------------------------------->");
//Union types
console.log("Ejercicio de Union types");

function add(x: number | string, y: number | string) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.concat(y);
  }
  throw new Error("Parameters must be numbers or strings");
}
console.log(add("one", "two")); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add("one", 2)); //* Returns error
console.log("<----------------------------------->");
//Intersection types
console.log("Ejercicio de Intersection types");
interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
  employeeID: 12345,
  age: 34,
  stockPlan: true,
};
console.log("<----------------------------------->");
//Literal types
console.log("Ejercicio de Literal types");
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
//myResult = "failure";       //* Invalid

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
//diceRoll = 7;    //* Invalid
console.log("<----------------------------------->");
