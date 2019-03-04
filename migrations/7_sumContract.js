var Migrations = artifacts.require("./sumContract.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
