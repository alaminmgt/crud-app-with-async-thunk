import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";

const Read = () => {
    const [id, setId] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const dispatch = useDispatch();
    const { users, loading , searchData} = useSelector((state) => state.app);
    const [radioData, setRadioData] = useState("");
    
    useEffect(() => {
      dispatch(showUser());
    }, []);

    if (loading) {
       return (<h2>Data Loading...</h2>) 
    }
    
  return (
    <>
      <div>
        {showPopup && 
            <CustomModal id={id}
            showPopup={showPopup} 
            setShowPopup={setShowPopup}
            />}
        <h1>All Data </h1>
        <div className="m-auto ">
            <div className="m-1">
            <   input className="form-check-input"
                type="radio"
                name="gender"
                id="flexRadioDefault2"
                checked={radioData===""}
                onChange={(e)=>setRadioData("")}
                />
                <label class="form-check-label" >
                    All
                </label>
                <input className="form-check-input"
                 type="radio"
                 name="gender"
                 id="flexRadioDefault1"
                 value="Male"
                 checked={radioData==="Male"}
                 onChange={(e)=>setRadioData(e.target.value)}/>
                <label className="form-check-label" >
                    Male
                </label>
                <input className="form-check-input"
                 type="radio" 
                 name="gender" 
                 id="flexRadioDefault2" 
                 value="Female" 
                 checked={radioData==="Female"}
                 onChange={(e)=>setRadioData(e.target.value)}/>
                <label class="form-check-label" >
                    Female
                </label>
            </div>
        </div>
        {users && users.filter((elem)=>{
            if (searchData.length === 0) {
                return elem;
            }else{
                return elem.name.toLowerCase().includes(searchData.toLowerCase());
            }
        }).filter((elem)=>{
            if (radioData === "Male") {
                return elem.gender === radioData;
            }else if (radioData === "Female"){
                return elem.gender === radioData;
            }else {
                return elem;
            }
        })
        .map((elem)=>(
            <div>
             <div key={elem.id} className="card w-50 mx-auto my-2">
              <div className="card-body">
                <h5 className="card-title">{elem.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                {elem.email}
                </h6>
                <p className="card-text">
                    {elem.gender}
                </p>
                <Link className="card-link" onClick={()=>[setId(elem.id),setShowPopup(true)]}>
                  View
                </Link>
                <Link className="card-link" to={`/edit/${elem.id}`}>
                  Edit
                </Link>
                <Link className="card-link" onClick={()=>dispatch(deleteUser(elem.id))}>
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Read;
