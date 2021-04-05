let obj = require('readline-sync');
let fs = require('fs');


var empObj = { employees: new Array() };

let records = obj.question('Enter the number of records you want to store');

for (let i = 0; i < records; i++) {

    // convert Json to string

    let id = "10"+i

    let name = obj.question("Enter the name");

    let salary = obj.question("Enter the salary");

    empObj.employees.push({id, name, salary});
    
}

var empString = JSON.stringify(empObj);

fs.writeFile("employeesHW.json", empString, {flag:'a'}, (err)=>{
    if(!err){
        console.log("Records stored successfully")
    }
})