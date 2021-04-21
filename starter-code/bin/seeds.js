const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const Movie=  require('../models/Movie.model');

const DB_NAME = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities=[
    {
        name:'Tom Cruise' ,
        occupation:'actor',
        catchPhrase:'Lorem ipsum',
        
    },
    {
        name:'Beyonce' ,
        occupation:'singer',
        catchPhrase:'lorem ipsum'
    },
    {
        name:'Daffy Duck' ,
        occupation:'comedian',
        catchPhrase:'lorem ipsum'
    }
];

async function createCelebrities(){
    await Celebrity.create(celebrities);
}
 
createCelebrities();

