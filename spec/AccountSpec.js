describe('Account', function() {
  beforeEach(function() {
    mockAccount = new Account();
  });

  it('balance should be empty on instantiation', function() {
    expect(mockAccount.accountBalance).toEqual([]);
  });

  describe('#calculateBalance', function() {
    it('sums the transactionHistory and pushes to accountBalance array', function() {
      mockAccount.calculateBalance([10, 90]);
      expect(mockAccount.accountBalance).toEqual([100]);
    });
  });
});
