const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    type : {
        type : String,
        enum : ['Point'],
    },
    coordinates : {
        type : [Number]
    }   
}, { 
    _id : false 
});

const theatherSchema = new mongoose.Schema({
    theaterId : Number,
    location : {
        address : {
            street1 : String,
            city : String,
            state : String,
            zipCode : String
        },
        geo : {
            type : pointSchema
        }
    }
});

module.exports = mongoose.model("theaters",theatherSchema);
