// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

/**
 * The Users contract saves users information. With hashing.
 */
contract users {

  mapping( address => string ) UserAddress;

    function setPassword(string memory pass) public{
        UserAddress[msg.sender] = pass;
    }

    function UserExists() internal view returns (bool){
        if(bytes(UserAddress[msg.sender]).length > 0){
            return true;
        }
        else return false;
            
    }
    
    function checkPassword(string memory receivedpass) public view returns(bool, string memory){
        bool userExist = UserExists();
        if(userExist){
            string memory ourpassword = UserAddress[msg.sender];
            if(keccak256(abi.encodePacked(ourpassword)) == keccak256(abi.encodePacked(receivedpass))){
                return(true, "Logging in");
            }
            else{
                return(false, "Password is wrong !");
            }
        } else {
            return(false, "User Does not exist 😱");
        }
    }

}
