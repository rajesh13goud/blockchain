var Migrations = artifacts.require("./Bank.sol");
contract('Bank', function(accounts) {
  it("should assert true", function(done) {
    var bank = Bank.deployed();
    assert.isTrue(true);
    done();
  });
});
