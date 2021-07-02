const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();  

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

//this should pass tew parameters, first one is the url and other is options
//then pass this options through this url
mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
} )

//create connection
//console when connection open
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connetction succesfull");
})

const studentRouter = require("./routes/students.js");
// http: //localhost:8070/student
//when run this command call student when cll the studentRouter by app.use
app.use("/students",studentRouter);

//then we run this port 
app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})

