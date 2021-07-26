import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllStudensts() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
       const getStudents = () => {
           axios.get("http://localhost:8070/student")
           .then((res) => {
               setStudents(res.data);
               console.log(res.data);
           })
           .catch((err) => {
               alert(err.message);
           })
       }
       getStudents();
    }, [])


  return (
    <div>
      <h1>kkkkk</h1>
    </div>
  );
}
