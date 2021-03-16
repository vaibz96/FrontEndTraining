var option = prompt("Enter your option")


var obj = new Promise(function(resolve, rejected){
    if(option!="yes"){
        rejected("Failure -  Error generated")
    }else{
        resolve("Successfully done th e task!")
    }
    

});


obj.then(data=>document.write(data)).catch(error=>document.write(error));