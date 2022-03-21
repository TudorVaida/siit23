"use strict";

function transformTemp(temp, val) {
	if (val === 0) {
		return temp * 1.8 + 32;
	} else {
		return (temp - 32) / 1.8;
	}
}
// console.log(transformTemp(0, 0));
// console.log(transformTemp(20, 0));
// console.log(transformTemp(100, 0));
// console.log(transformTemp(0, 1));
// console.log(transformTemp(20, 1));
// console.log(transformTemp(100, 1));

function max(a, b, c) {
	if (a >= b && a >= c) {
		return a;
	} else if (b >= a && b >= c) {
		return b;
	} else return c;
}
// console.log(max(9, 9, 7));
// console.log(max(6, 4, 7));

function calcMassIndex(mass, height) {
	const massIndex = mass / height ** 2;
	if (massIndex <= 20) {
		console.log(`La greutatea de ${mass} si inaltimea de ${height}
        esti subponderal`);
		console.log(massIndex);
	} else if ((massIndex <= 25) & (massIndex > 20)) {
		console.log(`La greutatea de ${mass} si inaltimea de ${height}
        esti normal`);
		console.log(massIndex);
	} else if (massIndex <= 30 && massIndex > 25) {
		console.log(`La greutatea de ${mass} si inaltimea de ${height}
        esti supraponderal`);
		console.log(massIndex);
	} else if (massIndex <= 40 && massIndex > 30) {
		console.log(`La greutatea de ${mass} si inaltimea de ${height}
        esti obez`);
		console.log(massIndex);
	} else {
		console.log(`La greutatea de ${mass} si inaltimea de ${height}
        esti bolnav`);
		console.log(massIndex);
	}
}
// calcMassIndex(50, 1.8);
// calcMassIndex(80, 1.8);
// calcMassIndex(90, 1.8);
// calcMassIndex(120, 1.8);
// calcMassIndex(190, 1.8);

function transformConsum(consum, val) {
	if (val === 0) {
		return ((3.78541178 / 1.609344) * 100) / consum;
	} else return ((0.621371192237334 / 0.2641720526372959) * 100) / consum;
}
console.log(transformConsum(24, 0));
console.log(transformConsum(32, 0));
console.log(transformConsum(10, 1));
console.log(transformConsum(6, 1));
console.log(transformConsum(1, 1));

function arieDrepptunghi(a, b) {
	return a * b;
}

function ariePatrat(a) {
	return arieDrepptunghi(a, a);
}
function calcMedie(a, b, c, d, teza) {
	return (((a + b + c + d) / 4) * 3 + teza) / 4;
}

console.log(calcMedie(8, 10, 10, 10, 6));

function calcSum(a, b) {
	if (a === b) {
		return (a + b) * 3;
	} else return a + b;
}
console.log(calcSum(2, 5));
console.log(calcSum(2, 2));
//un singur if
function verifica50(a, b) {
	if (a === 50 || b === 50) {
		return true;
	} else if (a + b === 50) {
		return true;
	} else return false;
}
console.log(verifica50(25, 42));
console.log(verifica50(25, 25));
function verificaPozitivNegativ(a, b) {
	if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
		return true;
	} else return false;
}
function verificaDivizor(a) {
	if (a % 3 === 0 || a % 7 === 0) {
		return true;
	} else return false;
}
//sir din milisecunde in ore
function covertH(a) {
	let ore = Math.floor(a / 1000 / 60 / 60);
	let minute = Math.floor(a / 1000 / 60);
	let secunde = Math.floor(a / 1000);
	return `${ore}ore, ${minute} minute si ${secunde} secunde `;
}
console.log(covertH(1000000000));
function verifica8(a, b) {
	if (a === 8 || b === 8 || a + b === 8 || a - b === 8 || b - a === 8) {
		return true;
	} else return false;
}
function verificaUltimele3(a, b, c) {
	if (a % 10 === b % 10 && a % 10 === c % 10) {
		return true;
	} else return false;
}
function verifica100(a, b) {
	let a1 = Math.abs(a - 100);
	let b1 = Math.abs(b - 100);
	if (a1 < b1) {
		return a;
	} else return b;
}
console.log(verifica100(171, 21));
console.log(verifica100(21, 89));

function verifca5099(a, b) {
	if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) {
		return a;
	} else return b;
}
