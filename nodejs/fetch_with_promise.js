// var obj = new Promise((resolve, reject)=>{
//     reject("Error generated")
//     resolve("Successfully done")
// })

// obj.then().catch

var fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error));
