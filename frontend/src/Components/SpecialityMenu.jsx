import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='#speciality'>
         <h1>Find by Speciality</h1>
         <p>Simply browse through our extensive list of trusted doctors, schedule your appointments hassle-free</p>

         <div>
            {specialityData.map((item,index)=>(
              <link key={index} to={`/doctors.${item.speciality}`}>
                    <img src={item.image} alt="" />
                    <p>{item.speciality}</p>
              </link>
            ))}
         </div>
    </div>
  )
}

export default SpecialityMenu