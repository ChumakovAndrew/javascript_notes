const prompt = require ( 'prompt-sync' ) ( { sigint : true } ) ; 

function getTimeFromMinutes(minutes) {
    if(typeof(minutes) !== "number" || minutes < 0 || !Number.isInteger(minutesTotal)){
        return "Ошибка, проверьте данные"
    }
    else{
        if( minutes > 60){
            let hour = Math.trunc(minutes / 60)
            let min = minutes % 60

            if(hour === 1){
                hour = hour + " час " 
            }
            else if(hour > 1 && hour <= 4 ){
                hour = hour + " часа "
            }
            else {
                hour = hour + " часов "
            }


            if(min === 1){
                min = min + " минута " 
            }
            else if(min > 1 && hour <= 4 ){
                min = min + " минуты "
            }
            else {
                min = min + " минут "
            }

            return hour + min

        }
        else {
            if(minutes === 1){
                minutes = minutes + " минута " 
            }
            else if(minutes > 1 && minutes <= 4 ){
                minutes = minutes + " минуты "
            }
            else {
                minutes = minutes + " минут "
            }

            return minutes
    }

    }

}

function startApp(){
    let minutes = +prompt("Введите количество минут.")
    console.log(getTimeFromMinutes(minutes))
    startApp()
}

startApp()





