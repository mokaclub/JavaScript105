import eurosFormatter from './euroFormatter.js';

function createWallet(name, cash = 0) {
  return {
    _name: name,
    _cash: cash,
    dailyAllowance: 40, 
    dayTotalWithdrawals: 0,

    deposit: function (amount) {
      this._cash += amount;
    },

    withdraw: function (amount) {
      if (this.dayTotalWithdrawals + amount > this.dailyAllowance) {
        console.log(`Daily withdrawal limit reached for ${this._name}`);
        return 0;
      }

      if (this._cash - amount < 0) {
        console.log(`Insufficient funds for ${this._name}`);
        return 0;
      }

      this._cash -= amount;
      this.dayTotalWithdrawals += amount;
      return amount;
    },

    transferInto: function (wallet, amount) {
      console.log(
        `Transferring ${eurosFormatter.format(amount)} from ${
          this._name
        } to ${wallet.getName()}`
      );
      const withdrawnAmount = this.withdraw(amount);
      wallet.deposit(withdrawnAmount);
    },

    reportBalance: function () {
      console.log(
        `Name: ${this._name}, balance: ${eurosFormatter.format(this._cash)}`
      );
    },

    resetDailyAllowance: function () {
      this.dayTotalWithdrawals = 0;
    },

    setDailyAllowance: function (newAllowance) {
      this.dailyAllowance = newAllowance;
    },

    getName: function () {
      return this._name;
    },
  };
}

function main() {
  const walletJack = createWallet('Jack', 100);
  const walletJoe = createWallet('Joe', 10);
  const walletJane = createWallet('Jane', 20);

  walletJack.transferInto(walletJoe, 50);
  walletJane.transferInto(walletJoe, 25);

  walletJane.deposit(20);
  walletJane.transferInto(walletJoe, 25);

  walletJack.reportBalance();
  walletJoe.reportBalance();
  walletJane.reportBalance();

  //  start  new day
  walletJack.resetDailyAllowance();
  walletJoe.resetDailyAllowance();
  walletJane.resetDailyAllowance();

  // Change daily allowance for Jack
  walletJack.setDailyAllowance(50);

  //  withdraw exceeding  allowance daily.
  walletJack.withdraw(60); 
  walletJack.reportBalance(); 
}

main();
