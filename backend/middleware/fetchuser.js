// var jwt = require('jsonwebtoken');
// require('dotenv').config();

import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv'; 
dotenv.config(); 

const JWT_SECRET = process.env.JWT_SECRET;

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please Authenticate using a valid token" });
    }
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload.user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}


export default fetchuser; 