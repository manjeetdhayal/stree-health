import mongoose from 'mongoose'; 
import dotenv from 'dotenv'; 
dotenv.config(); 

const mongoURI = process.env.MONGO_URI;

// const connectToMongo = async () => {
//     mongoose.set("strictQuery", false);
//     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
//         console.log("Connected To Mongo Successfully!!");
//     });
// }

const connectToMongo = async () => {
    // mongoose.set("strictQuery", false);
    // await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
    //     console.log("Connected To Mongo Successfully!!");
    // });

    try {
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(mongoURI, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              }
              ); 
        console.log(`MongoDB connected Successfully: ${conn.connection.host}`); 
    } catch(err) {
        console.log(`Error is: ${err.message}`); 
        process.exit(1); 
    }
}

export default connectToMongo; 