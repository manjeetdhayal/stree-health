// const mongoose = require('mongoose');
// const { Schema } = require('mongoose');

import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    kind: {
        type: String,
        required: true
    }
}, {timestamps: true});

const UserSchema = mongoose.model('user', userSchema);
export default UserSchema; 