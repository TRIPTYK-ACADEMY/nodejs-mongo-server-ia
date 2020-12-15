const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name : String,
    email : String,
    text : String,
    date : Date,
    // référence à un autre Document dans la collection movies
    movie_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "movies"
    }
});

module.exports = mongoose.model("comments",commentSchema);
