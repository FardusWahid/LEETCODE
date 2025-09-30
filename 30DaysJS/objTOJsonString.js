const a = {
    a: 20,
    like: 30000,
    comments: 2000,
    name: "Fardus wahid"
}

console.log()

let b = [1, 2, 3, 4, 5]

let value = b.map((target)=> JSON.stringify(target))

console.log(`[${value.join(",")}]'`)