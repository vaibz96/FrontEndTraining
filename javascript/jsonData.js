
//convert the 
var empObject = {id:100, name:"Ramesh", salary:12000};

document.write("Employee Object <br/>");
document.write("Employee ID is "+empObject.id);
document.write("<br/>Employee Name "+empObject.name);
document.write("<br/>Employee Salary is "+empObject.salary);
document.write("<br/>")

//convert the data into string format
var empString = JSON.stringify(empObject);
document.write("<br/>")
document.write("Employee Object in string format<br/>");
document.write("<br/>")
document.write(empString);
document.write("<br/>Employee ID is "+empString.id);
document.write("<br/>Employee Name "+empString.name);
document.write("<br/>Employee Salary is "+empString.salary);
document.write("<br/>")

//convert the data into json format
var empJson = JSON.parse(empString);
document.write("<br/>")
document.write("Employee Object in json format<br/>");
document.write("<br/>")
document.write(empString);
document.write("<br/>Employee ID is "+empJson.id);
document.write("<br/>Employee Name "+empJson.name);
document.write("<br/>Employee Salary is "+empJson.salary)