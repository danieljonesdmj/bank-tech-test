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

  it('can be withdrawn from', function() {
    balance.accountBalance = 10
    balance.withdraw(5)
    expect(balance.accountBalance).toEqual(5)
  })

  it('summary can be printed', function() {
    balance.accountBalance = 100
    expect(balance.printAccountSummary()).toEqual('Balance 100.00')
  })

  it('holds history of transactions', function() {
    balance.accountBalance = 100
    balance.withdraw(20)
    balance.withdraw(10)
    balance.deposit(50)
    expect(balance.accountSummary).toContain(['Debit', '20'], ['Debit', '10'], ['Credit', '50'])
  })
})
