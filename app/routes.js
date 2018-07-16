const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line
router.post('/juggling-trick', function (req, res) {
  var balls = req.session.data['juggling-balls']
  if (balls=="None - I can't juggle") {
    res.redirect('/ineligible')
  }
  else {res.redirect('/juggling-trick')}
})

module.exports = router
