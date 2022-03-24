"use strict";
const container = document.querySelector(".container");
function add() {
	const html = `<input type="text" /></br>`;
	container.insertAdjacentHTML("afterbegin", html);
}
function sum() {
	let inputs = document.querySelectorAll("container > input");
	const inputsArr = [Number(...inputs)];
	const html = inputsArr.reduce((acc, elem) => acc + elem);
	container.insertAdjacentHTML("afterbegin", html);
}
