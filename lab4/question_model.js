const {Schema, model} = require('mongoose');

const tests = new Schema({
    id : {
        type : Number,
        required : true
    },
    title: {
        type: String,
        required: true
    },
    options: {
                a: String,
                b: String,
                c: String,
                answer: String
            }
        
      
});

module.exports = model('Tests', tests);
