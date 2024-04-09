var express = require('express');
var router = express.Router();
const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', async function(req, res, next) {

  const createduser = await userModel.create({
    username:"karan9846",
    age: 25,
    name:"karan"
  })
  res.send(createduser);
});

module.exports = router;
