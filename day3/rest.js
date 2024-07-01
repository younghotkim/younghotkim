function doSomething(a, ...others) {
  //... others = [2,3,4,5,6,7];
  console.log(a, others, others[others.length - 1]);
  // 배열 제일 마지막 값을 얻을때 length - 1
}

doSomething(1, 2, 3, 4, 5, 6, 7);
