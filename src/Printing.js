function Printer(){
  this.accountSummary = [];
}

Printer.prototype.printAccountSummary = function () {
  return this._printHeaders() + this._printTransactions()
};

Printer.prototype._printTransactions = function () {
  return this.accountSummary.join('\n')
};

Printer.prototype._printHeaders = function () {
  return 'date || credit || debit || balance ' + '\n'
};
