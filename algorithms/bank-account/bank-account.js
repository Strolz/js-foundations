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
        this.balance += amount
        return `Successfully deposited ${amount}. New balance: ${this.balance}`
      }
    }

    withdraw(amount) {

    }

    checkBalance() {
        return this.balance;
    }
}
