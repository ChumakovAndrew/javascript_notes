// # тут я решаю небольшие задачки, что то вроде черновика.


// #############################################

function isPangram(string) {  // задача на проверку, строки на панаграм.
    let str = string.toLowerCase()
    let regex = /([a-z])(?!.*\1)/g;
    if(str.match(regex) === null){
        console.log(str.match(regex)) 
        return false
    }
    else{
      if((str.match(regex)).length === 26){
        console.log(str.match(regex))
        return true
      }
      else{
        console.log(str.match(regex))
        return false
      }
    } 
}

console.log(isPangram("flfl"))

// #############################################

// #############################################

function fib(iter) {    // задача на получение чисел Фибоначчи

    if(typeof(iter) !== "number" || iter === 0 || !Number.isInteger(iter)){
        return ""
    }
    else if(iter === 1){
        return "0"
    }
    
    let finishNum = "0 1" 
    let firstNum = 0
    let secondNum = 1
    for(let i = 1; i < iter - 1; i++) {
        let temp = firstNum + secondNum

        finishNum +=  " " + (firstNum + secondNum)
        firstNum = secondNum
        secondNum = temp
    }
    return finishNum

}

console.log(fib(5))

// #############################################

// #############################################
const someString = 'This is some strange string';

function reverse(str, a) {  // задача на реверс строки 
    // "str" указывает строку
    // "a" указывает разделитель (задавать нужно "" или " " в зависимости какой результат вы хотим получить)
    if(typeof(str) === 'string'){
        let arr = str.split(a)
        
        return arr.reverse().join(a)
        }
        else{
            return 'Ошибка!'
        }
}


console.log(reverse(someString, ' '))

// #############################################

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}
// задачка с udemy
function isBudgetEnough(data) {  // расчитывает хватает бюджета или нет 
    let {height,moneyPer1m3,budget,shops} = data
    let square = 0
    shops.forEach(element => {
        square += element.width * element.length
    });
    let volume = square * height
    let actualBudget = volume * moneyPer1m3
    if(budget >= actualBudget){
        return 'Бюджета достаточно'
    }
    else{
        return 'Бюджета недостаточно'
    }
}

console.log(isBudgetEnough(shoppingMallData))

// #############################################


// console.log(Math.ceil(8 / 4))

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan){
//         let {languages} = plan.skills

//         return `Мне ${plan.age} и я владею языками: ${(languages.join(', ').toUpperCase())}`
//     }
// };

// function showExperience(plan) {
//     let {exp} = plan.skills
//     return exp
// }

// function showProgrammingLangs(plan) {
//     let {programmingLangs} = plan.skills
//     let obj = ''
//     for(key in programmingLangs){
//         obj += `Язык ${key} изучен на ${programmingLangs[key]}` + '\n'
//     }
//     return obj
// }



// console.log(typeof(showProgrammingLangs(personalPlanPeter)))



// const family = [""];

// function showFamily(arr) {
//     if(arr.length !== 0){
//         let family = 'Семья состоит из: '
//         return family + arr.join(' ')
//     }else{
//         return 'Семья пуста'
//     }
// }
// console.log(showFamily(family))

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     return arr.join('\n')
// }

// console.log(standardizeStrings(favoriteCities))



// console.log('cИий кит'.search(/[А-Я]/))







