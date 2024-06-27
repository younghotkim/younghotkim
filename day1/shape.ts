class Person {
  name: string;
}

const jill: { name: string } = {
  //<<객체 정의
  name: "jill", //<<객체 생성
};

const person: Person = jill;
console.log(person);
