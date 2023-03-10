import imgDoctor from './dr.png'; 

const Doctor = [
    {
        name: "Manjeet", 
        email: "xyz@gmail.com", 
        phone: 123456789, 
        type: "A", 
        img: 'https://i.stack.imgur.com/34AD2.jpg',
        symptoms: ["cough", "fever", "headache"],
        location: ["Rourkela", "BBSR"], 
        rating: 5, 
    },
    {
        name: "Awantika", 
        email: "abc@gmail.com", 
        phone: 123456789, 
        type: "B", 
        img: imgDoctor,
        symptoms: ["body pain", "fever", "stomach pain"],
        location: ["Rourkela", "Civil Township"], 
        rating: 4, 
    },
    {
        name: "Kush", 
        email: "xfsd@gmail.com", 
        phone: 4343425, 
        type: "A",
        img: imgDoctor, 
        symptoms: ["cough", "eye", "fracture"],
        location: ["BBSR"], 
        rating: 4.5, 
    },
    {
        name: "Abhinandan", 
        email: "abhi@gmail.com", 
        phone: 125356789, 
        type: "C",
        img: imgDoctor, 
        symptoms: ["nose", "legs", "fever"],
        location: ["BBSR", "Civil Township"], 
        rating: 4, 
    },
    {
        name: "Praveen kumar", 
        email: "praveen@gmail.com", 
        phone: 34356789, 
        type: "D",
        img: imgDoctor, 
        symptoms: ["Cardio"],
        location: ["Delhi"], 
        rating: 5, 
    },
]

export default Doctor; 