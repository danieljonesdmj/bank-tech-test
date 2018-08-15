describe('Feature Test', function() {
  it('should run a series of transactions and print the summary', function() {
    transaction = new Transaction();
    account = new Account();
    printer = new Printer();
    transaction.deposit('13/02/2018', 100);
    transaction.deposit('14/02/2018', 50);
    transaction.withdraw('15/02/2018', 20);
    expect(transaction.printer.printAccountSummary()).toEqual('date || credit || debit || balance ' + '\n' + '13/02/2018 || 100.00 ||   || 100.00' + '\n' + '14/02/2018 || 50.00 ||   || 150.00' + '\n' + '15/02/2018 ||   || -20.00 || 130.00');
  })
});
