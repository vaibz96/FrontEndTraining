// load the mongodb as well as create the reference uisng mongoclient
let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

mongoClient.connect(url, { useUnifiedTopology: true }, (err, client)=>{
    if(!err){
        let db = client.db("meanstack");
        db.collection("Product").updateOne({_id:100}, {$set:{price:68000}}, (err, result)=>{
            if(!err){
                // console.log(result);
                if(result.modifiedCount>0){
                    console.log("Record deleted Successfully")
                }else{
                    console.log("Record not present or already deleted")
                } 
            }  
            client.close();
        })

    }
})