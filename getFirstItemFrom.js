const prompt = require('prompt-sync')({sigint: true})

let x = JSON.parse(prompt(`Enter an array: `))
console.log(x[0])