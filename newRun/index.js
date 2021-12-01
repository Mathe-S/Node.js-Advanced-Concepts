require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const session = require('express-session')
const passport = require('passport')
require('./config/passport')(passport)

const cors = require('cors')

connectDB()
const app = express()

// cors
app.use(cors())

// session
app.use(session({
    secret: 'napoleon was short',
    resave: false,
}))

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("keep learning matheus")
})

app.use('/auth', require('./routes/auth'))

app.listen(PORT, () => {
    console.log("listening to port " + PORT)
})