const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const { sequelize } = require('./models')
const passportConfig = require('./passport')
const indexRouter = require('./routes/index')

const app = express()
sequelize.sync()
passportConfig(passport)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser('nodebirdsecret'))
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'nodebirdsecret',
  cookie: {
    httpOnly: true,
    secure: false
  }
}))
app.use(flash())

app.use('/', indexRouter)

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
