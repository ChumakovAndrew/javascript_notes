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

