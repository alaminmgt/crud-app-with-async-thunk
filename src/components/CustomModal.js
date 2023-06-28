import React from 'react'
import { useSelector } from 'react-redux'

const CustomModal = ({id,showPopup, setShowPopup}) => {
    const allUsers = useSelector((state)=>state.app.users);
    const singleUser = allUsers.filter((elem)=>elem.id === id);
  return (
    <>
      <div className='modalBackground'>
          <div className="modalContainer">
            <button onClick={()=>setShowPopup(false)}>Close</button>
            <h3>{singleUser[0].name}</h3>
            <h4>{singleUser[0].email}</h4>
            <h5>{singleUser[0].age}</h5>
            <h6>{singleUser[0].gender}</h6>
         </div>  
      </div>
    </>
  )
}

export default CustomModal
