class BankAccount {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount) {
      if(amount <= 0) return `Deposit amount must be greater than zero.`;
      if(amount > 0) {
        const deposit = {type: `Deposit`, amount: `${amount}`};
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
        return this.balance;
    }

    listAllWithdrawals() {
      return this.transactions.forEach(trans => trans.type === "withdraw");
    }
}
