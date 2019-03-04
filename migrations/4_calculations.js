var Migrations = artifacts.require("./calulations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
