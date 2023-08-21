let tUser: [string, number, boolean];

tUser = ["hc", 131, true];
// In tuples order with types also matters.
// it is useful for API calls

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [112, "mail id"];

// it works as an array with the ordering restrictions with types
// we can perform any array operations.

newUser.push(123);
