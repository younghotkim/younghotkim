namespace OptionalChainingNS {
  interface Wheels {
    count?: number;
  }

  interface Vehicle {
    wheels?: Wheels;
  }

  class Automobile implements Vehicle {
    constructor(public wheels?: Wheels) {}
  }

  const car: Automobile | undefined = new Automobile({
    count: undefined,
  });
  console.log("car ", car);
  console.log("wheels ", car?.wheels);
  console.log("count ", car?.wheels?.count);

  // const count = !car ? 0
  // : !car.wheels ? 0
  // : !car.wheels.count ? 0
  // : car.wheels.count;
}

// value = (조건) ? statement1 : (조건2) ? statement2 : statement3;

// const val1 = undefined;
// const val2 = 10;
// const result = val1 ?? val2;

//null이 아니면 val1 null이면 val2

//3항 연산자!
