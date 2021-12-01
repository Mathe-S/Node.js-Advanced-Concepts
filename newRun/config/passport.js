const mongoose = require('mongoose')
const User = require('../model/User')
const GoogleStrategy = require('passport-google-oauth20').Strategy


module.exports = function (passport) {

    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: "/auth/google/callback"
            },
            async (accessToken, refreshToken, profile, cb) => {
                const newUser = {
                    googleId: profile.id,
                    displayName: profile.displayName,
                    image: profile.photos[0].value
                }

                try {
                    const user = await User.findOne({ googleId: profile.id })
                    if (user) {
                        cb(null, user)
                    } else {
                        await User.create(newUser)
                        cb(null, newUser)
                    }
                } catch (error) {
                    console.log("error: ", error)
                }
            }
        )
    )


    passport.serializeUser((user, done) => {
        done(null, user);
    })

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user))
    })
}