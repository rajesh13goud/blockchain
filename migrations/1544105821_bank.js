// module.exports = function(deployer) {
//   // Use deployer to state migration tasks.
// };
var Migrations = artifacts.require("./Bank.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
