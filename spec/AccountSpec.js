describe('Account', function() {
  it('balance should be empty on instantiation', function() {
    var account = new Account();
    expect(account.accountBalance).toEqual([])
  })
})
