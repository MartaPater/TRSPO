const {Schema, model} = require('mongoose');


const labs = new Schema({
    id : {
        type : Number,
        required : true
    },
    name : {
        type : String,
        required : true
    }
});

module.exports = model('Labs', labs);