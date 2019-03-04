pragma solidity ^0.4.22;


contract generalStructure {

 //state variables
  int public stateIntVariable; //variable of integer type
  string stateStringVariable; //variable of string type
  address personIdentifier; //variable of address type
  bool constant hasIncome =true; // variable of contant nature
  myStruct human;

//structure definition
  struct myStruct{

    string name; //variable of type string
    uint myAge; //variable of unsigned integer type
    bool isMarried; // variable of boolean type
    uint[] bankAccountsNumbers; //variable - dynamic array of unsigned integer
  }
//modifier declaration
  modifier onlyBy(){
    if(msg.sender == personIdentifier){
      _;
    }
  }
//event declaration
  event ageRead(address, int);

//enum declartion
  enum gender {male, female}

//function definition
  function getAge(address _personIdentifier) onlyBy() payable external returns (uint){


    human = myStruct("rajesh",13,true,new uint[](3)); //using struct myStruct

    gender _gender = gender.male;

    ageRead(personIdentifier, stateIntVariable);
  
  }
}

