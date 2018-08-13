describe('Balance', function() {
  it('holds a value of zero', function() {
    balance = new Balance();
    expect(balance.accountBalance).toEqual(0)
  })

})
