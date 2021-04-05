let obj = require("readline");

let r1 = obj.createInterface({    /// create a standard input and standard output
    input:process.stdin,
    output:process.stdout
});


r1.question("Enter the name ", (name)=>{
    r1.question("Enter the name ", (age)=>{
        console.log("Your name is "+name+" and Age is "+age);
        r1.close();
    });
});
