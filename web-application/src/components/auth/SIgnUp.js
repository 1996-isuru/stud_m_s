import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setrePassword] = useState("");

  function sendData(e) {
    //that is the event therefore should pass (e)
    e.preventDefault();

    if (password === repassword) {
      const newStudent = {
        userName,
        email,
        password,
      };

      console.log(newStudent);
      axios
        .post("http://localhost:8070/user/signup", newStudent)
        .then(() => {
          alert("Student Added.");
          setUserName("");
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          alert(err);
        });
    } else{
        alert("Password not same");
    }
  }

  return (
    <div
      className="container"
      style={{ marginLeft: 30, marginTop: 50, width: 900 }}
    >
      <form onSubmit={sendData}>
        <div className="form-group row">
          <label htmlFor="userName" className="text-start">
            Student Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Enter Student Name.."
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group row" style={{ marginTop: 20 }}>
          <label htmlFor="email" className="text-start">
            email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter Student email.."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group row" style={{ marginTop: 20 }}>
          <label htmlFor="password" className="text-start">
            password
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Enter Student password.."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group row" style={{ marginTop: 20 }}>
          <label htmlFor="repassword" className="text-start">
            password
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="repassword"
              placeholder="Enter Student password.."
              onChange={(e) => {
                setrePassword(e.target.value);
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
