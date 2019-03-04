var Web3 = require('web3');

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var contractAddress = "0x4306bfc99dedd3ee56c79d6104c9a4bca967d36e";
var contractABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "getValue",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "setValue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]



  var contractInstance = web3.eth.contract(contractABI).at(contractAddress);
  //var res = contractInstance.setValue.call({from: web3.eth.accounts[0], gas: 4700000});

  var res = contractInstance.getValue.call({from: web3.eth.accounts[0], gas: 4700000});

  web3.eth.sendTransaction({from: web3.eth.accounts[1], to: "0xA7E8eBA2366C98e6Ae7282CE15b708DB6EC3eDf4",value: web3.toWei(0.5,"ether")});


  console.log(res);

