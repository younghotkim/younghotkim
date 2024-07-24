console.log("require does not have to come on the top");

module.exports = "find me";

require("./var");

console.log("require.cache :)");
console.log(require.cache);
console.log("require.main :)");
console.log(require.main === module);
console.log(require.main.filename);
