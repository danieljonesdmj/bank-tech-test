describe('Account', function() {

  beforeEach(function() {
    account = new Account();
    transaction = new Transaction();
  })

  it('should start at zero', function() {
    transaction.calculateBalance()
    expect(account.accountBalance).toEqual([0])
  })

  it('has headings for the account summary formatted', function() {
    expect(account.printHeaders()).toEqual('date || credit || debit || balance ' + '\n')
  })

  it('full account summary can be printed', function() {
    transaction.deposit('12/08/2018', 50)
    transaction.withdraw('13/08/2018', 10)
    transaction.withdraw('14/08/2018', 10)
    expect(account.printAccountSummary()).toEqual('date || credit || debit || balance ' + '\n' + '12/08/2018 || 50.00 ||   || 50.00' + '\n' + '13/08/2018 ||   || -10.00 || 40.00' + '\n' + '14/08/2018 ||   || -10.00 || 30.00')
  })

  it('adds withdrawal transaction details to summary', function() {
    transaction.deposit('12/08/2018', 100)
    transaction.withdraw('13/08/2018', 20)
    expect(account.accountSummary[1]).toEqual('13/08/2018 ||   || -20.00 || 80.00')
  })

  it('adds deposit transaction details to summary', function() {
    transaction.deposit('13/08/2018', 20)
    expect(account.accountSummary).toEqual(['13/08/2018 || 20.00 ||   || 20.00'])
  })
})
