import React from 'react'
import '../../css/Alert.css'

function Alert(props) {
    console.log(props.alert)
  return (
    <div className='alert-container'>
        <p>{props.alert.msg}</p>
    </div>
  )
}

export default Alert