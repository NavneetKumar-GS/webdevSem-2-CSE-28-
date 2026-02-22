// 1. New Working BASE URL
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// 2. Loop to populate dropdowns
for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        // select selected logic
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        
        // Append only ONCE (fixed bug here)
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// 3. Update Flag Function
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    // Handling cases where countryCode might be undefined
    if(!countryCode) return; 
    
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// 4. Calculate Exchange Rate
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    // New URL structure: We fetch the file for the FROM currency (e.g. usd.json)
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    
    try {
        let response = await fetch(URL);
        let data = await response.json();
        
        // New Data structure is: { date: "...", usd: { inr: 83, eur: 0.9 } }
        // We access it dynamically: data[from][to]
        let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

        let finalAmount = amtVal * rate;
        
        // Formatting to 2 decimal places for cleaner look
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
    } catch (error) {
        msg.innerText = "Error: Check your internet connection";
        console.error(error);
    }
});