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

/*var Prime = function (n) {
	if (typeof n != number) {
		throw...
	}

	var str = "";

	if (isPrime(n)) {

	}

}


// Next Prime Number - Have the program find prime numbers
// until the user chooses to stop asking for the next one.

// Global variable to store last prime number
var nextPrime = function (index) {
	for (var count = 1; count < index; count++) {
		for (var i = 1; i; i++) {
			if (isPrime(n)) {
				str += n;
			}
		}
	}
}

// bpplean helper function checks if a number is prime
var isPrime = function (n) {
	for (var i = 3; i < n; i += 2) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}*/

// Find Cost of Tile to Cover W x H Floor - 
// Calculate the total cost of tile it would take to cover
// a floor plan of width and height, using a cost entered by the user. 

// Factorial Finder - 
// The factorial of a positive integer n is defined as the product of the sequence , 
// n-1, n-2, ...1 and the factorial of 0 is defined as being 1.
// Solve this using both loops and recursion.

// Coin Flip Simulation - 
// Write some code that simulates flipping a single coin
// however many times the user decides.
// The code should record the outcomes and count the number of tails and heads.