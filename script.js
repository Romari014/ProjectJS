"use strict";

const personalMovieDB = {
       count: 0,
       movies: {},
       actors: {},
       genres: [],
       privat: false,
       start: function () {
              personalMovieDB.count = +prompt('How many films have you watched?', '');

              while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                     personalMovieDB.count = +prompt('How many films have you watched?', '');
              }
       },
       rememberMyFilms: function () {
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
       },
       detectPersonalLevel: function () {
              if (personalMovieDB.count < 10) {
                     console.log('You have seen a few films');
              } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                     console.log('You are a classic viewer');
              } else if (personalMovieDB.count >= 30) {
                     console.log('You are a movie fan');
              } else {
                     console.log('Error');
              }
       },
       showMyDB: function (hidden) {
              if (!hidden) {
                     console.log(personalMovieDB);
              }
              // showMyDB(personalMovieDB.privat);
       },
       toggleVisibleMyDB: function () {
              if (personalMovieDB.privat) {
                     personalMovieDB.privat = false;
              } else {
                     personalMovieDB.privat = true;
              }
       },
       writeYourGenres: function () {
              for (let i = 1; i < 2; i++) {
                     // const genre = prompt(`Ваш любимый жанр под номером ${i}`)
                     // personalMovieDB.genres[i - 1] = genre;

                     // let genre = prompt(`Your favorite genre under number ${i}`);
                     // if(genre == null  || genre === '' ) {
                     //        console.log('Wrong!');
                     //        i--;
                     // } else {
                     //        personalMovieDB.genres[i - 1] = genre;  
                     // }
                     let genres = prompt(`Write your favorite genre after comma `).toLowerCase();

                     if (genres == null || genres === '') {
                            console.log('Wrong!');
                            i--;
                     } else {
                            personalMovieDB.genres = genres.split(', ');
                            personalMovieDB.genres.sort();
                     }
              }

              personalMovieDB.genres.forEach((item, i) => { //item это елементы genres,а  i это номер по порядку 0,1...
                     console.log(`Your favorite genre #${i + 1} is ${item}`);
              });
       }

};










