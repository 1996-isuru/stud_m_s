import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import Popup from "./popup";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ClassList() {
  const [students, setStudents] = useState([]);
  const classes = useStyles();
  const [useremail, setemail] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const getStudents = () => {
      const email = localStorage.getItem("UserEmail");
      axios
        .get("http://localhost:8070/student", {
          params: {
            EMAIL: email,
          },
        })
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getStudents();
  }, []);

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
              <li class="nav-item mx-0 mx-lg-1">
                <Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/home">
                  Home
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
            width: 2000,
            display: "flex",
            height: 500,
            marginTop: -92,
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "white",
              width: 1000,
              height: 600,
            }}
          >
            <TableContainer component={Paper}>
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Students Name
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ fontWeight: "bold", textAlign: "center" }}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">
                        {row.age}{" "}
                        <Button
                          type="button"
                          class="btn btn-primary"
                          style={{ width: 200, marginRight: 50 }}
                        >
                          Show student List
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div style={{ marginTop: 20 }}>
                <Button
                  type="button"
                  class="btn btn-primary"
                  style={{ width: 200, marginRight: 50 }}
                  onClick={togglePopup}
                >
                  Add a New Class
                </Button>
                <div>
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          {/* <b>Add a new class</b> */}
                          <form>
                            <div className="form-group row">
                              <label htmlFor="userName" className="text-start">
                                User Name
                              </label>
                              <div className="col-sm-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="userName"
                                  placeholder="Enter Student Name.."
                                  // onChange={(e) => {
                                  //   setUserName(e.target.value);
                                  // }}
                                />
                              </div>
                            </div>
                            <div
                              className="form-group row"
                              style={{ marginTop: 20 }}
                            >
                              <label htmlFor="email" className="text-start">
                                email
                              </label>
                              <div className="col-sm-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="email"
                                  placeholder="Enter Student email.."
                                  // onChange={(e) => {
                                  //   setEmail(e.target.value);
                                  // }}
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <div
                                className="text-start"
                                style={{ marginTop: 20 }}
                              >
                                {/* <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ backgroundColor: "blue" }}
                  >
                    Sign in
                  </button> */}
                              </div>
                            </div>
                          </form>

                          <button>Test button</button>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </div>
            </TableContainer>
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
