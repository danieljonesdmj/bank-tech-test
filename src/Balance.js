function Balance(){
  this.accountBalance = 0;
}

Balance.prototype.deposit = function(num) {
  this.accountBalance += num;
}
