const prompt = require ( 'prompt-sync' ) ( { sigint : true } )


function game() {
    let juice = prompt("My favorite juice: ")
    let winnerJuice = "apple"

    switch(juice){
        case winnerJuice:
            console.log("you win")
            break
        case "orange":
            console.log("you loose")
            game()
            break
        case "peach":
            console.log("you loose")
            game()
            break
        default:
            console.log("you're not trying hard enough")
            game()
    }
}

game()