function createUser({ name: string, isPaid: boolean }): {} {
  return {};
}

let newUser = { name: "xyz", isPaid: false, email: "email" };

// here extra value of email is passed to the param object
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "typescript", price: 0 };
}
//  type alias
type User = {
  readonly id: string; // readonly type is for no re-assignment
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // "?" is used for optional
};

function createUserUpdated(user: User): User {
  return { id: "nasd", name: "prashant", email: "sddc", isActive: true };
}

type cardName = {
  name: string;
};

type cardNumber = {
  number: number;
};

type cardDetails = cardName & cardNumber;
