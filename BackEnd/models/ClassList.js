const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create the schema
const classSchema = new Schema({
    name : {
        type : String,
        required: true 
    },
    useremail : {
        type: String,
        required: true
    }
})

const Class = mongoose.model("Class",classSchema);

module.exports = Class;