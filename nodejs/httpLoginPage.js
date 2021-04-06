let http = require("http");
let url = require("url");
let port = 9999;

let htmlContent = `
    <html>
        <head>

        </head>
        <body>
            <form action="/login" method="get">
                <label>User Name</label>
                <input type="text" name="user"/><br/>
                <label>Password</label>
                <input type="password" name="pass"/><br/>
                <input type="submit" name="signin"/>
                <input type="reset" name="reset"/>
            </form>
        </body>
    </html>

`
let server = http.createServer((req, res)=>{
    var pathInfo = url.parse(req.url, true).pathname
    if(req.url=="/"){
        res.setHeader("content-type", "text/html");
        res.end(htmlContent)
    }else if(pathInfo=="/login"){
        var data = url.parse(req.url, true).query;
        if (data.user=="Ajay" && data.pass=="Kumar"){
            res.write("Successfully Login")
        }else{
            res.write("Failure try once again")
        }
    }
    
    res.end();
})

server.listen(port, ()=>console.log(`Server running on port number ${port}`))