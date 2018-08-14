function Transaction(){
  this.transactionAmount = [];
  this.transactionDate = [];
  var account = new Account();
}

Transaction.prototype.deposit = function(date, num) {
  this.transactionAmount.push(num)
  this.transactionDate.push(date)
  this.calculateBalance()
  this.addRow();
}

Transaction.prototype.withdraw = function (date, num) {
    this.transactionAmount.push(-num)
    this.transactionDate.push(date)
    this.calculateBalance()
    this.addRow();
};

Transaction.prototype.addRow = function () {
  for (var i = 0; i < this.transactionDate.length; i++) {
    if (this.transactionAmount[i] < 0) {
      var debit = this.transactionDate[i] + ' ||   || ' + (this.transactionAmount[i] + '.00') + ' || ' + (account.accountBalance[i] + '.00');
        account.accountSummary.length = i
        account.accountSummary.push(debit)
  } else if ( this.transactionAmount[i] > 0) {
      var credit = this.transactionDate[i] + ' || ' + (this.transactionAmount[i] + '.00') + ' ||   || ' + (account.accountBalance[i] + '.00');
        account.accountSummary.length = i
        account.accountSummary.push(credit)
      }
  }
};

Transaction.prototype.calculateBalance = function () {
  var sum = this.transactionAmount.reduce((a, b) => a + b, 0);
    account.accountBalance.push(sum);
};
