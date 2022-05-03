"use strict";
class Premiu {
	constructor(nume, an) {
		this.nume = nume;
		this.an = an;
	}
}
class Actor {
	constructor(nume, varsta, premii) {
		this.nume = nume;
		this.varsta = varsta;
		this.premii = premii;
	}
}
class Film {
	constructor(an_aparitie, nume, actori) {
		this.an_aparitie = an_aparitie;
		this.nume = nume;
		this.actori = actori;
	}
}
class Studio {
	constructor(nume, filme) {
		this.nume = nume;
		this.filme = filme;
	}
}
var oscar1990 = new Premiu("oscar", 1990);
var oscar2000 = new Premiu("oscar", 2000);
var oscar2010 = new Premiu("oscar", 2010);
var oscar2018 = new Premiu("oscar", 2018);

var actorOscar1990 = new Actor("actor cu 2 oscaruri", 35, [
	oscar1990,
	oscar2000,
]);
var actorOscar2010 = new Actor("actor cu oscar din 2000", 55, [oscar2010]);
var actorOscar2018 = new Actor("actor cu oscar din 2018", 23, [oscar2018]);
var actorFaraPremii01 = new Actor("actor fara oscar 01", 33, []);
var actorFaraPremii02 = new Actor("actor fara oscar 02", 60, []);
var actorFaraPremii03 = new Actor("actor fara oscar 02", 20, []);

var film1 = new Film(1990, "film cu actori de oscar", [
	actorOscar1990,
	actorFaraPremii01,
]);
var film2 = new Film(2010, "film cu actori fara premii2", [
	actorFaraPremii01,
	actorFaraPremii02,
	actorFaraPremii03,
]);
var film3 = new Film(2010, "film cu actori fara premii3", [
	actorFaraPremii01,
	actorFaraPremii02,
	actorFaraPremii03,
]);
var film4 = new Film(2018, "film cu actori de oscar", [
	actorOscar2010,
	actorOscar2018,
	actorFaraPremii02,
]);
var film5 = new Film(2018, "film cu actori fara premii5", [
	actorFaraPremii02,
	actorFaraPremii03,
]);

var studio1 = new Studio("MGM", [film1, film2]);
var studio2 = new Studio("Disney", [film3, film4, film5]);

var studioDatabase = [studio1, studio2];
const actorDatabase = [
	actorOscar1990,
	actorOscar2010,
	actorOscar2018,
	actorFaraPremii01,
	actorFaraPremii02,
	actorFaraPremii03,
];
const filmDatabase = [film1, film2, film3, film4, film5];
console.log("---------------------1---------------------");
function cautareStudio(database) {
	for (let elem of database) {
		if (elem.filme.length >= 2) {
			console.log(elem.nume);
		}
	}
}

cautareStudio(studioDatabase);
console.log("-------------------2-----------------------");
function cautareActor2Oscar() {
	let film;
	for (let elem of filmDatabase) {
		for (let item of elem.actori) {
			if (item.nume === "actor cu 2 oscaruri") {
				film = elem;
			}
		}
	}

	for (let elem of studioDatabase) {
		for (let item of elem.filme) {
			if (item === film) {
				console.log(elem.nume);
			}
		}
	}
}

cautareActor2Oscar();
console.log("--------------------3----------------------");
function actor50() {
	for (let elem of actorDatabase) {
		if (elem.varsta >= 50) {
			for (let film of filmDatabase) {
				for (let actor of film.actori) {
					if (elem.nume === actor.nume) {
						console.log(film.nume);
						break;
					}
				}
			}
		}
	}
}

actor50();
function filmeCuPremii() {
	let arr = [];
	for (let film of filmDatabase) {
		if (film.nume === "film cu actori de oscar") {
			for (let actor of film.actori) {
				if (actor.premii.length !== 0) {
					arr.push(actor.nume);
				}
			}
			console.log(arr);
			arr = [];
		}
	}
}
console.log("--------------------4----------------------");

filmeCuPremii();
