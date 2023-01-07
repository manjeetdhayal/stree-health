

// consists of respective's email ids of all the doctors on a specific location in a array 

const location = {
    place: {
        type: String, 
        required: true, 
    }, 
    available: {
        type: Array, 
        required: true, 
        default: [], 
    }
}