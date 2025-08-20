async function sleep(time){
    await new Promise((resolve, reject)=> setTimeout(resolve, time))
    // return new Promise((resolve, reject)=> setTimeout(resolve,time ))
} 


/***************TESTING*************/
let t = Date.now()
sleep(100).then(()=> console.log(Date.now()-t))





/**************THEORYTICAL-BACKGROUND***************/
const promise = new Promise(callback)

function callback(resolve, reject){                                    //1st one is always resolve 2nd one is reject 
    setTimeout(() => resolve({name:"Lua",author:"Fardus"}), 2000);    //this data'll appear in parameter then((res)=> ... )
    //setTimeout(()=> reject("Error 500"), 2000)                    //.catch((that__String)=> console.log(that__String))
}

promise
.then((response)=> console.log(response))
.catch((error)=> console.log(error))
.finally(()=> console.log("I'll run if a promise is resolve or rejected"))


/*******async funtion returns Promise by default******/

async function Test(){                                  //every return type is Promise
    return 'Hello Suckers'
}


async function Helper() {
    const response = await Test()            //value
    const response2 = Test()                //Promise
    Test().then((response)=> console.log(response))         
    console.log(response, response2)          
}Helper()
