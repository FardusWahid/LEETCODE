/** Solution 01 **/

var promisePool = async function(functions, n){
  return new Promise((resolve, reject)=> {
    let i=0;
    let inProgress =0;

    function Callback(){
      if(i === functions.length && inProgress ===0){
        resolve("That's a JOB well done")
      }

      while(i < functions.length && inProgress < n){
        functions[i++]().then(()=> {
          inProgress--;
          Callback();
        })
        inProgress++
      }
    }

    Callback();
  })

}

/** Solution 02 **/

var promisePool2 = async function(functions, n){
  let i = 0;

  async function callback(){
    if(i=== functions.length){
      return
    }
    await functions[i++]()
    await callback()
  }
  const arr = Array(n).fill().map(callback)
  console.log("this is the value of the arr", arr)
  await Promise.all(arr)
}



/*******Tests********/

const sleep = (t) => new Promise((res) => setTimeout(res, t));
promisePool([() => sleep(5000), () => sleep(400)], 1).then(console.log);
promisePool2([() => sleep(500), () => sleep(400)], 1).then(console.log);



/*******Concept & Takeways********/

let arr = ['apple', 'banana', 'monkey', 'evil monkey', "******************"];
let i = 0;
let j = 0;


while (i < arr.length) {
  console.log(arr[i++]);                 //all Works fine & Prints Every value 
 //   i++
//   ++i
}


do {
    console.log(arr[j++])
    // j++
}while(j < arr.length)
//    ++j < arr.length                  //works fine