import React, { useState } from "react";
import axios from "axios";
import "./landing.css";
import { Link } from "react-router-dom";

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
    } else {
      alert("Password not same");
    }
  }

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div class="container">
          <h2 style={{ color: "white" }}>STUDENT MANAGMENT SYSTEM</h2>
          <button
            class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              {/* <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li> */}
              {/* <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li> */}
              <li class="nav-item mx-0 mx-lg-1">
                <Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/login">
                  Login
                </Link>
              </li>
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
              SignUp
            </h1>
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
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ backgroundColor: "blue" }}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>
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
