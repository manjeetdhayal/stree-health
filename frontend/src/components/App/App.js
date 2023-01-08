import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Doctor from '../Data/dr'; 
import React, { useState } from 'react';
import Hero from '../Hero/Hero';
import Footer from '../Footer/footer';
// const business = {
//   imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
//   name: "MarginaOtto Pizzeria",
//   address: "1010 Paddington",
//   city: "Flavortown",
//   state: "NY",
//   zipcode: "10101",
//   category: "Italian",
//   rating: 4.5,
//   reviewCount: 90,
// };

// // const businesses = [business, business, business, business, business, business]; 
// const businesses = [business]


const App = () => {

  const [doctors, setDoctors] = useState([]); 


  function getListOfDoctorsByName( key, value, data) {
    const res = []; 
    data.forEach((e)=> {
      if(e[key].toLowerCase().includes(value.toLowerCase())) res.push(e); 
    })
    return res; 
  }

  function getListOfDoctorsByLocation(location, data) {
    location = location.toLowerCase(); 
    const mapLocationEmail = new Map(); 
      data.forEach((dr) => {
        let availableAt = dr.location; 
        availableAt.forEach((loc) => {
          loc = loc.toLowerCase(); 
          if(mapLocationEmail.get(loc) === undefined) {
            mapLocationEmail.set(loc, [dr.email]); 
          } else {
            let cur = mapLocationEmail.get(loc); 
            cur.push(dr.email); 
            mapLocationEmail.set(loc, cur); 
          } 
        })
      })
      
      const emails = mapLocationEmail.get(location) || []; 
      // console.log(emails); 
      //make a map for doctors 
      const mapDoctors = new Map(); 
      
      data.forEach((e) => {
        mapDoctors.set(e.email, e); 
      })

      const res = [];

      emails.forEach((email) => {
        res.push(mapDoctors.get(email));
      })
      // console.log(res);  

      return res; 
  }


  function getlistofDoctorsBySymptoms(symptom, data) {
    symptom = symptom.toLowerCase(); 

    const mapSymptomEmail = new Map(); 
      data.forEach((dr) => {
        let availableAt = dr.symptoms; 
        availableAt.forEach((sys) => {
          sys = sys.toLowerCase(); 

          if(mapSymptomEmail.get(sys) === undefined) {
            mapSymptomEmail.set(sys, [dr.email]); 
          } else {
            let cur = mapSymptomEmail.get(sys); 
            cur.push(dr.email); 
            mapSymptomEmail.set(sys, cur); 
          } 
        })
      })
      
      const emails = new Set(); 

      for(const [key, value] of mapSymptomEmail.entries()) {
        if(key.includes(symptom)) {
          value.forEach((email) => {
            // console.log(email); Working
            emails.add(email); 
          })
        }
      }


      // console.log(emails); 
      //make a map for doctors 
      const mapDoctors = new Map(); 
      
      data.forEach((e) => {
        mapDoctors.set(e.email, e); 
      })

      const res = [];

      emails.forEach((email) => {
        // console.log(email); 
        res.push(mapDoctors.get(email));
      })
      // console.log(res);  

      return res;
  }

  function searchDoctor(term, location, sortBy) {
    console.log(`Searching Doctors with following parameters ${term}, ${location}, ${sortBy}`);

    // if(term === "") console.log("YES"); 
    // console.log(location); 
    // console.log(sortBy); 

    // if sortBy == name search based on name i.e, term = dr name 
    // if sortBy == symptoms search based on symptoms i.e, term = symptoms 
    // if location is set give dr prevent in that location 
    if(term === "" && location !== "") {
      //search on the basis of location 
      // we will first get emails of all doctors at respective locations 

      const data = getListOfDoctorsByLocation(location, Doctor); 
      setDoctors(data); 

    } else if(sortBy === "symptoms" && term !== "") {
      console.log("search by symptoms"); 
      //get by smptopms 
      const doctorBySymptoms = getlistofDoctorsBySymptoms(term, Doctor); 
      // console.log(doctorBySymptoms)
      if(location !== "" ) {
        // also get Doctors by location and get the common of both of them 
        const doctorByLocation = getListOfDoctorsByLocation(location, doctorBySymptoms); 
        setDoctors(doctorByLocation); 
      } else setDoctors(doctorBySymptoms) 

   } else if(term !== "" && location !== "") {
      // to search a doctor based on location 
      const DoctorsOnLocationAre = getListOfDoctorsByLocation(location, Doctor); 
      const matchedDoctors = getListOfDoctorsByName(sortBy, term, DoctorsOnLocationAre);
      setDoctors(matchedDoctors); 

     } else if(sortBy) {
      const data = getListOfDoctorsByName( sortBy, term, Doctor); 
      console.log(data); 
      setDoctors(data); 
    }
  }

  return (
    <div className='w-[100%]'>
      <div className="hero w-[100%] h-screen">
        <Hero />
      </div>
      <div className = "search-doctor">
          <SearchBar searchDoctor = {searchDoctor} />
          <BusinessList businesses= {doctors} />
      </div>
      <Footer/>
    </div>
  )
}


export default App;
