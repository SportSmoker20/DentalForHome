import React from 'react'
import EditCard from './EditCard'
import EditInfo from './EditInfo'

function EditProfile() {
  return (
    <div className='edit-profile-main'>
        <div className='edit-profile-left'>
            <EditCard />
        </div>
        <div className='edit-profile-right'>
          <EditInfo />
        </div>
    </div>
  )
}

export default EditProfile