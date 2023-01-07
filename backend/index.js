const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');

connectToMongo();

const PORT = process.env.PORT || 8181;

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.status(200).send("Server Working!");
})

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/qna', require('./routes/qna'));


app.listen(PORT, () => {
    console.log(`The App is running at http://localhost:${PORT}`);
})