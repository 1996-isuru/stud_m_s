const router = require("express").Router();
let Student = require("../models/student");

//this is the about student adding router
//methana me "/add" nisa http://localhost:8070/student/add kiyn ekat ynw
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
  //psass krgnnw.
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


//http://localhost:8070/student methan "/" nisa aye me http eka 
// agata mokuth en ne. meken wenne studentla seramatam adala wenw
router.route("/").get((req,res) => {

    //request eka success nam then eka athulat ynw ntnm catch
    Student.find().then((students) => {
        res.json(students)
    }).catch((err) => {
        console.log(err)
    })
})


//update section\
//http://localhost:8070/update/22222
//methanadi url eke /update ekata passe ena eka id ek vidihat fetch krgnnw
//id ek vitrk wnm gnn plwn. methka : aniwa dnn one  
//put eken saha post dekenm data update krnn plwn
router.route("/update/:id").put(async (req,res) {
    let userId = req.param.id;
    
})

module.exports = router;

