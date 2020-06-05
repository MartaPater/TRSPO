const {Schema, model} = require('mongoose');

const answers = new Schema({
    userId:{
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    response: {
        type: String,
        required: true
    },
    result: {
        type: String,
        default: null
    }
    
});

module.exports = model('Answers', answers);
