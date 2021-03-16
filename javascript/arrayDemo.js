var obj1 = [100, 200, 300, 400, 500, 600];
var obj2 = new Array(100, 200, 300, 400, 500, 600);

document.write("<br/>");
document.write(obj1);

document.write("<br/>");
document.write(obj2);


//anonymous function
obj1.forEach(function(n){
    document.write("<br/>"+n)
})

//arrow function
document.write("<br/> Display the value from array using arrow function<br/>")
obj1.forEach(v=>document.write("<br/>"+v));
