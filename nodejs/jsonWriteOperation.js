let fs = require('fs');

var empObj = '{"id":101, "name":"Tim", "salary":12000}'

//convert string to JSon

var empJson = JSON.parse(empObj);
console.log("Id is "+empJson.id);

// convert Json to string
var empString = JSON.stringify(empJson);

fs.writeFile("emp.json", empString, {flag:'a'}, (err)=>{
    if(!err){
        console.log("Records stored successfully")
    }
})