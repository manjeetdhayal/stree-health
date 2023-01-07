const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const QuestionSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    questionText: {
        type: String,
        required: true,
    },
}, {timestamps: true});

module.exports = mongoose.model('question', QuestionSchema);