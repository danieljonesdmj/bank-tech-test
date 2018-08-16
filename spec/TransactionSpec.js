describe('Transaction', function() {

  beforeEach(function() {
    var mockAccount = () => {
      accountBalance: []
    }

    var mockPrinter = () => {
      accountSummary: []
    }

    mockTransaction = new Transaction(mockAccount.accountBalance, mockPrinter.accountSummary);
  });

  describe('#deposit', function() {
    beforeEach(function() {
      mockTransaction.transactionHistory = [10, 20];
      mockTransaction.transactionDate = ['14/08/2018', '13/08/2018'];
    });

    it('can push transaction amount into transactionHistory array', function() {
      mockTransaction.deposit('13/08/2018', 10);
      expect(mockTransaction.transactionHistory).toEqual([10, 20, 10]);
    });

    it('can push transaction date into transactionDate array', function() {
      mockTransaction.deposit('10/08/2018', 20);
      expect(mockTransaction.transactionDate).toEqual(['14/08/2018', '13/08/2018', '10/08/2018']);
    });
  });

  describe('#withdraw', function() {
    beforeEach(function() {
      mockTransaction.transactionHistory = [10, 20];
      mockTransaction.transactionDate = ['14/08/2018', '13/08/2018'];
    });

    it('can push transaction amount into transactionHistory array', function() {
      mockTransaction.withdraw('10/08/2018', 5);
      expect(mockTransaction.transactionHistory).toEqual([10, 20, -5]);
    });

    it('can push transaction date into transactionDate array', function() {
      mockTransaction.withdraw('13/08/2018', 5);
      expect(mockTransaction.transactionDate).toEqual(['14/08/2018', '13/08/2018', '13/08/2018']);
    });
  });
});
