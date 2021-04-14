// load the mongodb as well as create the reference uisng mongoclient
let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

mongoClient.connect(url, { useUnifiedTopology: true }, (err, client)=>{
    let db = client.db("meanstack"); // connected database
    if(!err){
        console.log("Connected successfully")
    }else{
        console.log("Error"+err);
    }
    client.close();
});