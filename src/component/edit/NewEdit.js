import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import NewEditBottom from './NewEditBottom'
import NewEditTop from './NewEditTop'
import '../../css/NewEdit.css'
// import NewEditNav from './NewEditNav'

function NewEdit() {
  return (
    <div className="new-edit-container">
        <Sidebar />
        {/* <NewEditNav /> */}
        <NewEditTop />
        <NewEditBottom />
    </div>
  )
}

export default NewEdit