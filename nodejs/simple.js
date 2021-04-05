// module.exports.a = "Weclome to Node JS modeule Example";
// module.exports.b = "Another simple example";



// module.exports.dis = function(){
//     return "Welcome to Node JS example"
// }


// exports.add = function(a, b){
//     return a+b;
// }

let sayHello = (name) => "Welcome to user "+ name;


// exports.sayHi = sayHello;


class Employee {
    display(){
        console.log("Display function");
    }
}

// exports.Employee=Employee;
module.exports = {Employee, sayHello}
