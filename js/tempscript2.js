/* initialize button and number variables */
var num = "";
var tempnum = "";
var ops_output = document.getElementById('ops-screen');
var output = document.getElementById('final-screen');
var expression = [];
var oneBtn = document.querySelector('#one-button');
var twoBtn = document.querySelector('#two-button');
var threeBtn = document.querySelector('#three-button');
var fourBtn = document.querySelector('#four-button');
var fiveBtn = document.querySelector('#five-button');
var sixBtn = document.querySelector('#six-button');
var sevenBtn = document.querySelector('#seven-button');
var eightBtn = document.querySelector('#eight-button');
var nineBtn = document.querySelector('#nine-button');
var zeroBtn = document.querySelector('#zero-button');
var pointBtn = document.querySelector('#point-button');


/* getting input from the buttons */
oneBtn.addEventListener('click', function() { inputHandler('1'); });
twoBtn.addEventListener('click', function() { inputHandler('2'); });
threeBtn.addEventListener('click', function() { inputHandler('3'); });
fourBtn.addEventListener('click', function() { inputHandler('4'); });
fiveBtn.addEventListener('click', function() { inputHandler('5'); });
sixBtn.addEventListener('click', function() { inputHandler('6'); });
sevenBtn.addEventListener('click', function() { inputHandler('7'); });
eightBtn.addEventListener('click', function() { inputHandler('8'); });
nineBtn.addEventListener('click', function() { inputHandler('9'); });
zeroBtn.addEventListener('click', function() {
	tempnum = "";
	if(output.value !== "0") {
		num += Number('0');		
		output.value = num;
	} else {
		num = num;
	}
});

pointBtn.addEventListener('click', function() {
	var tempStr = output.value;
	var tempArr = tempStr.split('');
	var val = '.';

	if(tempArr.indexOf(val) == -1 && tempStr != "0") {
		num += '.';
		output.value = num;
	} else if(tempArr.indexOf(val) == -1 && tempStr == "0") {
		num += "0.";
		output.value = num;
	} else {
		num = num;
	}
});

function inputHandler(num_input) {
	tempnum = "";
	num += Number(num_input);
	output.value = num;	
}

// function one() {
// 	tempnum = "";
// 	num += Number('1');
// 	output.value = num;
// }

// function two() {
// 	tempnum = "";
// 	num += Number('2');
// 	output.value = num;
// }

// function three() {
// 	tempnum = "";
// 	num += Number('3');
// 	output.value = num;
// }

// function four() {
// 	tempnum = "";
// 	num += Number('4');
// 	output.value = num;
// }

// function five() {
// 	tempnum = "";
// 	num += Number('5');
// 	output.value = num;
// }

// function six() {
// 	tempnum = "";
// 	num += Number('6');
// 	output.value = num;
// }

// function seven() {
// 	tempnum = "";
// 	num += Number('7');
// 	output.value = num;
// }

// function eight() {
// 	tempnum = "";
// 	num += Number('8');
// 	output.value = num;
// }

// function nine() {
// 	tempnum = "";
// 	num += Number('9');
// 	output.value = num;
// }

// function zero() {
// 	tempnum = "";
// 	if(output.value !== "0") {
// 		num += Number('0');		
// 		output.value = num;
// 	} else {
// 		num = num;
// 	}
// }

// function point() {
// 	var tempStr = output.value;
// 	var tempArr = tempStr.split('');
// 	var val = '.';

// 	if(tempArr.indexOf(val) == -1 && tempStr != "0") {
// 		num += '.';
// 		output.value = num;
// 	} else if(tempArr.indexOf(val) == -1 && tempStr == "0") {
// 		num += "0.";
// 		output.value = num;
// 	} else {
// 		num = num;
// 	}
// }


/* operations */
function clr() { 
	num = "", output.value = "0", ops_output.value = "", expression = [];
}

function clrEnt() {
	if(expression[expression.length - 1] == '+') {
		output.value = '0';
		ops_output.value = expression.join('');
	} else {
		expression.pop();
		output.value = '0';
		ops_output.value = expression.join('');
	}
}

function plus() {
	console.log(expression);
	console.log(tempnum);
	if(tempnum !== "") {
		expression.push(tempnum);
		expression.push('+');
		tempnum = "";
	}

	if(expression.length == 0 && num == "") {
		return false;
	}

	if(expression.length >= 0 && num !== "") {
		expression.push(parseFloat(num));
		expression.push('+');
		console.log(expression);
	}
	num = "";
	ops_output.value = expression.join('');
}

function minus() {
	console.log(expression);
	console.log(tempnum);
	if(tempnum !== "") {
		expression.push(tempnum);
		expression.push('-');
		tempnum = "";
	}

	if(expression.length == 0 && num == "") {
		return false;
	}

	if(expression.length >= 0 && num !== "") {
		expression.push(parseFloat(num));
		expression.push('-');
		console.log(expression);
	}
	num = "";
	ops_output.value = expression.join('');
}

function times() {
	console.log(expression);
	console.log(tempnum);
	if(tempnum !== "") {
		expression.push(tempnum);
		expression.push('*');
		tempnum = "";
	}

	if(expression.length == 0 && num == "") {
		return false;
	}

	if(expression.length >= 0 && num !== "") {
		expression.push(parseFloat(num));
		expression.push('*');
		console.log(expression);
	}
	num = "";
	ops_output.value = expression.join('');
}

function divide() {
	console.log(expression);
	console.log(tempnum);
	if(tempnum !== "") {
		expression.push(tempnum);
		expression.push('/');
		tempnum = "";
	}

	if(expression.length == 0 && num == "") {
		return false;
	}

	if(expression.length >= 0 && num !== "") {
		expression.push(parseFloat(num));
		expression.push('/');
		console.log(expression);
	}
	num = "";
	ops_output.value = expression.join('');
}

function ans() {
	expression.push(parseFloat(output.value));
	var strEval = expression.join('');
	var answer = eval(strEval);
	console.log(expression);
	tempnum = answer;
	output.value = answer;
	ops_output.value = output.value;
	expression = [];
	num = "";
	console.log(tempnum);
}

