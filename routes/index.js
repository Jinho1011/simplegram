const express = require('express')
const router = express.Router()

/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('login', {
    title: 'Dong',
    user: null,
    loginError: req.flash('loginError')
  })
})

/* GET join page. */
router.get('/join', function (req, res, next) {
  res.render('join', {
    title: 'Dong',
    user: null,
    joinError: req.flash('joinError')
  })
})

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('home', {
    title: 'Dong',
    user: null
  })
})

module.exports = router
