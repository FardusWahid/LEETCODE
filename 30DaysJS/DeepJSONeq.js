// typeof null          => "object"
// typeof array, Object => 'object'

var areDeepEqual = function (o1, o2) {
  if (o1 === null || o2=== null) return o1===o2
  if (typeof o1 !== typeof o2) return false;                  //types
  if (typeof o1 !== "object") return o1 === o2;              //type matches flase:Array, Object
  if (Array.isArray(o1) || Array.isArray(o2)){
      if (String(o1) !== String(o2)) return false;
      for(let i=0; i< o1.length; i++){
        if (!areDeepEqual(o1[i], o2[i])) return false
      }
  }else{                                                  //Both Pure Object
    if(Object.keys(o1).length !== Object.keys(o2).length) return false;
    for(const key in o1){
      if (!areDeepEqual(o1[key], o2[key])) return false
    }
  }


  return true;
};

