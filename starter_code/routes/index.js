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
  movie.find({})
  .then(movie =>{
    // console.log(movie)
    res.render('movies.hbs', {movieTitle: movie})
  })
  .catch(err => {
      console.log("unsuccessful", err)
    }) 
    
  })

  router.get('/movies/:id', (req, res, next) => {
    console.log(req.params)
    movie.findById(req.params.id)
    .then(movie =>{
      console.log(movie)
      res.render('movieDetails.hbs', {
        movieTitle: movie.title,
        test: movie
      })
    })
    .catch(err => {
        console.log("unsuccessful", err)
      })
      
    })
  // res.render('movies.hbs', {
  //    title: 'Ironhack Cinema',})//
// });

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
