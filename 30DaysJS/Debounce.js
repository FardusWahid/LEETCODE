//Prevents Double Click/Double api calls useful for Search feature

var debounce = function (fn, t) {
  let id;
  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), t);
  };
};



/*****TEST*******/
const log = debounce(console.log, 100);
log("Hello");
log("Hello");
log("Hellokk");
log("Hello sss");
