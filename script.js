"use strict";



let numberOfFilms;

function start() {
       numberOfFilms = +prompt('How many films have you watched?', '');

       while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
              numberOfFilms = +prompt('How many films have you watched?', '');
       }
}

start();

const personalMovieDB = {
       count: numberOfFilms,
       movies: {},
       actors: {},
       genres: [],
       privat: false
};



function rememberMyFilms() {
       for (let i = 0; i < 2; i++) {

              const a = prompt('One of the last movies you watched?', ''),
                     b = +prompt('How much would you rate it from 1 to 10 ?', '');

              if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                     personalMovieDB.movies[a] = b;
                     console.log('done');
              } else {
                     console.log('error');
                     i--;
              }

       }
}

rememberMyFilms();


function detectPersonalLevel() {

       if (personalMovieDB.count < 10) {
              console.log('You have seen a few films');
       } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
              console.log('You are a classic viewer');
       } else if (personalMovieDB.count >= 30) {
              console.log('You are a movie fan');
       } else {
              console.log('Error');
       }

}

// detectPersonalLevel();


function showMyDB(hidden) {
       if (!hidden) {
              console.log(personalMovieDB);
       }
}    

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
       for (let i = 1; i <= 3; i++) {
              // const genre = prompt(`Ваш любимый жанр под номером ${i}`)
              // personalMovieDB.genres[i - 1] = genre;
              personalMovieDB.genres[i - 1] = prompt(`Your favorite genre under number ${i}`);
       }
}

writeYourGenres();


// console.log(personalMovieDB);


// let i = 0;
// while (i < 2){

//        const a = prompt('Один из последних просмотренных фильмов?', ''),
//        b = +prompt('На сколько оцените его?', ''); 

//        i++;

//        if(a != null && b != null && a != '' && b != '' && a.length < 50){
//               personalMovieDB.movies[a] = b;
//               console.log('done');
//        }else{
//               console.log('error');
//               i--;
//        }
// }

// let i = 0;
// do{
//        const a = prompt('Один из последних просмотренных фильмов?', ''),
//        b = +prompt('На сколько оцените его?', ''); 

//        i++;

//        if(a != null && b != null && a != '' && b != '' && a.length < 50){
//               personalMovieDB.movies[a] = b;
//               console.log('done');
//        }else{
//               console.log('error');
//               i--;
//        }
// } while(i < 2);





