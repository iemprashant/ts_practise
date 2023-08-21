abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
}

// error: cannot create an instance of an abstract class
// Abstract classes are blueprint , they are used for extending only and cannot be used to create object

// const hc = new TakePhoto("tst", "test"); -----------> Uncomment to check error here 
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public bust: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}
