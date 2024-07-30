const person = { name: "john", age: 30 };
const ob = JSON.stringify(person);
console.log(ob);

const ob1 = JSON.parse(ob);
console.log(ob1);
