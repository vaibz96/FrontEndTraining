let express = require("express"); //load the module
let app= express(); //creating the reference of express module
let port = 9090;
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// get methods
app.get("/", (req,res)=>{
    res.send("Welcome to Express Module");
})

app.get("/aboutus", (req,res)=>{
    res.send("Welcome to About us page");
})

app.get("/contactus", (req,res)=>{
    res.send("Welcome to Contact us page");
})

app.get("/login", (req,res)=>{
    res.send("Welcome to Login page");
})


//passing single value
// http://localhost:9090?name=Ajay

app.get("/singleQuery", (req,res)=>{
    let name = req.query.name;
    res.send("Welcome user "+name);
})

app.get("/multiple", (req,res)=>{
    let id = req.query.id;
    let name = req.query.name;
    let salary = req.query.salary;
    salary = eval(salary)+5000;
    res.send(`Your is is ${id}, name is ${name}, Gross Salary is ${salary}`);
})

app.get("/singlePath/:name", (req,res)=>{
    let userName = req.params.name;
    res.send("Welcome user using path params "+userName);
})

app.get("/multiplePath/:id/:name/:salary", (req,res)=>{
    // res.send(req.params)
    let id = req.params.id
    let name = req.params.name
    let salary = req.params.salary
    res.send(`${JSON.stringify(req.params)} <br/> ${id} <br/> ${name} <br/> ${salary}`)
})


// post methods
app.post("/", (req,res)=>{
    res.send("Welcome to the express module- Post Method")
})

app.post("/storeData", (req,res)=>{
    let name = req.body.name;
    res.send("Welcome to the express module- Post Method "+name)
})

app.listen(port, ()=>console.log(`Server running on port number ${port}`));