function Balance(){
  this.accountBalance = 0;
  this.accountSummary = [];
}

Balance.prototype.deposit = function(date, num) {
  this.accountBalance += num;
  var numString = num.toString();
  this.accountSummary.push(['Credit', numString, date])
}

Balance.prototype.withdraw = function (num) {
    this.accountBalance -= num;
    var numString = num.toString();
    this.accountSummary.push(['Debit', numString])
};

Balance.prototype.printAccountSummary = function () {
  return 'Balance ' + this.accountBalance.toFixed(2);
};
