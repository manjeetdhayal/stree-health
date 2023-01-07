
import doctorRoutes from './routes/doctor.js'; 
import authRoutes from './routes/auth.js'; 
import qnaRoutes from './routes/qna.js'; 
// const express = require('express');
// const connectToMongo = require('./db.js');
// const cors = require('cors');
import express from 'express'; 
import connectToMongo from './db.js'; 
import cors from 'cors'; 
import dotenv from 'dotenv'; 
dotenv.config(); 

connectToMongo();

const PORT = process.env.PORT || 8181;

const app = express();
app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
    res.status(200).send("Server Working!");
})

// Available Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/qna', require('./routes/qna'));
app.use('/api/auth', authRoutes); 
app.use('/api/qna', qnaRoutes); 
app.use("/api/doctors", doctorRoutes); 


app.listen(PORT, () => {
    console.log(`The App is running at http://localhost:${PORT}`);
})