import React from 'react'

function PatientCard(props) {
  return (
    <div className='patient-card-container'>
        <div className='patinet-card-img'></div>
        <div className='patinet-card-title'>
            <p className='patinet-card-title-head'>{props.patient.name}</p>
            <p className='patinet-card-title-body'>{props.patient.patientId}</p>
        </div>
        <div className='patinet-card-data'>
            <p className='patinet-card-data-head'>Age</p>
            <p className='patinet-card-data-body'>{props.patient.age}</p>
        </div>
        <div className='patinet-card-data'>
            <p className='patinet-card-data-head'>Date of Birth</p>
            <p className='patinet-card-data-body'>{props.patient.dob}</p>
        </div>
        <div className='patinet-card-data'>
            <p className='patinet-card-data-head'>Last Appointment</p>
            <p className='patinet-card-data-body'>{props.patient.lastAppointment}</p>
        </div>
        <div className='patient-view-more'>
            <p>View More</p>
        </div>
    </div>
  )
}

export default PatientCard