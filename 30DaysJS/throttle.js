//work the first time then 100ms later works again (Rate limiting) [Run from the even Queue]

var throttle = function (fn, t) {
  let Qeue = false;
  let newargs = undefined;
  return async function (...args) {
    newargs = args;
    if (Qeue) {
    } else {
      fn(...args);
      setTimeout(Callback, t);
    }

    function Callback() {
        
    }
  };
};

const throttled = throttle(console.log, 100);
throttled("log");
throttled("log ass");
throttled("log fucking");
