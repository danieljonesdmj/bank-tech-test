function Printing(){
  this.accountSummary = [];
}

Printing.prototype.printAccountSummary = function () {
  return this.printHeaders() + this.printTransactions()
};

Printing.prototype.printTransactions = function () {
  return this.accountSummary.join('\n')
};

Printing.prototype.printHeaders = function () {
  return 'date || credit || debit || balance ' + '\n'
};
