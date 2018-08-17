function Transaction(account = new Account(), printer = new Printer()){
  this.transactionHistory = [];
  this.transactionDate = [];
  this.account = account;
  this.printer = printer;
}

Transaction.prototype.deposit = function(date, num) {
  this.transactionHistory.push(num);
  this.transactionDate.push(date);
  this.account.calculateBalance(this.transactionHistory);
  this.printer.addDepositRow(this.transactionDate, this.transactionHistory, this.account.accountBalance);
};

Transaction.prototype.withdraw = function (date, num) {
  this.transactionHistory.push(-num);
  this.transactionDate.push(date);
  this.account.calculateBalance(this.transactionHistory);
  this.printer.addWithdrawRow(this.transactionDate, this.transactionHistory, this.account.accountBalance);
};
