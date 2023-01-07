const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

const connectToMongo = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI, { dbName: 'sheBuilds'}, () => {
        console.log("Connected To Mongo Successfully!!");
    });
}

module.exports = connectToMongo;