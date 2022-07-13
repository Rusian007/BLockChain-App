// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <8.10.0;
pragma experimental ABIEncoderV2;


contract HashFile {

    struct HashStruct {
        string FileName;
        string FileType;
        string FileHash;
    }
    HashStruct[] private HashArray;

    function store(string memory theHash, string memory _name, string memory _type) public {
        HashStruct memory newStruct = HashStruct(_name, _type, theHash);
        HashArray.push(newStruct);
    }


    function retrieve() public view returns (HashStruct[] memory) {
        return HashArray;
    }
}
