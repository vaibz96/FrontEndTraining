let network = require("net");


let server = network.createServer();

server.on("connection", (socket)=>{
    console.log("New Client connected...");
    socket.on("data", (msg)=>{
        console.log(msg.toString()) // receive the data from server
    })
});

server.listen(9090, ()=>console.log("server is running on port number 9090"))