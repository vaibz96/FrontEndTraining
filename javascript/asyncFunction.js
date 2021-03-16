document.write("1st Message");
setTimeout(function(){
    document.getElementById("msg").innerHTML ="2nd Message"
},500);

var i=0;
setInterval(function(){
    document.getElementById("info").innerHTML =i++;
},1000);
document.write("<br/>3d Message");