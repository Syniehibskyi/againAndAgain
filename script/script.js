'use strict';


// function start() {
//     numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        personalMovieDb.count = +prompt('сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt('сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('на сколько оцените его?', '');
                 
        
                 if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50 ){
                    personalMovieDb.movies[a] = b;
                 } else {
                     console.log('error');
                     i--; 
                 }
        
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDb.count < 10) {
            console.log('просмотренно довольно мало фильмов')
        } else if( personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
            console.log('классика')
        } else if ( personalMovieDb.count >=30) {
            console.log('вы kinoman')
        } else {
            console.log('error')
        }
    },
    showMyDb: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDb)
        } else {
            console.log('This is a pivate option on');
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            let genre = prompt(`ваш любимый жанр под номером ${i}`);
            

            if(genre === '' || genre == null) {
                console.log(' Вы ввели некоректные данные');
                i--;
            } else {
                personalMovieDb.genres[i - 1] = genre;
            }
        }
        personalMovieDb.genres.forEach((item , i) => document.write(` Ваш любимый жанр : ${item} под номером - ${i + 1} <br>`));
    
    },
    toggleVisibleMyDB: function() {
        
      if (personalMovieDb.privat) {
        personalMovieDb.privat = false;
      }  else  {
        personalMovieDb.privat = true;
      } 
    },

}


personalMovieDb.start();
personalMovieDb.showMyDb(personalMovieDb.privat);
personalMovieDb.toggleVisibleMyDB();
personalMovieDb.rememberMyFilms();
personalMovieDb.detectPersonalLevel();
personalMovieDb.writeYourGenres();
console.log(personalMovieDb);



// способ 0 - for



// function rememberMyFilms() {
//     for(let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('на сколько оцените его?', '');
             
    
//              if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50 ){
//                 PersonalMovieDb.movies[a] = b;
//              } else {
//                  console.log('error');
//                  i--; 
//              }
    
//     }
// }

// rememberMyFilms();



// function detectPersonalLevel(){
    
// if (PersonalMovieDb.count < 10) {
//     console.log('просмотренно довольно мало фильмов')
// } else if( PersonalMovieDb.count >= 10 && PersonalMovieDb.count < 30) {
//     console.log('классика')
// } else if ( PersonalMovieDb.count >=30) {
//     console.log('вы kinoman')
// } else {
//     console.log('error')
// }
// }

// detectPersonalLevel();

// function showMyDb(hidden) {
//     if(!hidden) {
//         console.log(PersonalMovieDb)
//     } else {
//         console.log('This is a pivate option on');
//     }
// }

// showMyDb(PersonalMovieDb.privat);

// function writeYourGenres() {
//     let i = 0;
    
//     while (i <= 2) {
        
//         let a = prompt(`Ваш любимый жанр под номером ${i + 1}` , (''))
        
//         PersonalMovieDb.genres[i] = a;
        
//         i++;
//     }

// }

// writeYourGenres();














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



// const arr = [1, 7, 8, 4, 2];

// function compareNum(a, b) {
//     return a - b;
// }
// arr.sort(compareNum);
// console.log(arr);