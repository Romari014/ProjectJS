"use strict";



 const numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');



 const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
 };

//  const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
//  const markFilm = +prompt('На сколько оцените его?', '');

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('На сколько оцените его?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
      console.log( personalMovieDB);