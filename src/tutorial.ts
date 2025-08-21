interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 123,
  title: "deep work",
  author: "cal newport",
  genre: "self-help",

  printAuthor() {
    console.log(this.author);
  },

  printTitle(message) {
    return `${this.title} ${message}`;
  },
  //first option
  // printSomething: function (someValue) {
  //   return someValue;
  // },

  //second option
  // printSomething: (someValue) => {
  //   console.log(deepWork);

  //   return someValue;
  // },

  //third option

  printSomething(someValue) {
    return someValue;
  },
};

deepWork.printSomething(34);
