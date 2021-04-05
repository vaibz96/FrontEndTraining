let fs = require("fs"); // loaded core fs module
let msg = "\nNext Message Added to file with next line"

fs.writeFileSync("info.txt", msg);

console.log("done")
console.log("done")