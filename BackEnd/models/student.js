const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name : {
        type : String,
        //backend validation 
        //name should have a valid data,
        required: true 
    },
    age : {
        type: Number,
        required: true
    },
    gender : {
        type: String,
        required: true
    }
})

//when we send data in to databse we give two parameters
//first one is the document name of we stored data in mongodb database
const Student = mongoose.model("Students",studentSchema);

module.exports = Student;