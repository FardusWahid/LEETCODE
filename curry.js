let curry = function (fn) {
  return function curried(...args) {

    if (args.length === fn.length) {            //if csum(a,b,c,d) then it's just that...
      return fn(...args);
    } 
    else
      {
      return function (...newArgs) {
        return curried(...args, newArgs);      //if csum(a,b)(c)(d) then recursion until all the a, b, c, d (fn.length) is there
      };
    }
  };
};

/**********TESTING**********/
function sum(a, b, c, d) {
  return parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);
}
const csum = curry(sum);
console.log(csum(1, 2, 5)(2)); //3







/**********SOLUTION-02**********/


let curry2 = function(fn){
  let nums=[]
  return function curried2(...args){
    nums=[...nums, ...args]
    if(nums.length==fn.length){
      const result = fn(...nums)
      nums=[]
      return result
    }else{
      return curried2
    }

  }
}

/**********TESTING**********/
function sum2(a, b, c, d) {
  return parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);
}
const csum2 = curry2(sum2);
console.log(csum2(1, 2, 5)(2)); //3
