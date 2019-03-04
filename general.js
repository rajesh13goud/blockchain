var Web3 = require('web3');

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var contractAddress = "0x4c314510590ceae3c32a4921d4eb08310a673d23";
var contractABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "stateIntVariable",
    "outputs": [
      {
        "name": "",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "",
        "type": "int256"
      }
    ],
    "name": "ageRead",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_personIdentifier",
        "type": "address"
      }
    ],
    "name": "getAge",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }
]
  var contractInstance = web3.eth.contract(contractABI).at(contractAddress);

  var res = contractInstance.getAge.call(23,{from: web3.eth.accounts[0], gas: 4700000});

  web3.eth.sendTransaction({from: web3.eth.accounts[1], to: "0xA7E8eBA2366C98e6Ae7282CE15b708DB6EC3eDf4",value: web3.toWei(0.5,"ether")});


  console.log(res.toNumber());

