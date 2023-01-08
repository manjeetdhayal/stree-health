// const mongoose = require('mongoose');
// const { Schema } = require('mongoose');
import mongoose from 'mongoose';


const questionSchema = mongoose.Schema({
    questionText: {
        type: String,
        required: true,
    },
    answers: {
        type: Array,
        default: []
    }
}, {timestamps: true});

const QuestionSchema = mongoose.model('question', questionSchema);
export default QuestionSchema; 