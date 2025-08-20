function memoize(fn) {
  const caches = {};

  return function (...args) {
    const key = JSON.stringify(args);       //args[] cannot be a key of hasmap/object

    if (key in caches) {                    // if there's any {'[...args]': 200 } 
      return caches[key];
    }

    caches[key] = fn(...args);              // set {'[...args]': 200 } then return 200
    return caches[key];
  };
}




/**********TESTING**********/

let callCount = 0;
const memoizeFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});



for (const i in [...Array(10)]) {             //in prints INDEX. every i undefined
  console.log(memoizeFn(5, 11));
}
          /****Alternate****/

for(const j of [...Array(10).keys()]){        //of prints VALUE. every j index
  console.log(memoizeFn(10, 25))
}


console.log(`total function call ${callCount} ${callCount > 1 ? 'times' : 'time'}`);                       //should be 2


// eventually caches = {
//   '[5, 11]': 16,
//   '[10, 25': 35
// }




/******************NOTES*****************/