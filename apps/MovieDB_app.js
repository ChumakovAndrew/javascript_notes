// задача с курса на udemy

const prompt = require ( 'prompt-sync' ) ( { sigint : true } ) ; 


const personalMovieDB = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    userQuestions: function(type, question) {
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
                        return personalMovieDB.userQuestions(type, question)
                    }

                case 'str':
                    return tempQuestion

                default: 
                    return tempQuestion
            }
        }
        else{

            console.log("введите корректные данные" + '\n')
            return personalMovieDB.userQuestions(type, question)
        } 
    },
    start: function(dataBase) {
        personalMovieDB.userQuestions("str", "Здравствуйте, если готовы начать введите << yes >> ") === "yes" ? console.log("хорошо давайте начнем.") : start();
        let numberOfFilms = personalMovieDB.userQuestions("num", "сколько фильмов вы посмотрели ?");
        dataBase.count = numberOfFilms;
    },
    writeYourFavoriteFilms: function(dataBase) {
        for(let i = 1; i < 3; i++){
            const tempFilm = personalMovieDB.userQuestions("str", "Вспомните один из последних просмотреных фильмов:  ");
            const tempRating = personalMovieDB.userQuestions("num", "На сколько оцените его?");
            dataBase.movies[tempFilm] = tempRating;
        }
    },
    writeYourFavoriteGenres: function(dataBase) {
        for(let i = 1; i < 4; i++){
        const tempGenres = personalMovieDB.userQuestions("str", "Ваш любимый жанр ?")
            dataBase.genres[i-1] = tempGenres
        }
    },
    showMyDB: function(dataBase) {
        dataBase.privat === false ? console.log(dataBase) : console.log("у вас нет доступа")
    }
    };

personalMovieDB.start(personalMovieDB);
personalMovieDB.writeYourFavoriteFilms(personalMovieDB);
personalMovieDB.writeYourFavoriteGenres(personalMovieDB);
personalMovieDB.showMyDB(personalMovieDB);


