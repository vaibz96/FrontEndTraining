let fs = require('fs');

let data = fs.readFileSync("info.txt");
console.log(data.toString()); // convert the buffer data into string format