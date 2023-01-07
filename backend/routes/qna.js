const express = require('express');
const router = express.Router();
const UserSchema = require('../models/User');
const QuestionSchema = require('../models/Qna');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

require('dotenv').config();

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



// Route 2: Authenticating an existing user: POST: http://localhost:8181/api/auth/register. No Login Required
router.post('/login', [
    body('email', "Please Enter a Vaild Email").isEmail(),
    body('password', "Password Should Be At Least 6 Characters").isLength({ min: 6 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    try {
        


    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});


module.exports = router;