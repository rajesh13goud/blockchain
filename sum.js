var Web3 = require('web3');

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var contractAddress = "0xc66726f7b2a1ae22295d54cfc186b723621d4738";
var contractABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "a",
        "type": "uint256"
      },
      {
        "name": "b",
        "type": "uint256"
      }
    ],
    "name": "sum",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

  var contractInstance = web3.eth.contract(contractABI).at(contractAddress);

  var res = contractInstance.sum.call(20,10,{from: web3.eth.accounts[0], gas: 4700000});

  //web3.eth.sendTransaction({from: web3.eth.accounts[1], to: "0xA7E8eBA2366C98e6Ae7282CE15b708DB6EC3eDf4",value: web3.toWei(0.5,"ether")});


  console.log(res.toNumber());

