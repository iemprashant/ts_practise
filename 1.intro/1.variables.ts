let greetings: string = "hello world!";

let myNum = 6;

// greetings= 6  // gives number cannot be assigned to string type error

// using types will help in getting suggestions of build in functions for the same type.

console.log(greetings);

// number
let userId: number = 12345.2;

// boolean

let isLoggedIn: boolean = false;

//any
// using any is not a good practice

let hero: any;

function getHero() {
  return "this is a hero";
}

hero = getHero();
