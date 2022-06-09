const {auth} = require('../../lib/validation')

const home = (req, res)=>{
  return 	res.json({
		message: "In development"
	})
}
module.exports = home
