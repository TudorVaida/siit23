"use strict";
let list = [];
let search = "";
let url = "https://meniu-c6eb3-default-rtdb.europe-west1.firebasedatabase.app/";

async function getData() {
	document.querySelector("#loading").classList.remove("hidden");
	const r = await fetch(url + ".json");
	list = await r.json();
	document.querySelector("#loading").classList.add("hidden");

	console.log(list);
	draw();
}

function draw() {
	const containerProduse = document.querySelector(".container-produse");
	let html = "";
	for (let [key, value] of Object.entries(list)) {
		if (!value.ingrediente.toLowerCase().includes(search)) {
			continue;
		}
		html += `
	    <div class="produs">
	                <img src="${value.imagine}" alt="" />
	                <div class="text">
	                    <h4>${value.nume}</h4>
	                    <p>
	                       ${value.ingrediente}
	                    </p>
	                </div>
	               <a href="preparat.html?id=${key}"> <button class="btnDetalii">Detalii</button></a>
	            </div>
	    `;
	}
	containerProduse.innerHTML = html;
}
function filter() {
	const input = document.querySelector(".input-cautare").value;
	let searchVal = input;
	search = searchVal.toLowerCase();
	draw();
}
