function Transaction(account = new Account(), printer = new Printer()){
  this.transactionHistory = [];
  this.transactionDate = [];
  this.account = account;
  this.printer = printer;
}

Transaction.prototype.deposit = function(date, num) {
  this.transactionHistory.push(num);
  this.transactionDate.push(date);
  this._calculateBalance();
  this._addDepositRow();
};

Transaction.prototype.withdraw = function (date, num) {
  this.transactionHistory.push(-num);
  this.transactionDate.push(date);
  this._calculateBalance();
  this._addWithdrawRow();
};

Transaction.prototype._addDepositRow = function () {
  for (var i = 0; i < this.transactionDate.length; i++) {
    if ( this.transactionHistory[i] > 0) {
      var credit = this.transactionDate[i] + ' || ' + (this.transactionHistory[i] + '.00') + ' ||   || ' + (this.account.accountBalance[i] + '.00');
      this.printer.accountSummary.length = i;
      this.printer.accountSummary.push(credit);
    }
  }
};

Transaction.prototype._addWithdrawRow = function () {
  for (var i = 0; i < this.transactionDate.length; i++) {
    if (this.transactionHistory[i] < 0) {
      var debit = this.transactionDate[i] + ' ||   || ' + (this.transactionHistory[i] + '.00') + ' || ' + (this.account.accountBalance[i] + '.00');
      this.printer.accountSummary.length = i;
      this.printer.accountSummary.push(debit);
    };
  }
}

Transaction.prototype._calculateBalance = function () {
  var sum = this.transactionHistory.reduce((a, b) => a + b, 0);
  this.account.accountBalance.push(sum);
};
