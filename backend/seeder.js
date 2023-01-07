import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectToMongo from './db.js';

import DoctorData from './Data/dr.js'; 
import Doctor from './models/DoctorSchema.js'; 
dotenv.config()

await connectToMongo()

const importData = async () => {
  try {

    await Doctor.deleteMany(); 

    console.log("hello"); 
    await Doctor.insertMany(DoctorData); 
    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`Error is: ${error}`)
    process.exit(1)
  }
}

importData(); 