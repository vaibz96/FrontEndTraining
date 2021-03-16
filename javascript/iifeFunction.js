(function(){
    document.write("<br/>This IIFE funciton without name");
})();


// Immediate Invoked Function Expression using arrow function
((a,b)=>document.write(a+b))(10,20);