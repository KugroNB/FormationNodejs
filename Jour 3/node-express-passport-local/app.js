import dotenv from 'dotenv'
import passport  from 'passport'
import express from 'express'
import ejsLayout from  'express-ejs-layouts'
import methodOverride  from 'method-override'
import session  from 'express-session'
import MongoStore from 'connect-mongo'

import authenticateUser from './passport.js'
import userRoutes  from './routes/users.js'
import indexRoute  from './routes/index.js'
import db from './db.js'


const app = express()

// use environment variables locally.
if(process.env.NODE_ENV !== 'production') dotenv.config()
db()
authenticateUser(passport)

// register templating engine
app.set('view engine', 'ejs')
app.use(ejsLayout)

// receive form data
app.use(express.urlencoded({extended: false, limit: '2mb'}))

// use express sessions
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODBURI }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

// passport session
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

// routes
app.use('/', indexRoute)
app.use('/users', userRoutes)

// listen for requests
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Listening on port ${PORT}`))