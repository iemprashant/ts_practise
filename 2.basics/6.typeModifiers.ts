class User {
  public email: string;
  private name: string;
  readonly city: string = "Jaipur";
}

// A better way to create

class UserBetter {
  private _counterCount = 1;
  protected _protectedCounterCount = 1;

  readonly city: string = "Jaipur";
  constructor(public email: string, private name: string) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._counterCount;
  }
  // A 'set' accessor cannot have a return types annotation
  set setCourseCount(value: number) {
    if (value < 0) {
      throw new Error("Course count must be greater than zero");
    }
    this._counterCount = value;
  }
  // private method same as private variables
  private deleteToken() {
    console.log("Deleting token");
  }
}

// It cannot acquire the private properties of User
class subUser extends UserBetter {
  isFamily: boolean = true;
  changeCourseCount() {
    this._protectedCounterCount; // can access the protected properties of parent class inside the class but not outside the class itself
    // this._counterCount = 4; can't access the private properties of parent class
  }
}

const dummyUser = new UserBetter("zyaa", "xyz");
