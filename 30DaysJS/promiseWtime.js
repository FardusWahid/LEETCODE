/***************Solution 01************************/
let timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const id = setTimeout(() => reject("Time Limit exceeded"), t);
      fn(...args)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
        .finally(() => clearTimeout(id));
    });
  };
};

/***************Solution 01************************/

let timeLimit2 = function (fn, t) {
  return async function (...args) {
    function callback(resolve, reject) {
      const ID = setTimeout(() => reject("Time limit Exceeded"), t);
      fn(...args)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
        .finally(() => clearTimeout(ID));
    }
    return new Promise(callback);
  };
};

/******************TESTING PHASE*********************************/
function fn(time) {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Result from the function"), time)
  );
}

const limited = timeLimit(fn, 100);
limited(150).catch(console.log);

/*SECOND*/
const limited2 = timeLimit2(fn, 200);
limited2(50).then((res)=> console.log(res)).catch((err)=> console.log(err))

/*******Takeways********/
const e = new Error("an error message");
e.name; //Error
e.message; //the message
