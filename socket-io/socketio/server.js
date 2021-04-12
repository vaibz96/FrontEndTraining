let app = require("express")();
let http = require("http").Server(app); // to load th elibrary we have to run port number using the module
let io = require("socket.io")(http);


app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

io.on("connection", (socket)=>{
    console.log("Client connected to the application....")

    socket.on("chat message", (msg)=>{
        console.log(msg);
    })
})

http.listen(9090, ()=>console.log('Server running on port 9090'));