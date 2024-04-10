var express = require('express');
var router = express.Router();
const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


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

router.get('/user', async function(req, res) {

  const users = await userModel.find({
    username:"karan9846"
  })
  res.send(users);
});

// delete


router.get('/delete', async function(req, res) {

  const deleteuser = await userModel.findAndDelete({
    username:"karan9846"
  })
  res.send(deleteuser);
});

module.exports = router;
