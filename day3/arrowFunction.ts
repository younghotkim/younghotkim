const myFunc = (message: string, title: string, age: number): boolean => {
  console.log(message);
  console.log(title);
  console.log(age);
  return true;
};

myFunc("hello", "myFirstArrowFunc", 30);

const func = () => console.log("func");
const func1 = () => ({ name: "dave" });
const func2 = () => {
  const val = 20;
  return val;
};

console.log(func());
console.log(func1());
console.log(func2());
