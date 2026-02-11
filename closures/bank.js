function bankAccount(initialBalance) {
    let balance = initialBalance;
    return {
      deposit: (amount) => balance += amount,
      withdraw: (amount) => balance -= amount,
      getBalance: () => balance
    };
  }
  const account = bankAccount(100);
console.log(account.deposit(50)); 
console.log(account.withdraw(1));