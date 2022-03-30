"use strict";

const state = {
	player: true, // x e false; 0  e true
	game: [null, null, null, null, null, null, null, null, null],
	finished: false,
	displayPlayer: {
		true: "x",
		false: "o",
	},
};
function play(pos) {
	if (state.finished) {
		newGame();
		return;
	}
	if (state.game[pos] !== null) {
		return;
	}
	const boxes = document.querySelectorAll("#game> .box");
	let box = boxes[pos];
	state.game[pos] = state.player;
	if (state.player) {
		box.innerHTML = `<img src="images/x.png" />`;
	} else {
		box.innerHTML = `<img src="images/o.png" />`;
	}

	if (
		//1.2.3
		state.game[0] === state.game[1] &&
		state.game[2] === state.game[1] &&
		state.game[2] !== null
	) {
		console.log(`Player ${state.displayPlayer[state.player]} has won`);
		state.finished = true;
	}
	if (
		//4.5.6
		state.game[3] === state.game[4] &&
		state.game[5] === state.game[4] &&
		state.game[4] !== null
	) {
		console.log(`Player ${state.displayPlayer[state.player]} has won`);
		state.finished = true;
	}
	if (
		//7.8.9
		state.game[6] === state.game[7] &&
		state.game[8] === state.game[7] &&
		state.game[8] !== null
	) {
		console.log(`Player ${state.displayPlayer[state.player]} has won`);
		state.finished = true;
	}
	if (
		//9.6.3
		state.game[8] === state.game[5] &&
		state.game[2] === state.game[5] &&
		state.game[2] !== null
	) {
		console.log(`Player ${state.displayPlayer[state.player]} has won`);
		state.finished = true;
	}
	if (
		//8.5.2
		state.game[7] === state.game[4] &&
		state.game[1] === state.game[4] &&
		state.game[1] !== null
	) {
		console.log(`Player ${state.displayPlayer[state.player]} has won`);
		state.finished = true;
	}
	if (
		//7/4/1
		state.game[6] === state.game[3] &&
		state.game[0] === state.game[3] &&
		state.game[0] !== null
	) {
		console.log(`Player ${state.displayPlayer[state.player]} has won`);
		state.finished = true;
	}
	if (
		//9/5/1
		state.game[8] === state.game[4] &&
		state.game[0] === state.game[4] &&
		state.game[0] !== null
	) {
		console.log(`Player ${state.displayPlayer[state.player]} has won`);
		state.finished = true;
	}
	if (
		//7.5.3
		state.game[6] === state.game[4] &&
		state.game[2] === state.game[4] &&
		state.game[2] !== null
	) {
		console.log(`Player ${state.displayPlayer[state.player]} has won`);
		state.finished = true;
	}
	state.player = !state.player;
}
function newGame() {
	let boxes = document.querySelectorAll("#game>.box>img");
	for (let img of boxes) {
		img.remove();
	}
	state.player = true;
	state.game = [null, null, null, null, null, null, null, null, null];
	state.finished = false;
	document.querySelector("#gameMassage").innerHTML = "Joace un X si 0";
}
