function Balance(){
  this.accountBalance = 0;
  this.transactionAmount = [];
  this.transactionDate = [];
  this.transactionType = [];
}

Balance.prototype.deposit = function(date, num) {
  this.accountBalance += num;
  var numString = num.toString();
  this.transactionAmount.push(numString)
  this.transactionDate.push(date)
  this.transactionType.push('Credit')
}

Balance.prototype.withdraw = function (date, num) {
    this.accountBalance -= num;
    var numString = num.toString();
    this.transactionAmount.push(numString)
    this.transactionDate.push(date)
    this.transactionType.push('Debit')
};

Balance.prototype.printAccountSummary = function () {
  return 'Balance ' + this.accountBalance.toFixed(2);
};

Balance.prototype.printHeaders = function () {
  return 'date || credit || debit || balance '
};
