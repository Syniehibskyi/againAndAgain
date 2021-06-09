const numberOfFilms = prompt('сколько фильмов вы уже посмотрели?', '');

const PersonalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let lastOfFilms1 = prompt('Один из последних просмотренных фильмов?', ''),
lastOfFilms2 = prompt('Один из последних просмотренных фильмов?', '');    

let rate1 = prompt('на сколько оцените его?', ''),
    rate2 = prompt('на сколько оцените его?', '');



PersonalMovieDb.movies[lastOfFilms1] = rate1;
PersonalMovieDb.movies[lastOfFilms2] = rate2;

console.log(PersonalMovieDb)