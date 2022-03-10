import React, { useContext, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import NewEditBottom from './NewEditBottom'
import NewEditTop from './NewEditTop'
import '../../css/NewEdit.css'
import { UserContext } from '../../App'
import { Navigate } from 'react-router-dom'
import Navbar from '../dashboard/Navbar'
// import NewEditNav from './NewEditNav'

function NewEdit() {
  const  {  subscribedLoggedIn } = useContext(UserContext)
  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });
  // if(subscribedLoggedIn){
  return (
    <div className="new-edit-container">
        {width>800 ? <Sidebar /> : <Navbar />}
        {/* <NewEditNav /> */}
        <NewEditTop />
        <NewEditBottom />
    </div>
  )}
  //  else {
  //   return(
  //     // <Navigate to="/auth/login" />
  //   )
  // }
// }

export default NewEdit