// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <8.10.0;
pragma experimental ABIEncoderV2;


contract HashFile {

    string[] HashArray;

    function store(string memory theHash) public {
        HashArray.push(theHash);
    }


    function retrieve() public view returns (string[] memory){
        return HashArray;
    }
}