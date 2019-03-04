var Migrations = artifacts.require("./generalStructure.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
