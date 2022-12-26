// Currency calculator

const key = 'bd55f74ec3f61dfc41607e11';
const BASE_URL = "https://open.er-api.com";
const currencyOptions = document.querySelector(".options");
const currencyOptions2 = document.querySelector(".options2");
const input = document.querySelector(".input");
const output = document.querySelector(".output");
const button = document.querySelector(".button");

const getOptions = async (fromCurrency) => {
    try {
        const response = await fetch(`${BASE_URL}/v6/latest/${fromCurrency}`);
        if (response.status !== 200) {
            return "error!";
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

const updateOptions = async () => {
    const currenciesAndRate = await getOptions("USD");
    const currencies = Object.keys(currenciesAndRate.rates);
    currencies.forEach((currency) => {
        currencyOptions.innerHTML += `<option value=${currency}>${currency}</option>)`;
        currencyOptions2.innerHTML += `<option value=${currency}>${currency}</option>)`;
    })

    const variants = currencyOptions.querySelectorAll("option");
    variants.forEach((option) => {
        if (option.value === "EUR") option.selected = true;
    });
    const variants2 = currencyOptions2.querySelectorAll("option");
    variants2.forEach((option) => {
        if (option.value === "DKK") option.selected = true;
    })
}

updateOptions();

const convert = async (fromCurrency, toCurrency, amount) => {
    try {
        const data = await getOptions(fromCurrency);
        const rate = data.rates[toCurrency];
        output.innerHTML = `${rate * amount}`;
    } catch (err) {
        console.error(err);
        return "error!";
    }
}

button.addEventListener("click", () => {
    let fromCurrency = currencyOptions.value;
    let toCurrency = currencyOptions2.value;
    let amount = input.value;

    if (fromCurrency !== toCurrency) {
        convert(fromCurrency, toCurrency, amount);
    } else {
        alert("The same currency!");
    }
})