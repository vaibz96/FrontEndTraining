let network = require("net");
let client = network.connect({port:9090, host:"localhost"});
let reader = require("readline");
let r1 = reader.createInterface({
    input:process.stdin,
    output:process.stdoutput
});

client.on("connect", ()=>{
    console.log("Connected to server")
    
})

r1.on("line", (msg)=>{
    client.write(`Client sent: ${msg}`)
})