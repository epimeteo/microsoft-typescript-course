/*
What is an interface
    -Describe the properties and return types of an object.
    -Interfaces are often the key point of contact between any two pieces of TypeScript code.
    -You can use interfaces to describe an object, naming and parameterizing the object's types, and to compose existing named object types into new ones.
    -Drive consistency across a set of objects because every object that implements the interface operates under the same type definitions.
    -An interface can provide you with a clear understanding of what a function is expecting and what it will return without repeat visits to the documentation
    
    -Example:

    interface Employee {
        firstName: string;
        lastName: string;
        fullName(): string;
    }   
    let employee: Employee = {
        firstName : "Emil",
        lastName: "Andersson",
        fullName(): string {
            return this.firstName + " " + this.lastName;
        }
    }
    employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'

How is an interface different from a type alias?
    -A type alias cannot be reopened to add new properties whereas an interface is always extendable.
    -You can only describe a union or tuple using a type alias.
    type Employee = {
        firstName: string;
        lastName: string;
        fullName(): string;
    }

*/

/*
Declare and instantiate an interface in TypeScript
Property type	  Description	                                                                           Example

Required	      All properties are required, unless otherwise specified.                                firstName: string;

Optional	      Add a question mark (?) to the end of the property name. 
                  Use this for properties that are not required.                                          firstName?: string;  
                  This prevents the type system from raising an error if the property is omitted.	      

Read only	      Add the readonly keyword in front of the property name. 
                  Use this for properties that should only be modified when an object is first created.   readonly firstName: string;

*/

interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string;
}

let myIceCream: IceCream = {
  flavor: "vanilla",
  scoops: 2,
};

console.log(myIceCream.flavor);

function tooManyScoops(dessert: IceCream) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + " is too many scoops!";
  } else {
    return "Your order will be ready soon!";
  }
}

console.log(tooManyScoops({ flavor: "vanilla", scoops: 5 }));

interface Sundae extends IceCream {
  sauce: "chocolate" | "caramel" | "strawberry";
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

let sundada: Sundae = {
  flavor: "vanilla",
  scoops: 2,
  sauce: "caramel",
  nuts: true,
  whippedCream: true,
};

console.log(tooManyScoops(sundada));

/*
Create indexable types
    Indexable types have an index signature that describes the type you can use to index into the object, 
    along with the corresponding return types when indexing.
*/

interface IceCreamArray {
  [index: number]: string;
}

let myIceCreamArray: IceCreamArray;
myIceCreamArray = ["chocolate", "vanilla", "strawberry"];
let myStr: string = myIceCreamArray[0];
console.log(myStr);

/*
Describe a JavaScript API using an interface
*/
const fetchURL = "https://jsonplaceholder.typicode.com/posts";
// Interface describing the shape of our json data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
async function fetchPosts(url: string) {
  let response = await fetch(url);
  let body = await response.json();
  return body as Post[];
}
async function showPost() {
  let posts = await fetchPosts(fetchURL);
  // Display the contents of the first item in the response
  let post = posts[0];
  console.log("Post #" + post.id);
  // If the userId is 1, then display a note that it's an administrator
  console.log(
    "Author: " + (post.userId === 1 ? "Administrator" : post.userId.toString())
  );
  console.log("Title: " + post.title);
  console.log("Body: " + post.body);
}

showPost();
