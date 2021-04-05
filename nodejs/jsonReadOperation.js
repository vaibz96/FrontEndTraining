let fs = require("fs");
fs.readFile("emp.json", (err, data)=>{
    if(!err){
        console.log(data.toString())
        let empString = data.toString()
        let empJson = JSON.parse(empString);
        console.log("EMployee Id is", empJson.id);
        console.log("Employee Name is", empJson.name);
        console.log("Employee salary is", empJson.salary);
    }
})