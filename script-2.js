let exitProgram = false;

function createInvestmentAccount(initialAmount, annualInterestRate) {
    if (isNaN(initialAmount) || isNaN(annualInterestRate)) {
        alert("You sly fox! You ought to write a number!");
    } else {
        alert("Your account has been created!");
        let startAmount = Number(initialAmount);
        function deposit(depositAmount) {
            if (isNaN(depositAmount)) {
                alert("You sly fox! You ought to write a number!");
            } else {
                initialAmount = Number(initialAmount) + Number(depositAmount);
                alert("You have deposited " + depositAmount + "$ Now you have on your balance " + initialAmount + "$");
                return initialAmount;
            }
        }
        function withdraw(withdrawAmount) {
            if (isNaN(withdrawAmount)) {
                alert("You sly fox! You ought to write a number!");
            } else {
                if (withdrawAmount > initialAmount) {
                    alert("You don't have that amount of money! You have " + initialAmount + "$");
                } else {
                    initialAmount = Number(initialAmount) - Number(withdrawAmount);
                    alert("You have withdrawn " + withdrawAmount + "$ Now you have on your balance " + initialAmount + "$");
                    return initialAmount;
                }
            }
        }
        function calculateProfit(investmentYears) {
            if (isNaN(investmentYears)) {
                alert("You sly fox! You ought to write a number!");
            } else if (investmentYears > 50) {
                alert("I think this might be too much");
            } else {
                let finalAmount = Number(initialAmount);
                for (let i = 0; i < investmentYears; i++) {
                    finalAmount = finalAmount * (Number(annualInterestRate)/100+1);
                }
                alert("In " + investmentYears + " years you will have " + finalAmount.toFixed(2) + "$");
            }
        }
        function getAccountInfo() {
            alert("Now you have " + initialAmount + "$ on your account \nYour annual interest rate equals " + annualInterestRate + "%");
            if (initialAmount > startAmount) {
                let difference = initialAmount - startAmount;
                alert("With us you've earned " + difference + "$");
            }
        }
        while (exitProgram == false) {
            let userDecision = prompt("Menu \n \n 1. Deposit \n 2. Withdraw \n 3. Calculate profit \n 4. Account information \n 5. Exit \n \n (to select a menu number, type its number in the list)")
            if (isNaN(userDecision)) {
                alert("You sly fox! You ought to write a number!");
            } else if (Number(userDecision) == 1) {
                deposit(prompt("How much are you willing to deposit?"));
            } else if (Number(userDecision) == 2) {
                withdraw(prompt("How much are you willing to withdraw?"));
            } else if (Number(userDecision) == 3) {
                calculateProfit(prompt("To calculate your profit, please, enter the amount of years that you are planning to keep the investments for:"));
            } else if (Number(userDecision) == 4) {
                getAccountInfo();
            } else if (Number(userDecision) == 5) {
                alert("We will meet again, Perry the Platypus!")
                exitProgram = true;
            } else {
                alert("This number isn't included in the menu list!")
            }
        }
    }

}
createInvestmentAccount(prompt("Please, enter down the initial amount"), prompt("Please, enter down the annual interest rate"));