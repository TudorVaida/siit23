"use strict";
let state = {
	rates: {},
};
async function getCurrency() {
	let r = await fetch(
		"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json"
	);
	console.log(r);
	let response = await r.json();
	state.rates = response.rates;
	let options = "";
	for (let [currecy, rate] of Object.entries(state.rates)) {
		options += ` <option value ='${currecy}'>${currecy}</option>`;
	}
	let currencySelects = document.querySelectorAll("select");
	for (let select of currencySelects) {
		select.innerHTML = options;
	}
}
async function updateCurrency(idx) {
	let currencySelects = document.querySelectorAll("select");
	let valuesInputs = document.querySelectorAll("input");
	await getCurrency();
}
