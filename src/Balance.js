function Balance(){
  this.accountBalance = 0;
  this.accountSummary = [];
}

Balance.prototype.deposit = function(date, num) {
  this.accountBalance += num;
  var numString = num.toString();
  this.accountSummary.push([numString, date])
}

Balance.prototype.withdraw = function (date, num) {
    this.accountBalance -= num;
    var numString = num.toString();
    this.accountSummary.push([numString, date])
};

Balance.prototype.printAccountSummary = function () {
  return 'Balance ' + this.accountBalance.toFixed(2);
};

Balance.prototype.printHeaders = function () {
  return 'date || credit || debit || balance '
};
