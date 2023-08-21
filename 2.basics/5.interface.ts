interface InterfaceUser {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;

  startTrail: () => string;
}

// Reopening of the interface , where we add more properties to the interface
interface InterfaceUser {
  githubToken?: string;
}

const prashant: InterfaceUser = {
  dbId: 234,
  userId: 123,
  email: "email@gmail.com",
  startTrail: () => "startTrail ",
};

// inheritance supported by the interface
interface Admin extends InterfaceUser {
  role: "admin" | "TA" | "learner";
}

// Differences Between Type Aliases and Interfaces
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
// Almost all features of an interface are available in type,
// the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
