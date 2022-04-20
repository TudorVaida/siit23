async function adauga() {
	let inputNume = document.querySelector(".nume").value;
	let inputUrl = document.querySelector(".imagine").value;
	let inputIngrediente = document.querySelector(".ingrediente").value;
	let url =
		"https://meniu-c6eb3-default-rtdb.europe-west1.firebasedatabase.app/";
	let response = await fetch(url + ".json", {
		method: "POST",
		body: JSON.stringify({
			imagine: inputUrl,
			ingrediente: inputIngrediente,
			nume: inputNume,
		}),
	});
	window.location = "admin.html";
}
