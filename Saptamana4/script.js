"use strict";

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
