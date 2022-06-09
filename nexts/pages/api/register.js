import connection from '../../lib/mongodb'
const {registerValidation} = require('../../lib/validation')
const bcrypt = require('bcrypt')
const User = require('../../model/user')

connection()

const register = async (req, res) =>{
  if (req.method === 'POST') {
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

  } else if(req.method === 'GET'){
    return res.json({message: "Get not allowed"})
  }


}
module.exports = register
