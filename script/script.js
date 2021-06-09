let  numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const PersonalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// способ 0 - for



function rememberMyFilms() {
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
}

rememberMyFilms();



function detectPersonalLevel(){
    
if (PersonalMovieDb.count < 10) {
    console.log('просмотренно довольно мало фильмов')
} else if( PersonalMovieDb.count >= 10 && PersonalMovieDb.count < 30) {
    console.log('классика')
} else if ( PersonalMovieDb.count >=30) {
    console.log('вы kinoman')
} else {
    console.log('error')
}
}

detectPersonalLevel();

function showMyDb(hidden) {
    if(!hidden) {
        console.log(PersonalMovieDb)
    } else {
        console.log('This is a pivate option on');
    }
}

showMyDb(PersonalMovieDb.privat);

function writeYourGenres() {
    let i = 0;
    
    while (i <= 2) {
        
        let a = prompt(`Ваш любимый жанр под номером ${i + 1}` , (''))
        
        PersonalMovieDb.genres[i] = a;
        
        i++;
    }

}

writeYourGenres();





































// // let i = 0;

// // способ 1 -  while 

// // while (i < 2){
// //     i++
// //     const a = prompt('Один из последних просмотренных фильмов?', ''),
// //           b = prompt('на сколько оцените его?', '');
         
// //           if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50 ){
// //             PersonalMovieDb.movies[a] = b;
// //          } else {
// //              console.log('error');
// //              i--; 
// //          }     
// // }


// // Способ 2 - do while

// // let i = 0;

// // do {
// //     i++
// //         const a = prompt('Один из последних просмотренных фильмов?', ''),
// //               b = prompt('на сколько оцените его?', '');
             
// //               if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50 ){
// //                 PersonalMovieDb.movies[a] = b;
// //              } else {
// //                  console.log('error');
// //                  i--; 
// //              }     
// // } while ( i < 2);



