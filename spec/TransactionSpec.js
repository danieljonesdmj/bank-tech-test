describe('Transaction', function() {

  beforeEach(function() {
    account = new Account();
    transaction = new Transaction();
    printer = new Printer();
  });

  it('should instantiate a new account', function(){
    expect(account).toEqual(transaction.account);
  });

  it('should instantiate a new printer', function(){
    expect(printer).toEqual(transaction.printer);
  });

  describe('#deposit', function() {
    beforeEach(function() {
      transaction.transactionHistory = [10, 20];
      transaction.transactionDate = ['14/08/2018', '13/08/2018'];
    });

    it('can push transaction amount into transactionHistory array', function() {
      transaction.deposit('13/08/2018', 10);
      expect(transaction.transactionHistory).toEqual([10, 20, 10]);
    });

    it('can push transaction date into transactionDate array', function() {
      transaction.deposit('10/08/2018', 20);
      expect(transaction.transactionDate).toEqual(['14/08/2018', '13/08/2018', '10/08/2018']);
    });
  });

  describe('#withdraw', function() {
    beforeEach(function() {
      transaction.transactionHistory = [10, 20];
      transaction.transactionDate = ['14/08/2018', '13/08/2018'];
    });

    it('can push transaction amount into transactionHistory array', function() {
      transaction.withdraw('10/08/2018', 5);
      expect(transaction.transactionHistory).toEqual([10, 20, -5]);
    });

    it('can push transaction date into transactionDate array', function() {
      transaction.withdraw('13/08/2018', 5);
      expect(transaction.transactionDate).toEqual(['14/08/2018', '13/08/2018', '13/08/2018']);
    });
  });
});
