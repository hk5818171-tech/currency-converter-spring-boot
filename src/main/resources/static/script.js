const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");

const convertedResult = document.getElementById("convertedResult");
const exchangeRate = document.getElementById("exchangeRate");


// Convert button
convertBtn.addEventListener("click", convertCurrency);


// Swap button
swapBtn.addEventListener("click", () => {

    const temp = fromCurrency.value;

    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;

    convertedResult.textContent = "Currencies swapped.";
    exchangeRate.textContent = "";
});


// Currency conversion
async function convertCurrency() {

    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;


    // Check amount
    if (isNaN(amount) || amount <= 0) {
        convertedResult.textContent = "Please enter a valid amount.";
        exchangeRate.textContent = "";
        return;
    }


    // Same currency
    if (from === to) {

        convertedResult.textContent =
            `${amount} ${from} = ${amount.toFixed(2)} ${to}`;

        exchangeRate.textContent =
            `1 ${from} = 1 ${to}`;

        return;
    }


    try {

        convertedResult.textContent = "Converting...";
        exchangeRate.textContent = "";


        const response = await fetch(
            `/api/currency/convert?amount=${amount}&from=${from}&to=${to}`
        );


        if (!response.ok) {
            throw new Error("Backend request failed");
        }


        const data = await response.json();


        convertedResult.textContent =
            `${data.amount} ${data.from} = ${data.convertedAmount.toFixed(2)} ${data.to}`;


        exchangeRate.textContent =
            `1 ${data.from} = ${data.rate.toFixed(2)} ${data.to}`;


    } catch (error) {

        console.error("Conversion Error:", error);

        convertedResult.textContent =
            "Something went wrong. Please try again.";

        exchangeRate.textContent = "";
    }
}