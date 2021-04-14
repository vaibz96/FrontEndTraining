// load the mongodb as well as create the reference uisng mongoclient
let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

mongoClient.connect(url, { useUnifiedTopology: true }, (err, client)=>{
    if(!err){
        let db = client.db("meanstack"); // connected database
        // let cursor = db.collection("Product").find();
        let cursor = db.collection("Product").find({},{price:{$gt:60000}});
        // console.log(cursor);
            cursor.each((err, doc)=>{
                if(doc!=null){
                    if(!err){
                        console.log(doc)
                    }else{
                        console.log(err.message)
                    }
                }
                client.close();
            })
    }
});