const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create the schema
const studentSchema = new Schema({
    name : {
        type : String,
        required: true 
    },
    age : {
        type: Number,
        required: true
    },
    gender : {
        type: String,
        required: true
    },
    useremail : {
        type: String,
        required: true
    }
})

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;