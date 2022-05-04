/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
	this.sum = function (number1, number2) {
		return number1 + number2;
	};

	this.subtraction = function (number1, number2) {
		return number1 - number2;
	};

	this.multiplication = function (number1, number2) {
		return number1 * number2;
	};

	this.division = function (number1, number2) {
		return number1 / number2;
	};
}

const num1 = 5;
const num2 = 2;

const calculator = new Calculator();

// const sum = num1 + num2;
// const subtraction = num1 - num2;
// const multiplication = num1 * num2;
// const division = num1 / num2;

const theSum = calculator.sum(num1, num2);
const theSubtraction = calculator.subtraction(num1, num2);
const theMultiplication = calculator.multiplication(num1, num2);
const theDivision = calculator.division(num1, num2);

// console.log('sum =' + sum);
// console.log('subtraction =' + subtraction);
// console.log('multiplication =' + multiplication);
// console.log('division =' + division);

console.log('sum = ' + theSum);
console.log('subtraction = ' + theSubtraction);
console.log('multiplication = ' + theMultiplication);
console.log('division = ' + theDivision);
