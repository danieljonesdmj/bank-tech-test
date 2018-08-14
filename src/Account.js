function Account(){
  this.accountBalance = [];
  this.accountSummary = [];
}

Account.prototype.printAccountSummary = function () {
  return this.printHeaders() + this.printTransactions()
};

Account.prototype.printTransactions = function () {
  return this.accountSummary.join('\n')
};

Account.prototype.printHeaders = function () {
  return 'date || credit || debit || balance ' + '\n'
};
