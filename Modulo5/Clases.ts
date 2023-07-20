//To create a class, define its members: properties, a constructor, accessors, and methods.
interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: "left" | "right"): string;
}
class Car implements Vehicle {
  // Properties
  private static numberOfCars: number = 0; // New static property
  private _make: string;
  private _color: string;
  private _doors: number;
  // Constructor
  constructor(make: string, color: string, doors = 4) {
    // Tenga en cuenta que se usa la sintaxis className.propertyName en lugar de this.(static property)
    Car.numberOfCars++; // Increments the value of the static property
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }
  // Accessors
  get make() {
    return this._make;
  }
  set make(make) {
    this._make = make;
  }
  get color() {
    return "The color of the car is " + this._color;
  }
  set color(color) {
    this._color = color;
  }
  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }
  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  // This function performs work for the other method functions
  worker(): string {
    return this._make;
  }
  //Tenga en cuenta que se usa la sintaxis className.propertyName en lugar de this.
  public static getNumberOfCars(): number {
    return Car.numberOfCars;
  }
}
let myCar1 = new Car("Cool Car Company", "blue", 2); // Instantiates the Car object with all parameters
/*
Modificador de acceso	    Descripción
public	                    Si no especifica un modificador de acceso, el valor predeterminado es público.
                            También puede establecer explícitamente el miembro en público mediante la palabra clave public.
                            
private	                    Si modifica el miembro con la palabra clave private, 
                            no se puede tener acceso a él desde fuera de la clase contenedora.

protected	                El modificador protected actúa de forma muy similar al modificador private, 
                            con la excepción de que también se puede tener acceso a los miembros declarados protected dentro de las clases derivadas. 
                            (Proporcionaremos más información al respecto más adelante en el módulo).

Definición de propiedades estáticas
  -Todas las instancias de una clase comparten las propiedades y los métodos estáticos.                           
*/

/*
Extend a class using inheritance
    Inheritance enables you to establish relationships 
    and build hierarchies of classes in object composition.

Override a method
    For example, assume that electric cars use a different type of braking system than traditional cars called regenerative braking.
    So, you may want to override the brake method in the Car base class with a method that is specialized for the ElectricCar subclass.
*/
class ElectricCar extends Car {
  // Properties unique to ElectricCar
  private _range: number;
  // Constructor
  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
  }
  // Accessors
  get range() {
    return this._range;
  }
  set range(range) {
    this._range = range;
  }
  // Methods
  charge() {
    console.log(this.worker() + " is charging.");
  }
  // Overrides the brake method of the Car class
  brake(): string {
    return `${this.worker()}  is braking with the regenerative braking system.`;
  }
}

let spark = new ElectricCar("Spark Motors", "silver", 124, 2);
let eCar = new ElectricCar("Electric Car Co.", "black", 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake()); // returns "Spark Motors is braking with the regenerative braking system"

interface Dog {
  id?: number;
  name: string;
  age: number;
  description: string;
}

// async loadDog(id: number): Dog {
//     return await (await fetch('demoUrl')).json() as Dog;
// }

class DogRecord implements Dog {
  id: number;
  name: string;
  age: number;
  description: string;

  constructor({ name, age, description, id = 0 }: Dog) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.description = description;
  }

  //   static load(id: number): DogRecord {
  //     // code to load dog from database
  //     return dog;
  //   }

  save() {
    // code to save dog to database
  }
}
