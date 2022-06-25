// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

/**
 * The Users contract saves users information. With hashing.
 */
contract users {

  constructor() public {
    
  }

  function hit() public view returns (string memory){
  	return "Users connected with Blockchain";
  }
}
