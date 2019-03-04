pragma solidity ^0.4.22;


contract sumContract {
  function sum(uint a, uint b) public returns(uint) {
    return a + b;
    }
}

contract multiContract is sumContract {
  function multiply(uint a, uint b) public returns (uint) {
    return a * b;
  }
} 

contract divideContract is sumContract {
  function divide(uint a, uint b) public returns (uint) {
    return a/b;
  }
}

contract subContract is sumContract, multiContract,divideContract {
  function sub(uint a, uint b) public returns (uint) {
    return a-b;
  }
}
contract client{
  function workWithInheritance() public returns (uint){
    uint a = 20;
    uint b = 10;
    subContract subT = new subContract();
    return subT.sub(a,b);

  }
}

