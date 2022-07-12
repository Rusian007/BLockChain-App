var Users = artifacts.require("./users.sol");

module.exports = function(deployer){
	deployer.deploy(Users);
}