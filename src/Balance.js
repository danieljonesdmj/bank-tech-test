function Balance(){
  this.accountBalance = [];
  this.transactionAmount = [];
  this.transactionDate = [];
  this.transactionType = [];
  this.accountSummary = [];
}

Balance.prototype.deposit = function(date, num) {
  this.transactionAmount.push(num)
  this.transactionDate.push(date)
  this.transactionType.push('Credit')
  this.calculateBalance()
  this.addRow();
}

Balance.prototype.withdraw = function (date, num) {
    this.transactionAmount.push(-num)
    this.transactionDate.push(date)
    this.transactionType.push('Debit')
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
  for (var i = 0; i < this.transactionType.length; i++) {
    if (this.transactionType[i] === 'Debit') {
      var debit = this.transactionDate[i].toString() + ' ||   || ' + this.transactionAmount[i] + ' || ' + this.accountBalance[i].toString();
        this.accountSummary.length = i
        this.accountSummary.push(debit)
  } else if ( this.transactionType[i] === 'Credit') {
      var credit = this.transactionDate[i].toString() + ' || ' + this.transactionAmount[i] + ' ||   || ' + this.accountBalance[i].toString();
        this.accountSummary.length = i
        this.accountSummary.push(credit)
      }
  }
};
