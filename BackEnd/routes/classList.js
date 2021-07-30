const router = require("express").Router();
let Class = require("../models/ClassList");

router.route("/addclass").post((req, res) => {
  const className = req.body.className;
  const grade = req.body.grade;
  const useremail = req.body.email;

  const newStudent = new Class({
    className,
    grade,
    useremail,  
  });
  newStudent
    .save()
    .then(() => {
      res.json("Student Added");
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error with update data." });
    });
});

router.route("/showclasslist").get((req, res) => {
  Class.find({ useremail: req.query.EMAIL })
    .then((classes) => {
      res.json(classes);
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.route("/update/:id").put(async (req, res) => {
//   let userId = req.params.id;
//   const { name, age, gender } = req.body;
//   const updateStudent = {
//     name,
//     age,
//     gender,
//   };
//   const update = await Student.findByIdAndUpdate(userId, updateStudent)
//     .then(() => {
//       res.status(200).send({ status: "User Updated." });
//     })
//     .catch((err) => {
//       console.log(err);
//       res
//         .status(500)
//         .send({ status: "Error with update data.", error: err.message });
//     });
// });

// router.route("/delete/:id").delete(async (req, res) => {
//   let userId = req.params.id;

//   await Student.findByIdAndDelete(userId).then(() => {
//     res
//       .status(200)
//       .send({ status: "User deleted." })
//       .catch((err) => {
//         console.log(err);
//         res
//           .status(500)
//           .send({ status: "Error with update.", error: err.message });
//       });
//   });
// });

// router.route("/get/:id").get(async (req, res) => {
//   let userId = req.params.id;
//   const user = await Student.findById(userId)
//     .then((student) => {
//       res.status(200).send({ status: "user fetch", data: student });
//     })
//     .catch((err) => {
//       console.log(err.message);
//       res
//         .status(500)
//         .send({ status: "Error with get user", error: err.message });
//     });
// });
module.exports = router;
