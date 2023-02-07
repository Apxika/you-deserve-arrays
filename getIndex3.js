const prompt = require('prompt-sync')({sigint: true})

let x = JSON.parse(prompt(`Enter an array: `))
if (4 > x.length-1) {
    console.log(x[x.length-1])
}   
else {
    console.log(x[3])
}