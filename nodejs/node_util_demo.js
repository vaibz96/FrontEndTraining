// var obj = require("util");
// let name = "Rah Deep";
// age = 21;
// let empInfo = {"id":100, "name":"Ravi Kumar", "salary":12000, "skill":["C", "Java", "Python"]}
// var formatDetails = obj.format("My name is %s and age is %d ", name, age);
// var formatJsonData = obj.format("Employee details %j ", empInfo);
// console.log(formatDetails);
// console.log(formatJsonData);
// console.log(`My name is${name}, My age is ${age} json data ${empInfo.id}`);


// var util = require('util');
// var n = 10;
// var obj = new Date();
// console.log(util.isPrimitive(n));
// console.log(util.isObject(obj));
// console.log(util.isString("Ravi"));
// console.log(util.isString(n));


// var util = require('util');
// var fs = require('fs')
// // var empInfo = require("Employee");


// let emp = new Employee(1, "Ravi", 15000);
// let emp1 = {"id":100, "name":"Ravi"}
// console.log(util.inspect(Employee))
// console.log(util.inspect(emp))
// console.log(util.inspect(emp1))
// console.log(util.inspect(empInfo))
// console.log(util.inspect(fs))



var util = require('util');

var empInfo = require("./empInfo");

console.log(util.inspect(empInfo, {showHidden:true}))