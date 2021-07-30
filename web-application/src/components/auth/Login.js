import React, { useState } from "react";
import axios from "axios";
import "./landing.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function sendData(e) {
    //that is the event therefore should pass (e)
    e.preventDefault();
    const newStudent = {
      email,
      password,
    };
    axios
      .post("http://localhost:8070/user/login", newStudent)
      .then((result) => {
        if (result.data.message === "Auth successful") {
          localStorage.setItem("UserEmail", email);
          // localStorage.setItem('', email);
          history.push("/home");
        } else if (result.data.message === "Auth faild") {
          alert("cannot login");
        }
      })
      .catch((err) => {
        alert("wrong details.");
      });
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
              <li class="nav-item mx-0 mx-lg-1">
                <Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/signup">
                  SignUp
                </Link>
              </li>
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
              SignIn
            </h1>
            <form onSubmit={sendData}>
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
