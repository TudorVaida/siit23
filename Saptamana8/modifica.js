let url = "https://meniu-c6eb3-default-rtdb.europe-west1.firebasedatabase.app/";
let id = window.location.search.substring(4);
let list;
async function adauga() {
	let inputNume = document.querySelector(".nume").value;
	let inputUrl = document.querySelector(".imagine").value;
	let inputIngrediente = document.querySelector(".ingrediente").value;

	let response = await fetch(url + id + ".json", {
		method: "PUT",
		body: JSON.stringify({
			imagine: inputUrl,
			ingrediente: inputIngrediente,
			nume: inputNume,
		}),
	});
	window.location = "admin.html";
}
async function getData() {
	let inputNume = document.querySelector(".nume");
	let inputUrl = document.querySelector(".imagine");
	let inputIngrediente = document.querySelector(".ingrediente");
	let response = await fetch(url + id + ".json");
	list = await response.json();

	inputNume.value = list.nume;
	inputUrl.value = list.imagine;
	inputIngrediente.value = list.ingrediente;
}
