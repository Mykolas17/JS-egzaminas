/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

//sukurti modeliui atskira elementa

//24 paskaita

const state = {};

const ENDPOINT = 'cars.json';

function renderCarCards(cars) {
	const carContainer = document.getElementById('output');
	carContainer.innerHTML = '';

	cars.forEach((car) => {
		const carBrand = document.createElement('h1');
		carBrand.innerText = car.brand;

		const carModels = document.createElement('p');
		carModels.innerText = car.models;

		const carCard = document.createElement('div');
		carCard.setAttribute('class', 'container');
		carCard.append(carBrand, carModels);
		carContainer.append(carCard);
	});
}

fetchCars();

function fetchCars() {
	fetch(ENDPOINT)
		.then((res) => {
			if (res.ok) {
				return res.json();
			} else {
				throw new Error(res.statusText);
			}
		})
		.then((data) => {
			state['cars'] = data;
			renderCarCards(data);
		});
}
