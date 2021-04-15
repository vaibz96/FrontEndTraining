let obj = require("mongoose");  //load the module
obj.Promise = global.Promise; //creating the reference

let url = "mongodb://localhost:27017/meanstack";

const mongooseDbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

obj.connect(url, mongooseDbOption); // ready to connect

let db = obj.connection; // connected to database

db.on("error", (err)=>console.log(err));

db.once("open", ()=>{
    // Defined the Schema
    let ProductScehema = obj.Schema({
        _id:Number,
        pname:String,
        price:Number
    });
    //creating model using schema
    let Product = obj.model("", ProductScehema, "Product");
    let p1 = new Product({_id:102, pname:"AC", price:65000});
    p1.save((err, result)=>{
        if(!err){
            console.log("record inserted successfully"+result);
        }else{
            console.log(err);
        }
        obj.disconnect();  //close to disconnect
    })
})
