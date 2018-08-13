describe('Balance', function() {

  beforeEach(function() {
    balance = new Balance();
  })

  it('holds a value of zero', function() {
    expect(balance.accountBalance).toEqual(0)
  })

  it('can be deposited into', function() {
    balance.deposit(10)
    expect(balance.accountBalance).toEqual(10)
  })
})
