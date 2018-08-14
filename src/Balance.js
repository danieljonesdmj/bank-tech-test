function Balance(){
  this.accountBalance = [];
  this.transactionAmount = [];
  this.transactionDate = [];
  this.accountSummary = [];
}

Balance.prototype.deposit = function(date, num) {
  this.transactionAmount.push(num)
  this.transactionDate.push(date)
  this.calculateBalance()
  this.addRow();
}

Balance.prototype.withdraw = function (date, num) {
    this.transactionAmount.push(-num)
    this.transactionDate.push(date)
    this.calculateBalance()
    this.addRow();
};

Balance.prototype.calculateBalance = function () {
  var sum = this.transactionAmount.reduce((a, b) => a + b, 0);
    this.accountBalance.push(sum);
};

Balance.prototype.printAccountSummary = function () {
  return this.printHeaders() + this.printTransactions()
};

Balance.prototype.printTransactions = function () {
  return this.accountSummary.join('\n')
};

Balance.prototype.printHeaders = function () {
  return 'date || credit || debit || balance ' + '\n'
};

Balance.prototype.addRow = function () {
  for (var i = 0; i < this.transactionDate.length; i++) {
    if (this.transactionAmount[i] < 0) {
      var debit = this.transactionDate[i] + ' ||   || ' + (this.transactionAmount[i] + '.00') + ' || ' + (this.accountBalance[i] + '.00');
        this.accountSummary.length = i
        this.accountSummary.push(debit)
  } else if ( this.transactionAmount[i] > 0) {
      var credit = this.transactionDate[i] + ' || ' + (this.transactionAmount[i] + '.00') + ' ||   || ' + (this.accountBalance[i] + '.00');
        this.accountSummary.length = i
        this.accountSummary.push(credit)
      }
  }
};
