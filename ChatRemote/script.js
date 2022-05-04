"use strict";
let accounts = [
	// {
	// 	name: "Tudor",
	// 	message: "fewrebveiru bewb feiw bwe ibf ieuwb",
	// },
	// {
	// 	name: "Johnny L",
	// 	message: "bferwbciew hjew bwuvcuw shhh nsnmn dfghw",
	// },
];
let url =
	"https://chat-room-c35b3-default-rtdb.europe-west1.firebasedatabase.app/";
let currentAccount;
function submit() {
	const input = document.querySelector("#name").value;
	currentAccount = input;
	document.querySelector(".formular").classList.add("hidden");
	document.querySelector(".container").classList.remove("hidden");
}
async function addMessage() {
	const input = document.querySelector(".nav-bottom input").value;
	let response = await fetch(url + ".json", {
		method: "POST",
		body: JSON.stringify({
			name: currentAccount,
			message: input,
		}),
	});
}
function draw() {
	const container = document.querySelector(".chat-content");
	let html = "";
	for (let [key, value] of Object.entries(accounts)) {
		if (value.name === currentAccount) {
			html += `
            <div class="message-self">
            <div class="nume">${value.name}:</div>
            <div class="sent-message">
                ${value.message}
            </div>
        </div>
            `;
		} else {
			html += ` <div class="message">
					<div class="nume">${value.name}:</div>
					<div class="user-message">
                    ${value.message}
					</div>
				</div>`;
		}
	}
	container.innerHTML = html;
}
async function getDb() {
	let response = await fetch(url + ".json");
	let db = await response.json();
	accounts = db;
	draw();
}
setInterval(getDb, 1000);
