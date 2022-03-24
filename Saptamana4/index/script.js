"use strict";
function clickMe() {
	const input = document.querySelector("#numar");
	let numar = Number(input.value);
	let parImpar = par(numar);
	let div = document.querySelector("#result");
	div.innerHTML = parImpar;
}
function par(nr) {
	let rezultat = ``;
	if (nr % 2 === 0) {
		rezultat = "par";
	} else rezultat = "impar";
	return rezultat;
}
function max(a, b) {
	if (a > b) {
		return a;
	} else return b;
}

function clickMe2() {
	const input1 = document.querySelector("#numar1");
	const input2 = document.querySelector("#numar2");
	let numar1 = Number(input1.value);
	let numar2 = Number(input2.value);
	if (numar1 < 20 || numar1 > 100) {
		input1.classList.add("error");
	} else input1.classList.remove("error");
	if (numar2 < 1 || numar2 > 2) {
		input2.classList.add("error");
	} else input2.classList.remove("error");
	let div2 = document.querySelector("#result2");
	div2.innerHTML = calcMassIndex(numar1, numar2);
}
function calcMassIndex(mass, height) {
	const massIndex = mass / height ** 2;
	if (massIndex <= 20) {
		return `La greutatea de ${mass}kg si inaltimea de ${height} m
        esti subponderal`;
	} else if ((massIndex <= 25) & (massIndex > 20)) {
		return `La greutatea de ${mass}kg si inaltimea de ${height} m
        esti normal`;
	} else if (massIndex <= 30 && massIndex > 25) {
		return `La greutatea de ${mass}kg si inaltimea de ${height} m
        esti supraponderal`;
	} else if (massIndex <= 40 && massIndex > 30) {
		return `La greutatea de ${mass}kg si inaltimea de ${height} m
        esti obez`;
	} else {
		return `La greutatea de ${mass}kg si inaltimea de ${height} m
        esti bolnav`;
	}
}
//////////////////////////////
function showTab() {
	let activePage = document.querySelector("#pages > .page.active");
	if (activePage !== null) {
		activePage.classList.remove("active");
	}
	let pages = document.querySelectorAll("#pages > .page");
	let btns = document.querySelectorAll("nav > button");
	pages.forEach((el) => {
		el.classList.remove("active");
	});
	btns.forEach((el) => {
		el.classList.remove("active");
	});
}
/*
let directie = true;
function verifica7(a) {
	while (a !== 0) {
		if (a % 10 === 7) {
			return true;
		}
		a = (a - (a % 10)) / 10;
	}
	return false;
}
function bolt(nr) {
	for (let i = 1; i <= nr; i++) {
		if (verifica7(i) || i % 7 === 0) {
			directie = !directie;
			console.log(i + " BOLT");
		} else if (directie) {
			console.log(i + " -->");
		} else console.log(i + " <--");
	}
}
// bolt(50);

const str = "Ana are mere!";
function invers(str) {
	let strInvers = "";
	for (let i = str.length - 1; i >= 0; i--) {
		//str[i] === str[str -1 -i]
		strInvers += str[i];
	}
	return strInvers;
}
// console.log(invers(str));

function impar(nr) {
	for (let i = 1; i <= nr; i = i + 2) {
		console.log(i);
	}
}
// impar(20);
const arr = [1, 2, 3, 4, 5];
function suma(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
console.log(suma(arr));
function max(arr) {
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	return max;
}
console.log(max(arr));

const arr2 = [1, 2, 4, 3, 5, 4, 3, 4, 5, 6, 4];
function timesAppears(arr, a) {
	let counter = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === a) {
			counter++;
		}
	}
	return counter;
}
console.log(timesAppears(arr2, 4));

for (let i = 0; i < 4; i++) {
	let row = "";
	for (let y = 0; y < 4; y++) {
		if ((i + y) % 2 === 0) {
			row += "0 ";
		} else row += "1 ";
	}
	console.log(row);
}
*/
