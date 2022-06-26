// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

/**
 * The Users contract saves users information. With hashing.
 */
contract users {

  mapping( address => bytes32 ) UserAddress;

    function setPassword(string memory pass) public{
        UserAddress[msg.sender] = keccak256(abi.encodePacked(pass));
    }

    function UserExists() internal view returns (bool){
        if(UserAddress[msg.sender].length > 0){
            return true;
        }
        else return false;
            
    }
    
    function checkPassword(string memory receivedpass) public view returns(bool, string memory){
        bool userExist = UserExists();
        if(userExist){
            if(UserAddress[msg.sender] == keccak256(abi.encodePacked(receivedpass))){
              return (true, "User Found");
            }
            else{
                return(false, "Password is wrong !");
            }
        } else {
            return(false, "User Does not exist 😱");
        }
    }

}
