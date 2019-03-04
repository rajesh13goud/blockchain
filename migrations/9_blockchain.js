var Migrations = artifacts.require("./blockchain.py");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
