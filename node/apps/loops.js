first: for(let i = 1; i < 6; i++){
    console.log(".")
    while(i){
        console.log("*")
        break first
    }

}
let i = 0
while(i < 10){
    i > 4 ? console.log(i) : console.log(i + " пока меньше 5"); 
    i++
}

for(let i = 20; i >= 10; i--){
    if(i == 13){
        console.log(`i равна 13`);
        break;
    }
    else{
        console.log(i)
    }
}

for(let i = 0; i <= 10; i++){
    if((i % 2) == 0 && i != 0){
        console.log(i)
    }
}

let i = 2
while(i <= 16){
    i++
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++){
        arrayOfNumbers[i-5] = i
    }
    console.log(arrayOfNumbers)
    
    // Не трогаем
    return arrayOfNumbers;
}
fifthTask()

let i = 2
while(i < 16){
    i++
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for(let i = 0; i < arr.length; i++){
        result[i] = arr[i]
        console.log(result)
    }


    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for(let i = 0; i < data.length; i++){
        if(typeof(data[i]) === "number"){
            data[i] = data[i] * 2;
            console.log(data[i]);
        }else{
            data[i] += " - done"
            console.log(data[i]);
        }   
    }
    console.log(data)

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    console.log(data.length)

    // Пишем решение вот тут
    let a = 0;
    for(let i = data.length - 1; i >= 0; i--){
        result[a] = data[i]
        console.log(result)
        a++
    }

const lines = 5;
let result = '';

for(let i = 0; i <= lines; i++){
    for(let spase = 0; spase < lines - i; spase++){
            result += ' '
            
    }
        for(let s = 0; s < i * 2 + 1 ; s++){
            result += '*'
    }
    result += '\n'
    
}

console.log(result)

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}
console.log(result)