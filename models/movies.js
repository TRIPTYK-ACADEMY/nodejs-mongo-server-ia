const {Schema,model} = require('mongoose');
// on déstructure mongoose.Schema et mongoose.model

const schema = new Schema({
    plot : String,
    genres: [String], // [String] = tableau de String
    runtime : Number,
    title : String,
    poster : String,
    countries : [String],
    fullplot : String,
    languages : [String],
    directors : [String],
    writers : [String],
    awards : Object,
    lastupdated : String,
    year : Number,
    imdb : Object,
    type : String,
    cast : [String],
    num_mflix_comments : Number,
    rated : String,
    tomatoes : Object
});

module.exports = model("movies",schema);