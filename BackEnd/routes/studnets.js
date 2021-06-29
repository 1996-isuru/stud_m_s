const router = require("express").Router();
let Student = require("../models/student");

//this is the about student adding router
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  const newStudent = new Student({
    name,
    age,
    gender,
  });
  //me save eken wenne me hdgtt newStudent kyn ibject ek databse ekat
  //  psass krgnnw.
  //model eka haraha databse eketa pass krnw document ekk vidiht
  newStudent.save();

  //when insert success
  newStudent
    .save()
    .then(() => {
      res.json("Student Added");
    })
    .catch((err) => {
      console.log(err);
    });
});
//post is using when data insert and put is using when update

router.route("/").get((req,res) => {

    Student.find().then((student) => {
        res.json(students)
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;

