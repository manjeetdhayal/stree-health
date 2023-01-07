import express from "express"; 
import expressAsyncHandler from "express-async-handler"; 
const router = express.Router(); 

import Doctor from '../models/DoctorSchema.js'; 

// let's add a header for each routes 
// @desc Fetch list of all doctors 
// @route GET /api/doctors
// @access public 

router.get('/', 
expressAsyncHandler(async (req, res) => {
    const doctors = await Doctor.find({}); 
    res.json(doctors); 
})); 



export default router; 