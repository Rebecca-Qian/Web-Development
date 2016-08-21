// Find PI to the Nth Digit
// Enter a number and have the program generate PI up to that many decimal places
// Keep a limit to how far the program will go.

var getNthPi = function(n){
	var Pi = Math.PI;

	// set limit of 20 decimal places
	if (n > 20) {
		console.log("Request is greater than 20 decimal places");
		return getNthPi(20);
	} else if (n === undefined) {
		console.log("No input set");
		return getNthPi(2);
	}

	return Pi.toFixed(n);
}

var displayPi = function() {
	var input = document.getElementById("nthDigit").value;
	//console.log(input);
	var Pi = getNthPi(input);
	//console.log(Pi);
	document.getElementById("showPi").innerHTML = Pi;
}

var Calculate = document.getElementById("calculatePi");
Calculate.addEventListener("click", displayPi);

// Fibonacci Sequence
// Enter a number and have the program generate the Fibonacci sequence
// to that number or to the Nth number.

var fibString = function (n) {

	if (n < 1) {
		console.log("cannot take negative inputs");
		return;
	}

	var count = 2;

	var str = 1;

	while (count <= n) {
		str += " " + fib(count);
		count++;
	}

	return str;
}
// computes the nth fibonacci sequence
var fib = function (n) {
	if (n == 1 || n == 2) {
		return 1;
	}
	
	return fib(n - 1) + fib(n - 2);
}

var displayFib = function () {
	var input = document.getElementById("fibIndex").value;
	var str = fibString(input);
	document.getElementById("showFib").innerHTML = str;
}

document.getElementById("calculateFib").addEventListener("click", displayFib);

// Prime Factorization
// Have the user enter a number and find all Prime Factors
// (if there are any) and display them.

var Prime = {};
Prime.isPrime = function (n) {
	// Check for evens
	if ((n % 2 === 0 && n !== 2)||(n === 1)) {
		return false;
	}
	// Check for odd factors
	for (var i = 3; i < n; i += 2) {
		if (n % i === 0 && n != i) {
			return false;
		}
	}
	return true;
}

Prime.factors = [];

Prime.primeFactor = function (r) {
	if (this.isPrime(r)) {
		this.factors.push(r);
		return this.factors;
	}

	if (r % 2 === 0) {
		this.factors.push(2);
		while (r % 2 === 0) {
			r /= 2;
		}
		if (r === 1) {
			return this.factors;
		}

		if (this.isPrime(r)) {
		this.factors.push(r);
		return this.factors;
	}
}

	for (var i = 3; i <= Math.sqrt(r); i += 2) {
		if (this.isPrime(i)) {
			if (r % i === 0) {
				this.factors.push(i);

				while (r % i === 0) {
					r /= i;
				}

				if (this.isPrime(r)) {
					this.factors.push(r);
					return this.factors;
				}
			}
		}
	}

	return this.factors;
}

Prime.displayPrime = function () {
	var num = document.getElementById("primeFactors").value;
	  var primeSeq = Prime.primeFactor(num);
	document.getElementById("showPrime").innerHTML = primeSeq;
	Prime.factors = [];
}

Prime.node = document.getElementById("calculatePrime").addEventListener("click", Prime.displayPrime);
	
// Next Prime Number - Have the program find prime numbers
// until the user chooses to stop asking for the next one.

// Global variable to store last prime number
/*var nextPrime = function (index) {
	for (var count = 1; count < index; count++) {
		for (var i = 1; i; i++) {
			if (isPrime(n)) {
				str += n;
			}
		}
	}
}*/

// Find Cost of Tile to Cover W x H Floor - 
// Calculate the total cost of tile it would take to cover
// a floor plan of width and height, using a cost entered by the user. 
var tileCost = {};
tileCost.totalCost = function (width, height, cost) {
	return width * height * cost;
}

// Factorial Finder - 
// The factorial of a positive integer n is defined as the product of the sequence , 
// n-1, n-2, ...1 and the factorial of 0 is defined as being 1.
// Solve this using both loops and recursion.

var factorial = {
	factorialFinder: function (n) {
	var fact = 1;
	while (n > 1) {
		fact *= n;
		n--;
	}
	return fact;
}
};

factorial.displayFact = function () {
	var inputNum = document.getElementById("findFact").value;
	var result = factorial.factorialFinder(inputNum);
	document.getElementById("showFact").innerHTML = result;
}

document.getElementById("calculateFact").addEventListener("click", factorial.displayFact);

// Using recursion
// var findFactorial = function (n) {
// 	// Check that n > 0
// 	// try {
// 	// 	if (n == "") throw "empty";
// 	// 	if (n < 0) throw "negative";
// 	// 	if (isNaN(n)) throw "not a number";
// 	// }
// 	// catch(err) {
// 	// 	message.innerHTML = "Input is" + err;
// 	// }

// 	// base case
// 	if (n === 1) {
// 		return 1;
// 	 }

// 	return n * this.findFactorial(n - 1);
// }

// Coin Flip Simulation - 
// Write some code that simulates flipping a single coin
// however many times the user decides.
// The code should record the outcomes and count the number of tails and heads.
var coinFlip = {};
coinFlip.singleFlip = function() {
	//returns 0 or 1
	return Math.floor(Math.random() * 2);
}
coinFlip.tally = {
	Heads: 0,
	Tails: 0
}
coinFlip.recordFlips = function(n) {
 	while (n > 0) {
 		if (this.singleFlip() === 0) this.tally.Heads++;
 		if (this.singleFlip()=== 1) this.tally.Tails++;
 		n--;
 	}
 	return this.tally;
 }

coinFlip.getFlip = function () {
	var flips = document.getElementById("numFlips").value;
	var result = coinFlip.recordFlips(flips);
	document.getElementById("showFlip").innerHTML = "Heads: " + result.Heads + " Tails: " + result.Tails;
}

document.getElementById("flipCoin").addEventListener("click", coinFlip.getFlip);

// Classical Algorithms
// Collatz
var collatz = function (n) {
	var steps = 0;

	while (n > 1) {
		if (n % 2 === 0) {
			n /= 2;
			steps++;
		} else {
			n *= 3;
			n += 1;
			steps++;
		}
	}

	return steps;
}

// Sieve of Eratosthenes
var sieve = function (n) {
	var factors = [];
	var primes = [];

	for (var i = 1; i < n; i++) {
		factors.push(i);
	}

	for (i = 2; i <= Math.sqrt(n); i++) {
		if (factors[i]) {
			for (var j = i * i; j < n; j += i) {
				factors[j] = null;
			}
		}
	}

	for (i = 2; i < n; i++) {
		if (factors[i]) {
			primes.push(i);
		}
	}

	return primes;
}

// Mortgage Calculator

// Change return program

// Binary/Decimal Converter

// Simple Calculator

// Text

// Pig Latin

// Count Words
function countWords (str) {
	return str.split(' ').length;
}

// Text Editor


// Product Inventory
function () {
	"use strict";

	// Function constructor constructs new Product object
	function Product(i, n, p, q) = {
		this.id = i;
		this.name = n;
		this.price = p;
		this.quantity = q;
	}



}

// Fetch Current Weather

