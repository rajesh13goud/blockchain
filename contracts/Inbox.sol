pragma solidity ^0.4.22;


contract Inbox {
  string public message;
  constructor(string newMassage) public {
    message = newMassage;
  }
  function setMessage(string initialMessage) public{
    message = initialMessage;
  }
  function getMessage() public view returns(string){
    return message;
  }
}
