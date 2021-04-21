const mongoose= require('mongoose');
const {schema, model}= mongoose;

const movieSchema= new mongoose.Schema({
title:String,
genre: String,
plot:String
});

module.exports= model('Movie',movieSchema)