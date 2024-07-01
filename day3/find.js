const items = [
    { name: "john", age: 20 },
    { name: "linda", age: 22 },
    { name: "tom", age: 40 },
];
const john = items.find((item) => {
    return item.name === "john";
});
console.log(john);
