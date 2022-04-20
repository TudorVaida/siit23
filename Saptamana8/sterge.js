let list = [];
let id = window.location.search.substring(4);
async function sterge() {
	let url =
		"https://meniu-c6eb3-default-rtdb.europe-west1.firebasedatabase.app/" +
		id +
		".json";
	console.log(id);
	console.log(url);
	if (confirm) {
		let response = await fetch(url, {
			method: "DELETE",
		});
	}
	window.location = "admin.html";
}
async function draw() {
	const r = await fetch(
		"https://meniu-c6eb3-default-rtdb.europe-west1.firebasedatabase.app/.json"
	);
	list = await r.json();
	document.querySelector("h1").insertAdjacentHTML(
		"afterend",
		`
    <h3>Esti pe cale sa stegi preparatul: "${list[id].nume}"</h3>
    `
	);
}
