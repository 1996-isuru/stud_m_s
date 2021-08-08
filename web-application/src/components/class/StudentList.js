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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function AllStudensts() {
  const [students, setStudents] = useState([]);
  const classes = useStyles();

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
          console.log(res.data);
          console.log("ssssssssssss");
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
                    <TableCell align="right" style={{ fontWeight: "bold" }}>
                      Age
                    </TableCell>
                    <TableCell align="right" style={{ fontWeight: "bold" }}>
                      Gender{" "}
                    </TableCell>
                    {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.age}</TableCell>
                      <TableCell align="right">{row.gender}</TableCell>
                      {/* <TableCell align="right">{row.carbs}</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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

//checking

//checking

//checking

//checkinggit config --global user.name "FIRST_NAME LAST_NAME"
