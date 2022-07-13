// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;
pragma experimental ABIEncoderV2;
import "./HashFile.sol";

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
    HashFile hf;
    }

    mapping( address => UserInfo ) UserAddress;


    function setnewUser(string memory name, string memory email, string memory password, address theUserAddress) public{
        bool userExist = UserExists(theUserAddress);
        if(userExist){
            setUserAddedorNot(false, "User Already Exists");
        }
        else{
        bytes32 pass = keccak256(abi.encodePacked(password));
        HashFile _hf = new HashFile();
        UserInfo memory newUser = UserInfo( name, email, pass, _hf);
        UserAddress[theUserAddress] = newUser;
        setUserAddedorNot(true, "User Added Successfully");
        }
    }

    function getTheUser(address theUserAddress) public view returns (string memory, string memory){
        UserInfo memory theUser = UserAddress[theUserAddress];
        return (theUser.name, theUser.email);
    }

    function UserExists(address theUserAddress) internal view returns (bool) {
        string memory theName= UserAddress[theUserAddress].name;
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
    
    function checkPassword(string memory receivedpass, address theUserAddress) public view returns(bool, string memory){
        bool userExist = UserExists(theUserAddress);
        if(userExist){
            bytes32 password = UserAddress[theUserAddress].password;
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

    function HashStore(address theUserAddress, string memory theHash, string memory thename, string memory thetype ) public {
        HashFile hashObj = UserAddress[theUserAddress].hf;
        hashObj.store(theHash, thename, thetype);
    }

    function HashSetReturn(address theUserAddress) public view returns(HashFile.HashStruct[] memory) {
        HashFile hashObj = UserAddress[theUserAddress].hf;
        HashFile.HashStruct[] memory obj = hashObj.retrieve();
        return obj;
    }

}
