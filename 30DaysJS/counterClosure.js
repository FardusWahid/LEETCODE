function CreateCounter(n) {
  return function () {
    return n++;
  };
}

const counter = CreateCounter(10);

for (i in [...Array(10)]) {
  console.log(counter());
}
