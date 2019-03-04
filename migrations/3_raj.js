var Migrations = artifacts.require("./raj.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
