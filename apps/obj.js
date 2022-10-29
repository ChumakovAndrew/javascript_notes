const options = {
    name: "john",
    lvl: 4,
    skills: [
        'skill 1',
        'skill 2',
        'skill 3'
    ],
    data: {
        first: 'data-1',
        second: 'data-2',
        finishData: {
            finish: 'finish'

        }
    }
}

function forInArr(arr, nameKay) {
    for(let key in arr){
        if(typeof(arr[key]) !== 'object'){
        console.log(`В свойстве ${key} лежит значение ${arr[key]}`)
        }
        else{
            console.log("обьект " + key)
            forInArr(arr[key])
        }
    }
}

forInArr(options)