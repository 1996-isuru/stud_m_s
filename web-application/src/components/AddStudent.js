import React, { useState } from "react";
import axios from "axios";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e) {
    //that is the event therefore should pass (e)
    e.preventDefault();
    const newStudent = {
      name,
      age,
      gender,
    };

    console.log(newStudent);
    axios
      .post("http://localhost:8070/student/add", newStudent)
      .then(() => {
        alert("Student Added.");
        setName("");
        setAge("");
        setGender("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div
      className="container"
      style={{ marginLeft: 30, marginTop: 50, width: 900 }}
    >
      <form onSubmit={sendData}>
        <div className="form-group row">
          <label htmlFor="name" className="text-start">
            Student Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Student Name.."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group row" style={{ marginTop: 20 }}>
          <label htmlFor="age" className="text-start">
            Age
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="Enter Student Age.."
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group row" style={{ marginTop: 20 }}>
          <label htmlFor="gender" className="text-start">
            Gender
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="gender"
              placeholder="Enter Student Gender.."
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="text-start" style={{ marginTop: 20 }}>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
