//Declare a generic interface
interface Identity<T, U> {
  value: T;
  message: U;
}

let returnNumber0: Identity<number, string> = {
  value: 25,
  message: "Hello!",
};
let returnString2: Identity<string, number> = {
  value: "Hello!",
  message: 25,
};
//Declare a generic interface as a function type
interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, "Hello!"); // OK
//let returnString1 = processor('Hello!', 100);   // Type check error

//Declare a generic interface as a class type
interface ProcessIdentiti<T, U> {
  value: T;
  message: U;
  process(): T;
}
class processIdentiti<X, Y> implements ProcessIdentiti<X, Y> {
  value: X;
  message: Y;
  constructor(val: X, msg: Y) {
    this.value = val;
    this.message = msg;
  }
  process(): X {
    console.log(this.message);
    return this.value;
  }
}
let procesor = new processIdentiti<number, string>(100, "Hello");
procesor.process(); // Displays 'Hello'
//procesor.value = '100';       // Type check error

//Define a generic class
class processIdent<T, U> {
  private _value: T;
  private _message: U;
  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }
  getIdentity(): T {
    console.log(this._message);
    return this._value;
  }
}
let prozesor = new processIdent<number, string>(100, "Hello");
prozesor.getIdentity(); // Displays 'Hello'
