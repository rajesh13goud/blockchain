var Migrations = artifacts.require("./newH.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
