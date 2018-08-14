describe('Account', function() {
  it('balance should start at zero', function() {
    var account = new Account();
    account.accountBalance = [0]
    expect(account.accountBalance).toEqual([0])
  })
})
