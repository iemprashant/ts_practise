function addTwo(num) {
  // num is any and which is not a good practice
  return num + 2;
}

addTwo(5);

function addTwoUpdated(num: number): number {
  // infer num :number
  return num + 2;
}

addTwoUpdated(5);

function signUpUser(name: string, email: string, isPaid: boolean) {}

let isLoginUser = signUpUser("abc", "email", true);

function getValue(myVal: number) {
  if (myVal > 5) {
    return true;
  }
  return "200 Ok";
}

// Arrow function

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "supermanhttps://www.youtube.com/"];

// typescript is  aware of the context it is coming up

heros.map((hero) => {
  return `hero is ${hero}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}
// Some functions never return a value:
// The never type represents values which are never observed.
// In a return type, this means that the function throws an exception or terminates execution of the program.

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}
