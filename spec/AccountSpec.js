describe('Account', function() {

  beforeEach(function() {
    account = new Account();
    transaction = new Transaction();
  })

  it('should start at zero', function() {
    transaction.calculateBalance()
    expect(account.accountBalance).toEqual([0])
  })
})
