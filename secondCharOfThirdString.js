const prompt = require('prompt-sync')({sigint: true})

let x = JSON.parse(prompt(`Enter an array: `))
let y = x[2]

if (typeof y === "string") {
    console.log(y[1])
}   else {
    console.log("error")
}