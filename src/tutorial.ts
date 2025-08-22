// type Person = {
//   name: string;
//   age: number;
// };

// let john: Person = { name: "John", age: 30 };

// interface Person {
//   name: string;
//   age: number;
// }

// let john: Person = { name: "John", age: 30 };

// Type alias for a primitive type
type Score = number;
type NumberOrString = number | string;
// Type alias for literal types
type Direction = "up" | "down" | "left" | "right";

// Using the type aliases
let gameScore: Score = 100;
let move: Direction = "up";

interface Person {
  name: string;
  greet(): void;
}

class Employee implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let john = new Employee("John");
john.greet(); // Outputs: Hello, my name is John

const propName = "age";

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };
