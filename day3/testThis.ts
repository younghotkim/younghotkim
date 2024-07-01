function MyFunction(message: string) {
  console.log(this);
}

MyFunction();
let test = new MyFunction();
