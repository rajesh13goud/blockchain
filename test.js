var Web3 = require('web3');

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var contractAddress = "0x6e45838ce5e95699df510cd805fb156f7f6a5113";
var contractABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "message",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "newMassage",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "initialMessage",
        "type": "string"
      }
    ],
    "name": "setMessage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getMessage",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]








var contractInstance = web3.eth.contract(contractABI).at(contractAddress);

contractInstance.setMessage("Hii",{from: web3.eth.accounts[0], gas: 4700000});
var res = contractInstance.getMessage.call()

//   web3.eth.sendTransaction({from: web3.eth.accounts[1], to: "0xA7E8eBA2366C98e6Ae7282CE15b708DB6EC3eDf4",value: web3.toWei(0.5,"ether")});


 console.log(res);

