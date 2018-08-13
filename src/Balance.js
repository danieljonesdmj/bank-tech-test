function Balance(){
  this.accountBalance = 0;
  this.transactionAmount = [];
  this.transactionDate = [];
}

Balance.prototype.deposit = function(date, num) {
  this.accountBalance += num;
  var numString = num.toString();
  this.transactionAmount.push(numString)
  this.transactionDate.push(date)
}

Balance.prototype.withdraw = function (date, num) {
    this.accountBalance -= num;
    var numString = num.toString();
    this.transactionAmount.push(numString)
    this.transactionDate.push(date)
};

Balance.prototype.printAccountSummary = function () {
  return 'Balance ' + this.accountBalance.toFixed(2);
};

Balance.prototype.printHeaders = function () {
  return 'date || credit || debit || balance '
};
