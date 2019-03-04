var Web3 = require('web3'); // created web3 library

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); // created connnection between ganache and web3

var contractAddress = "0xbc1187da58a6da7f4001a53bc462eba25188977a"; // contract current address
var contractABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "manager",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "players",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "Lottery",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "enter",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pickWinner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getPlayers",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
var contractInstance = web3.eth.contract(contractABI).at(contractAddress); // created instances

var presentValue = contractInstance.enter();

console.log(presentValue); //convert wei into ether
//console.log("Balance before bid"+ web3.eth.getBalance(web3.eth.accounts[2]));
//contractInstance.placeBid({from: web3.eth.accounts[2],value: web3.toWei(5,"ether")});
//console.log("Balance after bid"+ web3.eth.getBalance(web3.eth.accounts[2]));



  //var res1 = contractInstance.Add.call(20,10,{from: web3.eth.accounts[0], gas: 4700000}); //calling the function
  //var res2 = contractInstance.sub.call(20,10,{from: web3.eth.accounts[0], gas: 4700000}); //calling the function
  //var res = contractInstance.multi.call(20,10,{from: web3.eth.accounts[0], gas: 4700000}); //calling the function

  //web3.eth.sendTransaction({from: web3.eth.accounts[1], to: "0xA7E8eBA2366C98e6Ae7282CE15b708DB6EC3eDf4",value: web3.toWei(0.5,"ether")});


 // console.log(res1.toNumber());
  //console.log(res2.toNumber());
  //console.log(res.toNumber());


