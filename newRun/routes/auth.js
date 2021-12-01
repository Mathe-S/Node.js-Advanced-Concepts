const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/google', passport.authenticate('google', { scope: ['profile'] }), (req, res) => {
    res.send("movida")
})

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/dashboard/',
    failureRedirect: 'http://localhost:3000/fail/'
}));

module.exports = router