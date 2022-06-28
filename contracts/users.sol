// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

/**
 * The Users contract saves users information. With hashing.
 */
contract users {

    bool private UserState;
    string private Usermessage;

    struct UserInfo {
    string name;
    string email;
    bytes32 password;
    }

    mapping( address => UserInfo ) UserAddress;


    function setnewUser(string memory name, string memory email, string memory password) public{
        bool userExist = UserExists();
        if(userExist){
            setUserAddedorNot(false, "User Already Exists");
        }
        else{
        bytes32 pass = keccak256(abi.encodePacked(password));
        UserInfo memory newUser = UserInfo( name, email, pass);
        UserAddress[msg.sender] = newUser;
        setUserAddedorNot(true, "User Added Successfully");
        }
    }

    function getTheUser() public view returns (string memory, string memory){
        UserInfo memory theUser = UserAddress[msg.sender];
        return (theUser.name, theUser.email);
    }

    function UserExists() internal view returns (bool) {
        string memory theName= UserAddress[msg.sender].name;
        if(bytes(theName).length > 0){
            return true;
        }
        else return false;
            
    }

    function setUserAddedorNot(bool Userstatus, string memory message) internal {
        UserState = Userstatus;
        Usermessage = message;
    }

    function UserAddedorNot() public view returns(bool,string memory){
        return (UserState, Usermessage);
    }
    
    function checkPassword(string memory receivedpass) public view returns(bool, string memory){
        bool userExist = UserExists();
        if(userExist){
            bytes32 password = UserAddress[msg.sender].password;
            if(password == keccak256(abi.encodePacked(receivedpass))){
              return (true, "User Found");
            }
            else{
                return (false, "Wrong password");
            }
        } else {
            return (false, "User Does not exist 😱");
        }
    }
        

}
