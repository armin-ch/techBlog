const router = require('express').Router();

router.get('/users/login', (req, res) => {
  res.render('login')
})

router.get('/users/register', (req, res) => {
  res.render('register')
})

router.get('/logout', (req, res) => {
  res.render('logout')
})

router.get('/home', (req, res) => {
  res.render('home')
})

module.exports = router;