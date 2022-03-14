import React, { useState } from 'react'

function PatientTop() {

    const [service, setService] = useState();
  const [time, setTime] = useState();

  return (
    <div className='patient-top-container'>
         <div className='booking-top-container-title'>
            <p>Your Patients</p>
        </div>
        <div className='booking-top-container-content'>
            <p>Dental for Home</p>
        </div>
        
        <div className='patient-bottom-container'>
        <div className="new-booking-select-option">
          <select name="Type" onChange={(e) => setService(e.target.value)}>
            <option value="volvo">Select Service</option>
            <option value="Delhi">Delhi</option>
            <option value="Delhi">Delhi</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div className="new-booking-select-option" >
          <select name="Type" onChange={(e) => setTime(e.target.value)}>
            <option value="volvo">Select Time Duration</option>
            <option value="Delhi">Delhi</option>
            <option value="Delhi">Delhi</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        </div>
        
    </div>
  )
}

export default PatientTop