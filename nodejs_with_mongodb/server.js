// load the mongodb as well as create the reference uisng mongoclient
let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

let app = require("express")();
let bodyParser = require("body-parser");

let port = 9999;


// middleware modules

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var products = []

mongoClient.connect(url, { useUnifiedTopology: true }, (err, client)=>{
    if(!err){
        let db = client.db("meanstack"); // connected database
        // let cursor = db.collection("Product").find();
        let cursor = db.collection("Product").find();
        // console.log(cursor);
            cursor.each((err, doc)=>{
                if(doc!=null){
                    if(!err){
                        products.push(doc)
                    }else{
                        console.log(err.message)
                    }
                }
                client.close();
            })
    }
});

//Get methods

app.get("/displayProducts", (req, res)=>{
    res.json(products)
})

app.listen(port, ()=>console.log(`Server running on ${port}`))