// function getEmployee(id) {
//   return {
//     name: "John",
//     age: 35,
//     address: "123 st",
//     country: "United States",
//   };
// }

// const { name: fullName, age } = getEmployee(22);

// console.log("employee", fullName, age);

function getEmployeeWorkInfo(id) {
  return [id, "Office St", "France"];
}

const [id, officeAdress] = getEmployeeWorkInfo(33);

console.log("employee", id, officeAdress);
