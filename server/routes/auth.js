const router = require('express').Router()
const User = require('../model/user')
const {registerValidation,LoginValidation} = require('../validation')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = require('../validation')

router.post('/register',async (req,res)=>{

  const {error} = registerValidation(req.body)
  if(error) return res.status(400).json({message: error.details[0].message})

  //check if user exists
  const userExists = await User.findOne({email: req.body.email})
  if(userExists) return res.status(400).json({message: "User already exists"})

  // Password Hash
  const salt = await bcrypt.genSalt(10)
  const hashedPass = await bcrypt.hash(req.body.password, salt)

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPass
  })
  try {
    const newuser = await user.save()
    res.send({user: user._id, message: "User Created"})

  } catch (e) {
    return res.status(400).send(e)
  }

})

router.post('/login', async (req,res)=>{

  const {error} = LoginValidation(req.body)
  if(error) return res.status(400).json({message: error.details[0].message})

  const userExists = await User.findOne({username: req.body.username})
  if (userExists){
    const validPass = await bcrypt.compare(req.body.password, userExists.password)
    if(validPass){
      //Create Token for user
      // login user
      console.log(secret.TOKEN_SECRET)
      const token = jwt.sign({_id: userExists._id},secret.TOKEN_SECRET)
      res.header('auth-token', token).send({status: "Logged In", token})

    } else{
      return res.json({message: "password doesn't match !"})
    }
    
  } else{
    return res.json({message: "User Doesn't Exists 🌚"})
  }

})

module.exports = router
// const validPass = await bcrypt.compare(req.body.password, user.password)
