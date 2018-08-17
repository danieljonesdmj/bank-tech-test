describe('Printer', function() {

  beforeEach(function() {
    printer = new Printer();
  });

  describe('#printAccountSummary', function(){
    it('can display the full account summary', function() {
      printer.accountSummary = ['12/08/2018 || 50.00 ||   || 50.00', '13/08/2018 ||   || -10.00 || 40.00'];
      expect(printer.printAccountSummary()).toEqual('date || credit || debit || balance ' + '\n' + '12/08/2018 || 50.00 ||   || 50.00' + '\n' + '13/08/2018 ||   || -10.00 || 40.00');
    });
  });

  describe('#addDepositRow', function() {
    it('adds deposit date, amount, and balance to accountSummary array', function() {
      printer.addDepositRow(['13/08/2018', '14/08/2018'], [20, -10, 30], [20, 10, 40]);
      expect(printer.accountSummary[0]).toEqual('13/08/2018 || 20.00 ||   || 20.00');
    });
  });

  describe('#addWithdrawRow', function() {
    it('adds withdrawal date, amount, and balance to accountSummary array', function() {
      printer.addWithdrawRow(['14/08/2018', '15/08/2018'], [-20, 10, 30], [-20, 10, 40]);
      expect(printer.accountSummary[0]).toEqual('14/08/2018 ||   || -20.00 || -20.00');
    });
  });
});
