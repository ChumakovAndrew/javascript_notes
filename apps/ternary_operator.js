const prompt = require ( 'prompt-sync' ) ( { sigint : true } ) ; 

// ternary operator
let num = +prompt("введите число ")

console.log((num === 10) ? "переменная равна 10" : (num > 10) ? "переменная больше 10" : "переменная меньше 10")

