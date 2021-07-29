import React, { useState, useEffect } from "react";
import axios from "axios";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function AllStudensts() {
  const [students, setStudents] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const getStudents = () => {
      axios
        .get("http://localhost:8070/student")
        .then((res) => {
          setStudents(res.data);
          console.log(res.data);
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
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
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
