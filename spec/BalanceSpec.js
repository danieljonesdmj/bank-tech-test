describe('Balance', function() {

  beforeEach(function() {
    balance = new Balance();
  })

  it('holds a value of zero', function() {
    expect(balance.accountBalance).toEqual(0)
  })

  it('can be deposited into', function() {
    balance.deposit('13/08/2018', 10)
    expect(balance.accountBalance).toEqual(10)
  })

  it('can be withdrawn from', function() {
    balance.accountBalance = 10
    balance.withdraw('13/08/2018', 5)
    expect(balance.accountBalance).toEqual(5)
  })

  it('summary can be printed', function() {
    balance.accountBalance = 100
    expect(balance.printAccountSummary()).toEqual('Balance 100.00')
  })

  it('holds history of transactions', function() {
    balance.accountBalance = 100
    balance.withdraw('13/08/2018', 20)
    balance.withdraw('13/08/2018', 10)
    balance.deposit('13/08/2018', 50)
    expect(balance.accountSummary).toContain(['Debit', '20', '13/08/2018'], ['Debit', '10', '13/08/2018'], ['Credit', '50', '13/08/2018'])
  })
})
