/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
	constructor(title, director, budget) {
		this.title = title;
		this.director = director;
		this.budget = budget;
	}

	wasExpensive() {
		return this.budget > 100_000_000;
	}
}

let movies = [
	new Movie('Dragon Ball Z', 'Hujamoshi Bla bla', 500_000),
	new Movie('Titanic', 'Great Director', 1_000_000),
	new Movie('Spiderman 99', 'Mr Spider', 1_000_000_000),
];

movies.forEach((movie) => {
	console.log(
		`Title: "${movie.title}" Director: "${movie.director}" Budget: ${
			movie.budget
		}$ WasExpensive: ${movie.wasExpensive()}`
	);
});
