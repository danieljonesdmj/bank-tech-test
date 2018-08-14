describe('Printer', function() {
  it('can display the full account summary', function() {
    printer = new Printer();
    printer.accountSummary = ['12/08/2018 || 50.00 ||   || 50.00', '13/08/2018 ||   || -10.00 || 40.00']
    expect(printer.printAccountSummary()).toEqual('date || credit || debit || balance ' + '\n' + '12/08/2018 || 50.00 ||   || 50.00' + '\n' + '13/08/2018 ||   || -10.00 || 40.00')
  })
})
