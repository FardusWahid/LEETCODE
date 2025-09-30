// var TimeLimitedCache = function () {
//   this.cache = new Map();
// };

// TimeLimitedCache.prototype.set = function (key, value, duration) {
//   const aleadyExist = this.cache.get(key);
//   if (aleadyExist) clearTimeout(aleadyExist.id);
//   const id = setTimeout(() => {
//     console.log(`${key} cache Expired after ${duration/1000}sec! remaining: ${this.cache.size -1}`);

//     this.cache.delete(key);
//   }, duration);
//   this.cache.set(key, { value, id });
//   return Boolean(aleadyExist);
// };

// TimeLimitedCache.prototype.get = function (key) {
//   if (this.cache.has(key)) return this.cache.get(key).value;
//   return -1;
// };

// TimeLimitedCache.prototype.count = function(){
//   return this.cache.size
// }

// /*****TESTS*****/
// var obj = new TimeLimitedCache();
// obj.set(1, 42, 1000);
// obj.set("xipla", 1000000, 2000);
// obj.set("xipla", 1000000, 5000);
// obj.set("xipla", 1000000, 5000);

// obj.set("xipla", 1000000, 10000);

// console.log(obj.get(1));
// console.log(obj.get("xipla"));
// console.log(obj.count())

/*****************WITH CLASS****************/

class TimeLimitedCache {
  cache = new Map();

  set(key, value, duration) {
    const aleadyExist = this.cache.get(key);

    if (aleadyExist) clearTimeout(aleadyExist.value);

    const id = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, id });
    return Boolean(aleadyExist)
  }

  get(key) {
    if(this.cache.has(key)) return this.cache.get(key).value
    return -1
  }

  count() {
    return this.cache.size;
  }
}

/*****TESTS*****/
var obj = new TimeLimitedCache();
obj.set(1, 42, 1000);
console.log(obj.set(1, 42, 1000))
obj.set("xipla", 1000000, 2000);
obj.set("xipla", 1000000, 5000);
obj.set("xipla", 1000000, 5000);

obj.set("xipla", 1000000, 10000);

console.log(obj.get(1));
console.log(obj.get("xipla"));
console.log(obj.count());
console.log(obj.get("torpido"));

