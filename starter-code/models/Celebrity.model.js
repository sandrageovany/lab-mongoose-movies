const mongoose= require('mongoose');
const {Schema, model} = mongoose;

const celecbritySchema= new mongoose.Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
    movie: {
        type: Schema.Types.ObjectId,
        ref: 'Movie' //reference is Author.model
      },
});

module.exports= model('Celebrity', celecbritySchema);