pragma solidity ^0.4.22;


contract newH {
  uint private simpleInt;

  function getValue() public view returns(uint){
    return simpleInt;
  }
  function setValue(uint _value) public {
    simpleInt = _value;
  }
}

contract client {
  function useNew() public returns(uint) {
    newH myObj = new newH();

    myObj.setValue(10);

    return myObj.getValue();
    
  }
}
