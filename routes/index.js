const express = require('express')
const router = express.Router()
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')

/* GET login page. */
router.get('/', isNotLoggedIn, function (req, res, next) {
  res.render('login', {
    title: 'Dong',
    user: req.user,
    loginError: req.flash('loginError')
  })
})

/* GET join page. */
router.get('/join', isNotLoggedIn, function (req, res, next) {
  res.render('join', {
    title: 'Dong',
    user: req.user,
    joinError: req.flash('joinError')
  })
})

/* GET home page. */
router.get('/home', isLoggedIn, function (req, res, next) {
  res.render('home', {
    title: 'Dong',
    user: req.user
  })
})

module.exports = router
