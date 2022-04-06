let state = {
	list: [
		{
			title: "Google",
			url: "https://google.com",
			difficulty: "2",
			tags: ["JS", "HTML"],
		},
		{
			title: "Google2",
			url: "https://google.com",
			difficulty: "4",
			tags: ["JS", "HTML"],
		},
		{
			title: "Google3",
			url: "https://google.com",
			difficulty: "1",
			tags: ["JS", "HTML"],
		},
		{
			title: "Google4",
			url: "https://google.com",
			difficulty: "0",
			tags: ["JS", "HTML"],
		},
	],
	idxEdit: null,
	sortColumn: null,
	sortDirection: 1,
	difficulty: {
		"": "",
		0: "Entry level",
		1: "Easy",
		2: "Medium",
		3: "Hard",
		4: "Hacker",
	},
};
function draw() {
	let table = document.querySelector("#list tbody");
	let str = "";
	let i = 0;
	for (let elem of state.list) {
		str += `
        <tr>
            <td><a href='${elem.url}' target="_blank" >${elem.title}</a></td>
            <td>${state.difficulty[elem.difficulty]}</td>
            <td>${elem.tags.join(", ")}</td>
            <td>
            <button onclick='del(${i})' >Delete</button>
            <button onclick='edit(${i})' >Edit</button>
            </td>
    </tr>`;
		i++;
	}
	table.innerHTML = str;
}

function sortTable(th, column) {
	let sortDirectionSpans = document.querySelectorAll(".sortDirection");
	for (let span of sortDirectionSpans) {
		span.innerText = "";
	}

	if (state.sortColumn === column) {
		state.sortDirection = -state.sortDirection;
	} else {
		state.sortDirection = 1;
	}
	state.sortColumn = column;
	if (state.sortDirection === 1) {
		th.querySelector(".sortDirection").innerHTML = "⬇ ";
	} else {
		th.querySelector(".sortDirection").innerHTML = "⬆";
	}
	state.list.sort(function (a, b) {
		if (a[column] < b[column]) {
			return 1 * state.sortDirection;
		} else if (a[column] > b[column]) {
			return -1 * state.sortDirection;
		} else return 0;
	});
	draw();
}

function showForm() {
	const formular = document.querySelector("#formular");
	const tabel = document.querySelector("#list");
	tabel.classList.add("hidden");
	formular.classList.remove("hidden");
	state.idxEdit = null;
}
function showTab() {
	const formular = document.querySelector("#formular");
	const tabel = document.querySelector("#list");
	tabel.classList.remove("hidden");
	formular.classList.add("hidden");
}
function edit(idx) {
	showForm();
	let elem = state.list[idx];
	document.querySelector("[name='title']").value = elem.title;
	document.querySelector("[name='url']").value = elem.url;
	document.querySelector("[name='difficulty']").value = elem.difficulty;
	let tagInputs = document.querySelectorAll("[name='tags']");
	for (let i = tagInputs.length; i < elem.tags.length; i++) {
		addTag();
	}
	tagInputs = document.querySelectorAll("[name='tags']");

	for (let i = 0; i < elem.tags.length; i++) {
		tagInputs[i].value = elem.tags[i];
	}
	state.idxEdit = idx;
}
function del(idx) {
	if (confirm(`Esti sigur ca vrei sa stergi ${state.list[idx].title} ?`)) {
		state.list.splice(idx, 1);
		draw();
	}
}
function adauga(event) {
	event.preventDefault();
	let title = document.querySelector("[name='title']").value.trim();
	let url = document.querySelector("[name='url']").value.trim();
	let difficulty = document.querySelector("[name='difficulty']").value.trim();
	let tagInputs = document.querySelectorAll("[name='tags']");
	let tags = [];
	for (let input of tagInputs) {
		if (input.value.trim() !== "") {
			tags.push(input.value.trim());
		}
	}
	if (state.idxEdit === null) {
		state.list.push({
			title: title,
			url: url,
			difficulty: difficulty,
			tags: tags,
		});
	} else {
		state.list[state.idxEdit] = {
			title: title,
			url: url,
			difficulty: difficulty,
			tags: tags,
		};
		state.idxEdit = null;
	}
	document.querySelector("form").reset();
	draw();
	showTab();
}
function addTag(event) {
	if (event) {
		event.preventDefault();
	}
	let button = document.querySelector("#addTagBtn");
	button.parentElement.insertAdjacentHTML(
		"beforeend",
		`<br><input type ='text' placeholder='Tag' name="tags" />`
	);
}
