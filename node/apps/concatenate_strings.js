console.log("hello world!!!")

// 3 ways to concatenate strings in js


// -- first way

console.log("my " + "name " + "andrew")
let nameFirst = "galary";
    nameSecond = "1.jpg";
console.log("https://google"+ "/"+ nameFirst +"/"+ nameSecond)
// my name andrew


// -- second way 
let data = [22, 05, 2022]

console.log(data.join('.'))
console.log(['Twas', 'the', 'night', 'before', 'Christmas'].join(' '))
// Twas.the.night.before.Christmas => .join('.')
// Twas-the-night-before-Christmas => .join('-')
// Twas the night before Christmas => .join(' ')


// -- third way

const str = 'Values: ';

str.concat(42, ' ', null);
// 'Values: 42 null'

let name = "Anderw";

console.log(`hello ${name}`)

for(let i= 100; i > 0; i++){
    console.log(`number ${i}`)
}

let number = 5

if(number != 0 || number < 3 ){
    console.log("ваше число прошло проверку")
}else {
    console.log("ваше число не подходит")
}