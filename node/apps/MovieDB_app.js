const prompt = require ( 'prompt-sync' ) ( { sigint : true } ) ; 


const personalMovieDB = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function userQuestions(type, question) {
    let tempQuestion = prompt(question).trim();

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


function start(dataBase) {
    userQuestions("str", "Здравствуйте, если готовы начать введите << yes >> ") === "yes" ? console.log("хорошо давайте начнем.") : start();
    let numberOfFilms = userQuestions("num", "сколько фильмов вы посмотрели ?");
    dataBase.count = numberOfFilms;
}


function writeYourFavoriteFilms(dataBase) {
    for(let i = 1; i < 3; i++){
        const tempFilm = userQuestions("str", "Вспомните один из последних просмотреных фильмов:  ");
        const tempRating = userQuestions("num", "На сколько оцените его?");
        dataBase.movies[tempFilm] = tempRating;
    }
}


function writeYourFavoriteGenres(dataBase) {
    for(let i = 1; i < 4; i++){
    const tempGenres = userQuestions("str", "Ваш любимый жанр ?")
        dataBase.genres[i-1] = tempGenres
    }
}


function showMyDB(dataBase){
    dataBase.privat === false ? console.log(dataBase) : console.log("у вас нет доступа")
}


start(personalMovieDB);
writeYourFavoriteFilms(personalMovieDB);
writeYourFavoriteGenres(personalMovieDB);
showMyDB(personalMovieDB);

console.log(Math.ceil(8 / 4))
