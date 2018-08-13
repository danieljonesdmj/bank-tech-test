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

  it('holds history of transaction amounts', function() {
    balance.accountBalance = 100
    balance.withdraw('13/08/2018', 20)
    balance.withdraw('13/08/2018', 10)
    balance.deposit('13/08/2018', 50)
    expect(balance.transactionAmount).toEqual(['20', '10', '50'])
  })

  it('has headings for the account summary formatted', function() {
    expect(balance.printHeaders()).toEqual('date || credit || debit || balance ' + '\n')
  })

  it('full account summary can be printed', function() {
    balance.accountBalance = 100
    balance.withdraw('13/08/2018', 10)
    balance.deposit('14/08/2018', 50)
    expect(balance.printAccountSummary()).toEqual('date || credit || debit || balance ' + '\n' + '13/08/2018 ||   || 10 || 140' + '\n' + '14/08/2018 || 50 ||   || 140')
  })

  it('holds history of transaction dates', function() {
    balance.withdraw('13/08/2018', 20)
    balance.withdraw('13/08/2018', 10)
    balance.deposit('14/08/2018', 50)
    expect(balance.transactionDate).toEqual(['13/08/2018', '13/08/2018', '14/08/2018'])
  })

  it('holds history of transaction type', function() {
    balance.withdraw('13/08/2018', 20)
    balance.deposit('14/08/2018', 50)
    expect(balance.transactionType).toEqual(['Debit', 'Credit'])
  })

  it('adds withdrawal transaction details to summary', function() {
    balance.accountBalance = 50
    balance.withdraw('13/08/2018', 20)
    expect(balance.accountSummary).toEqual(['13/08/2018 ||   || 20 || 30'])
  })

  it('adds deposit transaction details to summary', function() {
    balance.accountBalance = 50
    balance.deposit('13/08/2018', 20)
    expect(balance.accountSummary).toEqual(['13/08/2018 || 20 ||   || 70'])
  })
})
