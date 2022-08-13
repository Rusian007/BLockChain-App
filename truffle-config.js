const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    
    develop: {
      port: 7545
    },
    kovan: {
       provider: () => new HDWalletProvider(`${mnemonic}`, `https://kovan.infura.io/v3/b4316d4c35e44f83a042a717f86acbb6`),
       network_id: 42,       // kovan's id
       gas: 5500000,        
       confirmations: 2,    
       skipDryRun: true     
     },
  }
};
