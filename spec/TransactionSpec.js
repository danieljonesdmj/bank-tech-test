describe('Transaction', function() {

  beforeEach(function() {
    account = new Account();
    transaction = new Transaction();
    printing = new Printing();
  })

  it('can be deposited into', function() {
    transaction.transactionAmount = [10, 20]
    transaction.deposit('13/08/2018', 10)
    expect(transaction.transactionAmount).toEqual([10, 20, 10])
  })

  it('can be withdrawn from', function() {
    transaction.transactionAmount = [10, 20]
    transaction.withdraw('13/08/2018', 5)
    expect(transaction.transactionAmount).toEqual([10, 20, -5])
  })

  it('holds history of transaction amounts', function() {
    transaction.withdraw('13/08/2018', 20)
    transaction.withdraw('13/08/2018', 10)
    transaction.deposit('13/08/2018', 50)
    expect(transaction.transactionAmount).toEqual([-20, -10, 50])
  })

  it('holds history of transaction dates', function() {
    transaction.withdraw('13/08/2018', 20)
    transaction.withdraw('13/08/2018', 10)
    transaction.deposit('14/08/2018', 50)
    expect(transaction.transactionDate).toEqual(['13/08/2018', '13/08/2018', '14/08/2018'])
  })
})
