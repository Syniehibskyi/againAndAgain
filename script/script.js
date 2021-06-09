const numberOfFilms = prompt('сколько фильмов вы уже посмотрели?', '');

const PersonalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for(let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('на сколько оцените его?', '');
         

         if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50 ){
            PersonalMovieDb.movies[a] = b;
         } else {
             console.log('error');
             i--; 
         }

}


if (PersonalMovieDb.count < 10) {
    console.log('просмотренно довольно мало фильмов')
} else if( PersonalMovieDb.count > 10 && PersonalMovieDb < 30) {
    console.log('классика')
} else {
    console.log('вы kinoman')
}
