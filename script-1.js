function createCurrencyConverter(rate) {
    let number = parseInt(rate);
    rate = rate.split('').filter(char => isNaN(char)).join('');
    if (rate == "USD") {
        number = number * 0.89;
        number = number.toFixed(2);
        alert("This will be " + number + " EUR");
    } else if (rate == "EUR") {
        number = number *1.12;
        number = number.toFixed(2);
        alert("This will be " + number + " USD");
    } else {
        alert("Maybe you've typed something wrong")
    }
}
createCurrencyConverter(prompt("This is currency converter, please, write below the amount of money and currency abbreviation (for now only EUR and USD work)"))