let app = require("express")();

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

let port = 9090;

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/login.html")
})

app.post("/checkLogin", (req, res)=>{
    let user = req.body.user
    let pass = req.body.pass

    if(user=="Raj" && pass=="Kumar"){
        res.send("Successfully Login")
    }else{
        res.send("failure login")
    }
    res.send("post method called...."+user)
})

app.listen(port, ()=>console.log(`Server running on port number ${port}`));