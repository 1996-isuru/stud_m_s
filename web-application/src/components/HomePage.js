import React from "react";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const history = useHistory();
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div class="container">
          <h2 style={{ color: "white" }}>STUDENT MANAGMENT SYSTEM</h2>

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
            width: 2000,
            display: "flex",
            height: 500,
            marginTop: -92,
          }}
        >
          <div
            class="align-self-start"
            style={{
              backgroundColor: "white",
              width: 300,
              height: 130,
              marginBottom: 20,
            }}
          >
            <h3 style={{ color: "black" }}>Add Students</h3>
            <button
              type="button"
              class="btn btn-secondary"
              style={{ marginTop: 20 }}
              onClick={() => history.push("/add")}
            >
              Add Students
            </button>
          </div>
          <div
            class="align-self-start"
            style={{
              backgroundColor: "white",
              width: 300,
              height: 130,
              marginBottom: 20,
            }}
          >
            <h3 style={{ color: "black" }}>Show All Students</h3>
            <button
              type="button"
              class="btn btn-secondary"
              style={{ marginTop: 20 }}
              onClick={() => history.push("/allstudent")}
            >
              Show All Students
            </button>
          </div>
          <div
            class="align-self-start"
            style={{ backgroundColor: "white", width: 300, height: 130 }}
          >
            <h3 style={{ color: "black" }}>Add Students</h3>
            <button
              type="button"
              class="btn btn-secondary"
              style={{ marginTop: 20 }}
              onClick={() => history.push("/classlist")}
            >
              Add Students
            </button>
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
