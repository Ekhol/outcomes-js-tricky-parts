function createAccount(pin, amount) {
    return {
        checkBalance(input) {
            if (input !== pin) {
                return "Invalid Pin";
            }
            return `$${amount}`;
        },
        deposit(input, depos) {
            if (input !== pin) {
                return "Invalid Pin";
            }
            amount += depos;
            return `Deposited $${depos}. Current balance: $${amount}`;
        },
        withdraw(input, withdrawAmt) {
            if (input !== pin) {
                return "Invalid Pin";
            }
            if (withdrawAmt > amount) {
                return "Cannot over-draw account";
            }
            amount -= withdrawAmt;
            return `$${withdrawAmt} withdrawn. Balance remaining: ${amount}`;
        },
        changePin(oldPin, newPin) {
            if (oldPin !== pin) {
                return "Invalid Pin";
            }
            pin = newPin;
            return "Pin changed successfully";
        }
    };
}

module.exports = { createAccount };
