// var obj = new Promise((resolve, reject)=> {
//     reject("Error generated")
//     //resolve("Promise resolved") 
// });

// // obj.then(res=>console.log("Resolve")).catch(error=>console.log("rejected"));
// obj.then(res=>console.log(res)).catch(error=>console.log(error));

var con = 1;

let emp = {"id": 100, "name":"Ramesh", "age":21}

var obj = new Promise((resolve, reject)=>{
    if(con==1){
        resolve(emp)
    }else{
        reject({"msg":"Error generated"})
    }
});

obj.then(result=>console.log(result)).catch(error=>console.log(error));