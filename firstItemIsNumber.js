const prompt = require('prompt-sync')({sigint: true})

let x = JSON.parse(prompt(`Enter an array: `))

if (typeof x[0] === "number") {
    console.log(true)
}   
else {
    console.log(false)
}