const express = require('express');
const CelebrityModel = require('../models/Celebrity.model');
const MovieModel = require('../models/Movie.model');
const router  = express.Router();

router.get('/celebrities', async (req, res, next) => {
    res.render('celebrities', {celebrities: await CelebrityModel.find().populate('movie')
    });
  });
  router.get('/celebrities/create', async (req, res, next) => {
    const movies= await MovieModel.find();
    res.render('celebrity-create',{movies} );
  });

  router.post('/celebrities/create', async( req,res)=>{
   const {name, occupation, catchPhrase,movie}= req.body;
    await (await CelebrityModel.create({name, occupation, catchPhrase, movie}))
    res.redirect('/celebrities')
  });

  router.get('/celebrities/:celebrityId/edit', async (req, res, next) => {
    const celebrityEdit=await (await CelebrityModel.findById(req.params.celebrityId)).populate('movie')
    res.render('celebrity-edit',{celebrityEdit});
  });

  router.post('/celebrities/:celebrityId/edit', async( req,res)=>{
   const {name, occupation, catchPhrase}= req.body;
    await CelebrityModel.findByIdAndUpdate(req.params.celebrityId,{name, occupation, catchPhrase,movie}); 
    res.redirect('/celebrities')
  });

  router.post('/celebrities/:celebrityId/delete', async( req,res)=>{
   
     await CelebrityModel.findByIdAndRemove(req.params.celebrityId); 
     res.redirect('/celebrities')
   });

module.exports = router;