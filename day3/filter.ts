const filterItems = [
  { name: "john", age: 20 },
  { name: "linda", age: 22 },
  { name: "tom", age: 40 },
];

const results = filterItems.filter((item, index) => {
  console.log(index);
  return item.name === "john";
});

console.log(results);
