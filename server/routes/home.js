const router = require('express').Router()
const {auth} = require('../validation')

router.get('/home',auth, (req,res)=>{
	res.json({
		message: "In development"
	})
})

module.exports = router