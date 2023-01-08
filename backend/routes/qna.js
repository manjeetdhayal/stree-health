// const express = require('express');
// const router = express.Router();
// const UserSchema = require('../models/User');
// const QuestionSchema = require('../models/Qna');
// const { body, validationResult } = require('express-validator');
// var bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');
// const fetchuser = require('../middleware/fetchuser');

// require('dotenv').config();

// const JWT_SECRET = process.env.JWT_SECRET;

import express from "express"; 
import UserSchema from "../models/User.js";
import {body, validationResult} from 'express-validator'; 
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv'; 
// const express = require('express');
const router = express.Router();
import fetchuser from '../middleware/fetchuser.js'; 
import QuestionSchema from '../models/Qna.js';
// const UserSchema = require('../models/User');
// const { body, validationResult } = require('express-validator');
// var bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');
// const fetchuser = require('../middleware/fetchuser');

// require('dotenv').config();
dotenv.config(); 


const JWT_SECRET = process.env.JWT_SECRET;



// Route 1: Add a question: POST: http://localhost:8181/api/qna/new. No Login Required
router.post('/new', [
    body('text', "Your question should be at least 10 characters long.").isLength({ min: 10 }),
], fetchuser, async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newQuestion = await QuestionSchema.create({
            userId: req.user.id,
            questionText: req.body.text,
        });

        res.status(200).json(newQuestion);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});


// Route 2: Get all questions: GET: http://localhost:8181/api/qna/. No Login Required
router.get('/', async (req, res) => {
    try {
        const allQuestions = await QuestionSchema.find();
        res.status(200).json(allQuestions);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});



export default router; 