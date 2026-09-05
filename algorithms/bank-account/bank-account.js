class BankAccount {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount) {
      if(amount <= 0) return `Deposit amount must be greater than zero.`;
      if(amount > 0) {
        const deposit = {type: `deposit`, amount: `${amount}`};
        this.transactions.push(deposit);
        this.balance += amount;
        return `Successfully deposited $${amount}. New balance: $${this.balance}`;
      }
    }

    withdraw(amount) {
      if(amount <= 0 || amount > this.balance) return `Insufficient balance or invalid amount.`;
      if(amount > 0 && amount <= this.balance) {
        const withdraw = {type: `withdraw`, amount: `${amount}`};
        this.transactions.push(withdraw);
        this.balance -= amount;
        return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
      }
    }

    checkBalance() {
        return `Current balance: $${this.balance}`;
    }

    listAllDeposits() {
      const deposits = this.transactions
        .filter(trans => trans.type === "deposit")
        .map(trans => trans.amount)
      return `Deposits: ${deposits.join(",")}`;
    }

    listAllWithdrawals() {
      const withdrawal = this.transactions
        .filter(trans => trans.type === "withdraw")
        .map(trans => trans.amount)
      return `Withdrawals: ${withdrawal.join(",")}`;
    }
}

const myAccount = new BankAccount();

myAccount.deposit(100);
myAccount.deposit(35);
myAccount.deposit(10);
myAccount.withdraw(25);
myAccount.withdraw(15);
