setTimeout(function(){
    console.log("Welcome to Async function using NOde JS")
}, 2000);


setTimeout(()=>console.log("Welcome to Async function using arrow"), 1000);

console.log("Normal Statement - 1st")
console.log("Normal Statement - 2nd")


setInterval(function() {
    console.log("normal function again and again")
}, 2000);

setInterval(()=>console.log("Arrow function again and again"), 1000)
console.log("Normal Statement - 2nd")