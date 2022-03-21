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
bolt(50);
