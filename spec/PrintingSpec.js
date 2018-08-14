describe('Printing', function() {
  it('can display full account summary', function() {
    printing = new Printing();
    printing.accountSummary = ['12/08/2018 || 50.00 ||   || 50.00', '13/08/2018 ||   || -10.00 || 40.00']
    expect(printing.printAccountSummary()).toEqual('date || credit || debit || balance ' + '\n' + '12/08/2018 || 50.00 ||   || 50.00' + '\n' + '13/08/2018 ||   || -10.00 || 40.00')
  })
})
