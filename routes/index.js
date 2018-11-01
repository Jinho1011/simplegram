var express = require('express')
var router = express.Router()

/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Express' })
})

/* GET join page. */
router.get('/join', function (req, res, next) {
  res.render('join', { title: 'Express' })
})

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('home', { title: 'Express' })
})

module.exports = router
