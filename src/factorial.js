function factorial(n) {
	if (n === 1) {
    console.log(`return 1:`)
		return 1;
	} else {
    console.log(`return ${n} * factorial(${n}- 1)`)
		return n * factorial(n - 1);
	}
}

const memo = [];

function memoFactorial(n) {
	if (n === 1) {
        console.log(`return 1:`)
		return 1;
	} else if (memo[n]) {
        console.log(`memoFactorial(${n+1} -1 ) está memoizado en memo[${n}] ${memo[n]}`)
	}else if (!memo[n]) {
        console.log(`memo[${n}] = memoFactorial(${n} -1 );`)
		memo[n] = n * memoFactorial(n - 1);
	}
	return memo[n];
}

function fibonacci(n) {
	if (n === 0 || n === 1) {
		return 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

const memo = [];

function memoFibonacci(n) {
	if (n === 0 || n === 1) {
		return 1;
	} else if (!memo[n]) {
		memo[n] = memoFibonacci(n - 1) + memoFibonacci(n - 2);
	}
	return memo[n];
}