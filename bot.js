const fire = new Map();
fire.set("name", "Fardus")
let flar = {
  name: "Fardus wahid",
  weight: "80KG"
}
console.log(fire.size)
console.log(fire.keys())
console.log(Object.values(flar))

const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}


 
function test(){
  if(false) return 0
  return -1
}
console.log(test())
// class Cat {
//    name;
//   constructor(name){
//     this.name = name
//   }

// }

// const cat1 = new Cat("Meow")
// console.log(cat1.name)