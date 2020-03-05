const express = require('express');
const router  = express.Router();
const movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {

  // movie.find().then(moviesDB => res.render('index.hbs', {moviesDB})).catch(err => console.log(err))
  res.render('index.hbs', {
     title: 'Cinema Ironhack',})
});



router.get('/movies', (req, res, next) => {
  movie.find({}, {title: 1, _id: 0}).then(movie =>{
    console.log(movie)
    res.render('movies.hbs', {
      title: movie
    }).catch(err => {
      console.log(err)
    })
    
  })
  // res.render('movies.hbs', {
  //    title: 'Ironhack Cinema',})
});

// router.get('/movies', (req, res, next) => {
//   movie.find().then(res =>{
//     res.render('movies', {
//       res
//     }).catch(err => {
//       console.log(err)
//     })
    
//   })
// });

// router.get('./../bin/seeds.js.', (req, res, next) => {
//   res.render('movies.hbs', {
//      title: 'Ironhack Cinema',})
// });

module.exports = router;
