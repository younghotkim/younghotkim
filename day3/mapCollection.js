const mappedEmp = new Map();
mappedEmp.set("Linda", { fullName: "Linda Johnson", id: 1 });
mappedEmp.set("Jim", { fullName: "Jim Thomson", id: 2 });
mappedEmp.set("Pam", { fullName: "Pam Dryer", id: 4 });

console.log(mappedEmp);
console.log("get", mappedEmp.get("Jim"));
console.log("size", mappedEmp.size);

for (let [key, val] of mappedEmp) {
  console.log("iterate", key, val);
}
