import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e) {
    //that is the event therefore should pass (e)
    e.preventDefault();
    const useremail = localStorage.getItem('UserEmail');
    console.log(useremail);
    const newStudent = {
      name,
      age,
      gender,
      useremail,
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
    <div>
      <nav
        class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div class="container">
        <h2 style={{color: "white"}}>STUDENT MANAGMENT SYSTEM</h2>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              {/* <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li> */}
              {/* <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li> */}
              {/* <li class="nav-item mx-0 mx-lg-1">
                <Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/login">
                  Login
                </Link>
              </li> */}
              {/* <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/signup">SignUp</Link></li> */}
            </ul>
          </div>
        </div>
      </nav>
      /{/* <!-- Masthead--> */}
      <header class="masthead bg-primary text-white text-center">
        <div
          class="container d-flex align-items-center flex-column"
          style={{
            // backgroundColor: "white",
            width: 1000,
            height: 500,
            marginLeft: 30,
          }}
        >
          <div
            className="container"
            style={{ marginLeft: 30, marginTop: -50, width: 900 }}
          >
            <h1 style={{ textAlign: "left", marginBottom: 40, marginTop: 1 }}>
              Student Details
            </h1>

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
                    <button type="submit" className="btn btn-primary" style={{borderWidth:3, borderBlockColor: "white", borderBlockStartColor: "white"}}>
                      Add Student
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Copyright Section--> */}
      <div class="copyright py-4 text-center text-white">
        <div class="container">
          <small>Copyright &copy; Your Website 2021</small>
        </div>
      </div>
    </div>
  );
}
