let state = {
	player: true, //x e true; 0 e false
	game: [null, null, null, null, null, null, null, null, null],
	finished: false,
};
const displayPlayer = {
	true: "X",
	false: "0",
};
const playerImage = {
	true: "x.png",
	false: "0.svg",
};
const dbUrl =
	"https://x-si-0-f5dee-default-rtdb.europe-west1.firebasedatabase.app/";

let iAmPlayer = null;
async function putDb(path, val) {
	let response = await fetch(dbUrl + "/" + path + ".json", {
		method: "PUT",
		body: JSON.stringify(val),
	});
	return await response.json();
}
function isLooseEquals(val1, val2) {
	if (val1 === val2) {
		return true;
	}
	if (
		(val1 === null || val1 === undefined) &&
		(val2 === null || val2 === undefined)
	) {
		return true;
	}
	return false;
}
async function getDb() {
	let response = await fetch(dbUrl + "/.json");
	let dbState = await response.json();

	if (state.player !== dbState.player || state.finished !== dbState.finished) {
		state.player = dbState.player;
		state.finished = dbState.finished;
		document.querySelector("#gameMessage").innerText = dbState.message;
		if (dbState.game !== undefined) {
			let boxes = document.querySelectorAll("#game>.box");

			for (let idx = 0; idx < 9; idx++) {
				if (!isLooseEquals(state.game[idx], dbState.game[idx])) {
					console.log("celalat player a facut mutarea" + idx);
					state.game[idx] = dbState.game[idx];
					let box = boxes[idx];

					box.innerHTML = `<img src="images/${
						playerImage[state.game[idx] + ""]
					}" />`;
				}
			}
		} else {
			let boxes = document.querySelectorAll("#game>.box");
			for (let box of boxes) {
				box.innerText = "";
			}

			state = dbState;
			state.game = [null, null, null, null, null, null, null, null, null];
		}
	}
}

async function play(pos) {
	if (state.finished) {
		await newGame();
		return;
	}
	if (state.player !== iAmPlayer) {
		return;
	}
	if (state.game[pos] !== null) {
		return;
	}

	let boxes = document.querySelectorAll("#game>.box");
	let box = boxes[pos];

	await putDb("game/" + pos, state.player);
	state.game[pos] = state.player;

	box.innerHTML = `<img src="images/${playerImage[state.player + ""]}" />`;

	if (
		state.game[0] === state.game[1] &&
		state.game[1] === state.game[2] &&
		state.game[1] !== null
	) {
		await showMessage(`Player ${displayPlayer[state.player]} has won`);
		await putDb("finished", true);
		state.finished = true;
		return;
	}
	if (
		state.game[3] === state.game[4] &&
		state.game[4] === state.game[5] &&
		state.game[4] !== null
	) {
		await showMessage(`Player ${displayPlayer[state.player]} has won`);
		await putDb("finished", true);
		state.finished = true;
		return;
	}
	if (
		state.game[6] === state.game[7] &&
		state.game[7] === state.game[8] &&
		state.game[7] !== null
	) {
		await showMessage(`Player ${displayPlayer[state.player]} has won`);
		await putDb("finished", true);
		state.finished = true;
		return;
	}
	if (
		state.game[0] === state.game[3] &&
		state.game[3] === state.game[6] &&
		state.game[3] !== null
	) {
		await showMessage(`Player ${displayPlayer[state.player]} has won`);
		await putDb("finished", true);
		state.finished = true;
		return;
	}
	if (
		state.game[1] === state.game[4] &&
		state.game[4] === state.game[7] &&
		state.game[4] !== null
	) {
		await showMessage(`Player ${displayPlayer[state.player]} has won`);
		await putDb("finished", true);
		state.finished = true;
		return;
	}
	if (
		state.game[2] === state.game[5] &&
		state.game[5] === state.game[8] &&
		state.game[5] !== null
	) {
		await showMessage(`Player ${displayPlayer[state.player]} has won`);
		await putDb("finished", true);
		state.finished = true;
		return;
	}
	if (
		state.game[0] === state.game[4] &&
		state.game[4] === state.game[8] &&
		state.game[4] !== null
	) {
		await showMessage(`Player ${displayPlayer[state.player]} has won`);
		await putDb("finished", true);
		state.finished = true;
		return;
	}
	if (
		state.game[2] === state.game[4] &&
		state.game[4] === state.game[6] &&
		state.game[4] !== null
	) {
		await showMessage(`Player ${displayPlayer[state.player]} has won`);
		await putDb("finished", true);
		state.finished = true;
		return;
	}

	await putDb("player", !state.player);
	state.player = !state.player;

	await showMessage(`It's players ${displayPlayer[state.player]}'s turn!`);
	let isDraw = true;
	for (let g of state.game) {
		if (g === null) {
			isDraw = false;
		}
	}
	await putDb("finished", isDraw);
	state.finished = isDraw;
	if (isDraw) {
		await showMessage(`It's a draw! Click for new game`);
	}
}
async function showMessage(msg) {
	document.querySelector("#gameMessage").innerText = msg;
	await putDb("message", msg);
}

async function newGame() {
	await showMessage("Joaca un X si 0");
	let boxes = document.querySelectorAll("#game>.box");
	for (let box of boxes) {
		box.innerText = "";
	}
	//alternativa 2
	// let images = document.querySelectorAll("#game>.box>img");
	// for (let img of images) {
	// 	img.remove();
	// }

	//
	await putDb("", {
		player: true,
		game: [null, null, null, null, null, null, null, null, null],
		finished: false,
		message: "Joaca un X si 0",
	});
	state.player = true;
	state.game = [null, null, null, null, null, null, null, null, null];
	state.finished = false;
}
async function chosePlayer(player) {
	document.querySelector("#chosePlayer").classList.add("hidden");
	document.querySelector("#gameContent").classList.remove("hidden");
	iAmPlayer = player;
	if (player) {
		await newGame();
	}
	setInterval(getDb, 1000);
}
