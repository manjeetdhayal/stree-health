// const mongoose = require('mongoose');
// const { Schema } = require('mongoose');
import mongoose from 'mongoose';


const questionSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    questionText: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const QuestionSchema = mongoose.model('question', questionSchema);
export default QuestionSchema; 