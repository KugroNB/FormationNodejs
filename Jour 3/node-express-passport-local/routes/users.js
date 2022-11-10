import express from "express"
import passport  from 'passport'
import bcrypt  from 'bcryptjs'
const router = express.Router()

import User  from '../models/User.js'

// L O G I N
router.get('/login', (req, res) => res.render('login'))

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/register'
}))

// R E G I S T R A T I O N
router.get('/register',  (req, res) => res.render('register'))

router.post('/register', async (req, res) => {
    const { username, email, pwd, pwdConf } = req.body
    
    // VALIDATION
    const errors = []

    if(pwd !== pwdConf) errors.push(`Passwords don't match`)
    
    const emailTaken = await User.findOne({ email })
    if(emailTaken) errors.push(`Email taken!`)
    
    if(errors.length > 0) res.redirect('/register', { errorMessage: errors})

    // REGISTRATION
    const hashpwd = await bcrypt.hash(pwd, 12)
    let user = new User({ username, email, password: hashpwd })

    try {
        await user.save()
        res.redirect('/users/login')
    } catch {
        res.redirect('/', { message: "There was a problem register the user" })
    }
})

export default router