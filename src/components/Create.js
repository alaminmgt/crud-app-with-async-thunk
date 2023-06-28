import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';


const Create = () => {

  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserData = (e) => {
      setUsers({...users, [e.target.name]: e.target.value});
  }

  
  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log("users" , users);
    dispatch(createUser(users));
    navigate("/read");
  }

  return (
    <>
        <div>
          <h2 className='my-2'>Fill up your data</h2>
        <form className='w-50 mx-auto my-5' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="name" className="form-control" id="name" name="name" onChange={getUserData}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" onChange={getUserData}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="age" className="form-control" id="age" name="age" onChange={getUserData}/>
            </div>
            <div className="mb-3">
              <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value="Male" onChange={getUserData}/>
              <label className="form-check-label" >
                Male
              </label>
            </div>
            <div className="mb-3">
              <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value="Female" checked onChange={getUserData}/>
              <label class="form-check-label" >
                Female
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
      </div>
    </>
  )
}

export default Create
