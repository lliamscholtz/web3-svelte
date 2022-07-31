const Hello = artifacts.require('Hello');

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract('Hello', function (accounts) {
  it('should assert true', async function () {
    await Hello.deployed();
    return assert.isTrue(true);
  });

  describe('greet()', () => {
    it("should return 'Hello from the Blockchain'", async () => {
      const hello = await Hello.deployed();
      const result = await hello.greet();
      const expected = 'Hello from the Blockchain';
      assert.equal(result, expected);
    });
  });

  describe('owner()', () => {
    it('can return the owner', async () => {
      const hello = await Hello.deployed();
      const result = await hello.owner();
      const expected = 'the current owner';
      assert(result, expected);
    });
    it('should return the owners address', async () => {
      const hello = await Hello.deployed();
      const result = await hello.owner();
      const expected = accounts[0];
      assert(result, expected, "matches the owner's address");
    });
  });

  describe('updateGreeting()', () => {
    it("should update the greeting to 'Goodbye from the Blockchain'", async () => {
      const hello = await Hello.deployed();
      await hello.updateGreeting('Goodbye from the Blockchain');
      const result = await hello.greet();
      const expected = 'Goodbye from the Blockchain';
      assert.equal(result, expected);
    });
  });
});
