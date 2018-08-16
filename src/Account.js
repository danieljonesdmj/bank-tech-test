function Account(){
  this.accountBalance = [];
}

Account.prototype.calculateBalance = function (transactionHistory) {
  var sum = transactionHistory.reduce((a, b) => a + b, 0);
  this.accountBalance.push(sum);
};
