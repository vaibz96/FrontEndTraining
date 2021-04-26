let app = require("express")();


app.get("/", (req,res)=>{
	res.send("Welcome to Express Module using Docker");
})

app.listen(9999, ()=>console.log("Service running on port number 9999"));
