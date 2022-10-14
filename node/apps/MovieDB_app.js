const prompt = require ( 'prompt-sync' ) ( { sigint : true } ) ; 

let numberOfFilms = userQuestions("num", "сколько фильмов вы посмотрели ?");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};


function userQuestions(type, question) {
    let tempQuestion = prompt(question);

    if(tempQuestion != null && tempQuestion != "" && tempQuestion != " "){  // первичная валидация 

        switch(type){  // проверяю тип вопроса

            case 'num': 
                if(isNaN(tempQuestion) !== true && typeof(tempQuestion) !== "undefined"){  // при помощи isNaN проверяю строку на наличие 'number'
                    tempQuestion = +tempQuestion // преобразую в число
                    return tempQuestion
                }
                else{
                    console.log("введите корректные данные" + '\n')
                    return userQuestions(type, question)
                }

            case 'str':
                return tempQuestion

            default: 
                return tempQuestion
        }
    }
    else{

        console.log("введите корректные данные" + '\n')
        return userQuestions(type, question)
    } 
}


for(let i = 1; i < 3; i++){
    const tempFilm = userQuestions("str", "Вспомните один из последних просмотреных фильмов:  ");
    const tempRating = userQuestions("num", "На сколько оцените его?");
    personalMovieDB.movies[tempFilm] = tempRating;
}
console.log(personalMovieDB.count)
console.log(personalMovieDB.movies)

