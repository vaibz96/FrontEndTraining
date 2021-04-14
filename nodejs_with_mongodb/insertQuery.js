// load the mongodb as well as create the reference uisng mongoclient
let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

mongoClient.connect(url, { useUnifiedTopology: true }, (err, client)=>{
    if(!err){
        let db = client.db("meanstack"); // connected database
        db.collection("Product").insertOne({_id:100, pname:"TV", price:46000}, (err, result)=>{
            if(!err){
                console.log(result.insertedCount);
            }else{
                console.log(err.message)
            }
            client.close();
        })
    }
    
    
});