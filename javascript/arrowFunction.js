var sayHello = function(name){
    return "Welcome "+name;
}


var addNumber = function(a,b){
    var sum = a+b;
    return sum;
}
document.write("<br> Expression Style")
document.write(sayHello("Ravi"));


//arrow function is known as anonymous function
document.write("<br/> Using Arrow Function <br/>")

var sayHi = (name)=> "Welcome "+name;
document.write(sayHi("Ravi"))

var addNumber1 = (a,b) => a+b;

var findLargest = (a,b) =>{
    if(a>b){
        return a;
    }else{
        return b;
    }
}

document.write("Addition of two number using arrow function <br/>")
document.write(addNumber(100,200)+" "+addNumber1(200, 100))
document.write("<br/> Largest of two number is <br/>")
document.write(findLargest(4,7))