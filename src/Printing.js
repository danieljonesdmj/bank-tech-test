function Printing(){
  this.accountSummary = [];
}

Printing.prototype.printAccountSummary = function () {
  return this._printHeaders() + this._printTransactions()
};

Printing.prototype._printTransactions = function () {
  return this.accountSummary.join('\n')
};

Printing.prototype._printHeaders = function () {
  return 'date || credit || debit || balance ' + '\n'
};
