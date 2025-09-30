function crateHelloWorld(){
    return function(...args){
        return "Hello World"
    }
}
const f = crateHelloWorld()
console.log(f())