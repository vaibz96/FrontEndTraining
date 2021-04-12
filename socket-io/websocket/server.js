var app = require('express')();

// express web-socket is used for creating reference ws module
var ws = require("express-ws")(app);

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.ws("/", (socket, res)=>{
    socket.send("message from server....")
})

app.ws("open", (data)=>{
    console.log(data.toString);
})

app.listen(9090, ()=>console.log("Websocket server running  on number 9090"));