import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const [updateData, setUpdateData] = useState();

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((elem) => elem.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);
//   console.log(updateData);

  const getNewData = (e) => {
    setUpdateData({...updateData, [e.target.name]: e.target.value});

  };
//   console.log("updated data" , updateData);
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };
  return (
    <>
      <div>
        <div>
          <h2 className="my-2">Edit your data</h2>
          <form className="w-50 mx-auto my-5" onSubmit={handleUpdateSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="name"
                className="form-control"
                id="name"
                name="name"
                value={updateData && updateData.name}
                onChange={getNewData}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={updateData && updateData.email}
                onChange={getNewData}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="age"
                className="form-control"
                id="age"
                name="age"
                value={updateData && updateData.age}
                onChange={getNewData}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="flexRadioDefault1"
                value="Male"
                checked = {updateData && updateData.gender === "Male"}
                onChange={getNewData}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="flexRadioDefault2"
                value="Female"
                checked = {updateData && updateData.gender === "Female"}
                onChange={getNewData}
              />
              <label class="form-check-label">Female</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
