function Printer(){
  this.accountSummary = [];
}

Printer.prototype.printAccountSummary = function () {
  return this._printHeaders() + this._printTransactions();
};

Printer.prototype._printTransactions = function () {
  return this.accountSummary.join('\n');
};

Printer.prototype._printHeaders = function () {
  return 'date || credit || debit || balance ' + '\n';
};

Printer.prototype.addDepositRow = function (dateArray, historyArray, balanceArray) {
  for (var i = 0; i < dateArray.length; i++) {
    if ( historyArray[i] > 0) {
      var credit = dateArray[i] + ' || ' + (historyArray[i] + '.00') + ' ||   || ' + (balanceArray[i] + '.00');
      this.accountSummary.length = i;
      this.accountSummary.push(credit);
    }
  }
};

Printer.prototype.addWithdrawRow = function (dateArray, historyArray, balanceArray) {
  for (var i = 0; i < dateArray.length; i++) {
    if (historyArray[i] < 0) {
      var debit = dateArray[i] + ' ||   || ' + (historyArray[i] + '.00') + ' || ' + (balanceArray[i] + '.00');
      this.accountSummary.length = i;
      this.accountSummary.push(debit);
    }
  }
};
