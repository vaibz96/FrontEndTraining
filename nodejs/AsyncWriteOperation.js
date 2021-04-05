let fs = require('fs');
var msg = " This is Asynchronous message stored through FS module";
fs.writeFile("info1.txt", msg, (err)=>{
    if(!err){
        console.log("Data stored in the file info1")
    }
})

fs.writeFile("info2.txt", msg, (err)=>{
    if(!err){
        console.log("Data stored in the file info2")
    }
})


console.log("done")
console.log("done")