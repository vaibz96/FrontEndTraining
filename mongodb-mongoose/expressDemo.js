let app = require("express")();

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({urlencoded:true}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/storeCDetails", (req, res)=>{
    /*
    retrieve data from body part
    connected to database
    store in database
    res.sendFile(__dirname+"/index.html")
    */
})

app.post("/deleteCDetails/:cid", (req, res)=>{
    /*
    retrieve data from body part
    connected to database
    store in database
    res.sendFile(__dirname+"/index.html")
    */
})

app.listen(9090, ()=>console.log("running.."))