
/* =====================================
   1. Get HTML Elements
===================================== */

const amountInput = document.getElementById("amount");

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");

const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");

const convertedResult = document.getElementById("convertedResult");
const exchangeRate = document.getElementById("exchangeRate");

const themePicker = document.getElementById("themePicker");
const languagePicker = document.getElementById("languagePicker");

const converterCard = document.querySelector(".converter");
const starsContainer = document.querySelector(".stars");


/* =====================================
   2. Theme Management
===================================== */

// Load previously saved theme
const savedTheme = localStorage.getItem("currencyTheme") || "dark";

// Apply saved theme
document.body.setAttribute("data-theme", savedTheme);
themePicker.value = savedTheme;


// Change theme
themePicker.addEventListener("change", () => {

    const selectedTheme = themePicker.value;

    document.body.setAttribute("data-theme", selectedTheme);

    localStorage.setItem("currencyTheme", selectedTheme);

});


/* =====================================
   3. Language Management
===================================== */

// Available translations
const translations = {

    English: {
        title: "Currency Converter",
        amount: "Amount",
        from: "From",
        to: "To",
        swap: "⇄ Swap",
        convert: "Convert",
        placeholder: "Enter amount",
        result: "Result will appear here",
        invalid: "Please enter a valid amount.",
        converting: "Converting...",
        swapped: "Currencies swapped.",
        error: "Something went wrong. Please try again.",
        footer: "Simple • Smart • Global Currency Conversion"
    },

    Hindi: {
        title: "मुद्रा परिवर्तक",
        amount: "राशि",
        from: "किस मुद्रा से",
        to: "किस मुद्रा में",
        swap: "⇄ बदलें",
        convert: "परिवर्तित करें",
        placeholder: "राशि दर्ज करें",
        result: "परिणाम यहाँ दिखाई देगा",
        invalid: "कृपया सही राशि दर्ज करें।",
        converting: "परिवर्तित हो रहा है...",
        swapped: "मुद्राएँ बदल दी गई हैं।",
        error: "कुछ गलत हुआ। कृपया दोबारा प्रयास करें।",
        footer: "सरल • स्मार्ट • वैश्विक मुद्रा परिवर्तन"
    }

};


// Apply language
function applyLanguage(language) {

    const text = translations[language] || translations.English;

    document.documentElement.lang =
        language === "Hindi" ? "hi" : "en";

    document.getElementById("pageTitle").textContent = text.title;

    document.getElementById("amountLabel").textContent = text.amount;

    document.getElementById("fromLabel").textContent = text.from;

    document.getElementById("toLabel").textContent = text.to;

    swapBtn.textContent = text.swap;

    convertBtn.textContent = text.convert;

    amountInput.placeholder = text.placeholder;

    document.querySelector(".footer-text").textContent = text.footer;


    // Update default result only
    if (convertedResult.dataset.status === "default") {

        convertedResult.textContent = text.result;

    }

}


// Load saved language
const savedLanguage =
    localStorage.getItem("currencyLanguage") || "English";

languagePicker.value = savedLanguage;

applyLanguage(savedLanguage);


// Validate language selection
languagePicker.addEventListener("change", () => {

    const selectedLanguage = languagePicker.value.trim();

    const availableLanguages = Array.from(
        document.querySelectorAll("#languageList option")
    ).map(option => option.value);


    if (!availableLanguages.includes(selectedLanguage)) {

        alert("Please select a language from the suggestions.");

        languagePicker.value =
            localStorage.getItem("currencyLanguage") || "English";

        return;
    }


    localStorage.setItem("currencyLanguage", selectedLanguage);

    applyLanguage(selectedLanguage);

});


/* =====================================
   4. Twinkling Stars
===================================== */

const totalStars = 100;

for (let i = 0; i < totalStars; i++) {

    const star = document.createElement("span");

    star.classList.add("star");


    // Random position
    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";


    // Random animation duration
    star.style.setProperty(
        "--duration",
        (2 + Math.random() * 4) + "s"
    );


    // Random animation delay
    star.style.setProperty(
        "--delay",
        (Math.random() * 5) + "s"
    );


    // Random size
    const size = 1 + Math.random() * 2;

    star.style.width = size + "px";

    star.style.height = size + "px";


    starsContainer.appendChild(star);

}


/* =====================================
   5. Golden Border Interaction
===================================== */

// Detect cursor near the card border
converterCard.addEventListener("pointermove", (event) => {

    const rect = converterCard.getBoundingClientRect();


    // Cursor position inside card
    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;


    // Distance from each edge
    const distanceLeft = x;

    const distanceRight = rect.width - x;

    const distanceTop = y;

    const distanceBottom = rect.height - y;


    // Find nearest edge
    const nearestEdge = Math.min(
        distanceLeft,
        distanceRight,
        distanceTop,
        distanceBottom
    );


    // Reverse animation near border
    if (nearestEdge < 35) {

        converterCard.classList.add("reverse");

    } else {

        converterCard.classList.remove("reverse");

    }

});


// Restore normal direction when cursor leaves
converterCard.addEventListener("pointerleave", () => {

    converterCard.classList.remove("reverse");

});


/* =====================================
   6. Currency Swap
===================================== */

swapBtn.addEventListener("click", () => {

    const temp = fromCurrency.value;

    fromCurrency.value = toCurrency.value;

    toCurrency.value = temp;


    const language =
        localStorage.getItem("currencyLanguage") || "English";

    const text = translations[language] || translations.English;


    convertedResult.textContent = text.swapped;

    convertedResult.dataset.status = "message";

    exchangeRate.textContent = "";

});


/* =====================================
   7. Currency Conversion
===================================== */

// Convert button
convertBtn.addEventListener("click", convertCurrency);


// Press Enter to convert
amountInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        convertCurrency();

    }

});


/* =====================================
   8. Convert Currency Function
===================================== */

async function convertCurrency() {

    const amount = parseFloat(amountInput.value);

    const from = fromCurrency.value;

    const to = toCurrency.value;


    const language =
        localStorage.getItem("currencyLanguage") || "English";

    const text = translations[language] || translations.English;


    // Validate amount
    if (!Number.isFinite(amount) || amount <= 0) {

        convertedResult.textContent = text.invalid;

        convertedResult.dataset.status = "message";

        exchangeRate.textContent = "";

        return;

    }


    // Same currency
    if (from === to) {

        convertedResult.textContent =
            `${amount} ${from} = ${amount.toFixed(2)} ${to}`;

        convertedResult.dataset.status = "converted";

        exchangeRate.textContent =
            `1 ${from} = 1 ${to}`;

        return;

    }


    try {

        convertedResult.textContent = text.converting;

        convertedResult.dataset.status = "message";

        exchangeRate.textContent = "";

        convertBtn.disabled = true;


        // Call Spring Boot backend API
        const response = await fetch(
            `/api/currency/convert?amount=${encodeURIComponent(amount)}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`
        );


        if (!response.ok) {

            throw new Error("Backend request failed");

        }


        const data = await response.json();


        // Display converted amount
        convertedResult.textContent =
            `${data.amount} ${data.from} = ${Number(data.convertedAmount).toFixed(2)} ${data.to}`;


        convertedResult.dataset.status = "converted";


        // Display exchange rate
        exchangeRate.textContent =
            `1 ${data.from} = ${Number(data.rate).toFixed(2)} ${data.to}`;


    } catch (error) {

        console.error("Currency Conversion Error:", error);

        convertedResult.textContent = text.error;

        convertedResult.dataset.status = "message";

        exchangeRate.textContent = "";

    } finally {

        convertBtn.disabled = false;

    }

}
