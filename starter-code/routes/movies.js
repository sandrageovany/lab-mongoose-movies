const express = require('express');
const MovieModel = require('../models/Movie.model');
//const Movie = require('../models/Movie.model');
const router = express.Router();

router.get('/movies/create', async (req, res) => {
    res.render('movie-create');
});

router.post('/movies/create', async (req, res) => {
    const { title, genre, plot }= req.body;

    await MovieModel.create({
        title,
        genre,
        plot
    });
    res.redirect('/celebrities')
});

module.exports = router;
