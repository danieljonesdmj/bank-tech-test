describe('Balance', function() {

  beforeEach(function() {
    balance = new Balance();
  })

  it('should start at zero', function() {
    balance.calculateBalance()
    expect(balance.accountBalance).toEqual([0])
  })

  it('can be deposited into', function() {
    balance.transactionAmount = [10, 20]
    balance.deposit('13/08/2018', 10)
    expect(balance.transactionAmount).toEqual([10, 20, 10])
  })

  it('can be withdrawn from', function() {
    balance.transactionAmount = [10, 20]
    balance.withdraw('13/08/2018', 5)
    expect(balance.transactionAmount).toEqual([10, 20, -5])
  })

  it('holds history of transaction amounts', function() {
    balance.withdraw('13/08/2018', 20)
    balance.withdraw('13/08/2018', 10)
    balance.deposit('13/08/2018', 50)
    expect(balance.transactionAmount).toEqual([-20, -10, 50])
  })

  it('has headings for the account summary formatted', function() {
    expect(balance.printHeaders()).toEqual('date || credit || debit || balance ' + '\n')
  })

  it('full account summary can be printed', function() {
    balance.deposit('12/08/2018', 50)
    balance.withdraw('13/08/2018', 10)
    balance.withdraw('14/08/2018', 10)
    expect(balance.printAccountSummary()).toEqual('date || credit || debit || balance ' + '\n' + '12/08/2018 || 50.00 ||   || 50.00' + '\n' + '13/08/2018 ||   || -10.00 || 40.00' + '\n' + '14/08/2018 ||   || -10.00 || 30.00')
  })

  it('holds history of transaction dates', function() {
    balance.withdraw('13/08/2018', 20)
    balance.withdraw('13/08/2018', 10)
    balance.deposit('14/08/2018', 50)
    expect(balance.transactionDate).toEqual(['13/08/2018', '13/08/2018', '14/08/2018'])
  })

  it('adds withdrawal transaction details to summary', function() {
    balance.deposit('12/08/2018', 100)
    balance.withdraw('13/08/2018', 20)
    expect(balance.accountSummary[1]).toEqual('13/08/2018 ||   || -20.00 || 80.00')
  })

  it('adds deposit transaction details to summary', function() {
    balance.deposit('13/08/2018', 20)
    expect(balance.accountSummary).toEqual(['13/08/2018 || 20.00 ||   || 20.00'])
  })
})
