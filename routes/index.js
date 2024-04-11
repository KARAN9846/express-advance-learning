var express = require('express');
var router = express.Router();
const userModel = require("./users");
const { Cookie } = require('express-session');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// user creation

// router.get('/create', async function(req, res, next) {

//   const createduser = await userModel.create({
//     username:"karan9846",
//     name:"karan",
//     age: 25,
    
//   })
//   res.send(createduser);
// });


// Read

// router.get('/user', async function(req, res) {

//   const users = await userModel.find({
//     username:"karan9846"
//   })
//   res.send(users);
// });


// delete


// router.get('/delete', async function(req, res) {

//   const deleteuser = await userModel.findAndDelete({
//     username:"karan9846"
//   })
//   res.send(deleteuser);
// });





// session


// router.get("/", function (req,res) {
//   req.session.ban = true;
//   res.render("index")

// })


// router.get("/checkban", function (req,res) {
//   if (req.session.ban === true) {
//     res.send("you are banned")
//   }
//   else {
//     res.send("not banned")
//   }
// })


// router.get("/removeban", function (req,res) {
//   req.session.destroy(function(err) {
//     if (err) throw err;
//     res.send("banned removed")
//   })
// })



// Cookie


router.get("/", function (req,res) {
 res.cookie("age", 25)
 res.render("index")

})

router.get("/read", function (req,res) {
console.log(req.cookies.age);
res.send("check")

})

router.get("/delete", function (req,res) {
res.clearCookie("age")
res.send("cleared cookie")

})

module.exports = router;