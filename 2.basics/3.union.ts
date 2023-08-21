type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};
// assign user value
let prashant: User | Admin = { name: "prashant", id: 121 };

// assign admin value
prashant = { userName: "prashant", id: 121 };

function getDbId(id: number | string) {
  // check for the type before any type specific operations
  if (typeof id === "string") {
    id.toLowerCase();
  } else id.toFixed(2);
}

let data: number[] = [1, 2, 3];
let data2: number[] | string[] = [1, 2, 3]; // array of all numbers
data2 = ["1", "2", "3"]; // array of all strings

let data3: (number | string)[] = [1, 2, "3"]; // array of combination of number or string

let seatAllotment: "side" | "middle" | "window";

seatAllotment = "window"; // can assign only value of above 3 types
