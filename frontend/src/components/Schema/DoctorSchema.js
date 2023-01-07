const Doctor = {
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
}



