let app = require("express")();
let bodyParser = require("body-parser");

let port = 9999;


// middleware modules

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var customers = []


//Get methods

app.get("/allCustomers", (req, res)=>{
    res.json(customers)
})


//post methods
app.post("/storeCustomer", (req,res)=>{
    customers.push(req.body)
    res.send("post method called")
})

//put method : to update the records
app.put("/updateAge", (req,res)=>{
    let cid = req.body.custId;
    let cage = req.body.age;
    let flag=0
    customers.find(c=>{
        if(c.custId == cid){
            c.age = cage;
            flag++
        }
    })
        if(flag==0){
            res.send("customer id is invalid")
        }else{
            res.send("Customer age is updated")
        }
})

// passing value using path param concept

app.delete('/deleteCustomer/:cid', (req,res)=>{
    let id = req.params.cid;
    let flag = 0;
    let j = 0;
    customers.find((c,i)=>{
        let ccId = c.custId;
        if(ccId==id){
            j=i;
            flag++;
        }
    })
        if(flag==0){
            res.send("custId is invalid")
        }else{
            customers.splice(j, 1);
            res.send("Customer deleted successfully")
        }
})

app.listen(port, ()=>console.log(`Server running on ${port}`))