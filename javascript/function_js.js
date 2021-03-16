function add(a, b){
    return a+b;
}

document.write("Normal Function <br/>")
document.write(add(100, 200))


// expression style function
var sum = function addNumber(a,b){
    return a+b
}

document.write("<br/> Expression Style Function </br>")
document.write(sum(20,40));


var sumOfNumber = function (a,b){
    return a+b
}

document.write("<br/> Expression Style Function without name</br>")
document.write(sumOfNumber(20,40));

//call back functions

function sayHello(name, callback){
    document.write("<br/> Welcome, your name is "+callback(fname));
}

var maleInfo = function(fname){
    return "Mr "+fname;
}

var femaleInfo = function(fname){
    return "Miss "+fname
}
sayHello("Raj", maleInfo)
sayHello("Reema", femaleInfo)

// another way for callback function
sayHello("vaibhav", function(fname){
    return "Mr "+fname;
})