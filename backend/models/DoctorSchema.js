import mongoose from 'mongoose'; 
// import Order from './ordermodel';

const doctorSchema = mongoose.Schema ({
    _id: Object, 
    name: {
        type: String, 
        required: true, 
    }, 
    email: {
        type: String, 
        required: true,
        unique: true,  
    }, 
    phone: {
        type: Number, 
        required: true, 
    }, 
    img:
    {
        type: String,
        required: true, 
        // contentType: String,
        default: 'https://i.stack.imgur.com/34AD2.jpg'
    },
    type: {
        type: String, 
        required: true, 
    }, 
    symptoms: {
        type: Array, 
        required: true, 
    }, 
    location: {
        type: Array, 
        required: true, 
    }, 
    rating: {
        type: Number, 
        required: false, 
        default: 0, 
    }
})

const Doctor = mongoose.model('Doctor', doctorSchema ); 
export default Doctor; 

