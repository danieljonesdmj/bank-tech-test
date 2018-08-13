function Balance(){
  this.accountBalance = 0;
  this.transactionAmount = [];
  this.transactionDate = [];
  this.transactionType = [];
  this.accountSummary = [];
}

Balance.prototype.deposit = function(date, num) {
  this.accountBalance += num;
  var numString = num.toString();
  this.transactionAmount.push(numString)
  this.transactionDate.push(date)
  this.transactionType.push('Credit')
  this.addRow();
}

Balance.prototype.withdraw = function (date, num) {
    this.accountBalance -= num;
    var numString = num.toString();
    this.transactionAmount.push(numString)
    this.transactionDate.push(date)
    this.transactionType.push('Debit')
    this.addRow();
};

Balance.prototype.printAccountSummary = function () {
  return 'Balance ' + this.accountBalance.toFixed(2);
};

Balance.prototype.printHeaders = function () {
  return 'date || credit || debit || balance '
};

Balance.prototype.addRow = function () {
  for (var i = 0; i < this.transactionType.length; i++) {
    if (this.transactionType[i] === 'Debit') {
      var output = this.transactionDate[i].toString() + ' ||   || ' + this.transactionAmount[i] + ' || ' + this.accountBalance.toString();
        this.accountSummary.push(output)
    } else if ( this.transactionType[i] === 'Credit') {
      var output = this.transactionDate[i].toString() + ' || ' + this.transactionAmount[i] + ' ||   || ' + this.accountBalance.toString();
        this.accountSummary.push(output)
      }
  }
};
