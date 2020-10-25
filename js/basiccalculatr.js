function calculator(num1,operator,num2) {
	return {
		'+': num1 + num2,
		'-': num1 - num2,
		'*': num1 * num2,
		'/': num2 ? num1 / num2 : 'Cannot divide by 0!'
	}[operator]
}


const calculator = (m,o,n) => o+n === "/0" ? 'Cannot divide by 0!' : eval(m+o+n);
