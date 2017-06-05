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
var plusBtn = document.querySelector('#plus-button');
var minusBtn = document.querySelector('#minus-button');
var timesBtn = document.querySelector('#times-button');
var divideBtn = document.querySelector('#divide-button');
var equalBtn = document.querySelector('#equal-button');
var clearBtn = document.querySelector('#clear-button');
var clrEntBtn = document.querySelector('#clear-entry-button');
var signBtn = document.querySelector('#sign-button');


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

signBtn.addEventListener('click', function() {
	if(tempnum !== "") {
		if(parseFloat(tempnum) <= -1) {
			tempnum = Math.abs(tempnum);
			output.value = tempnum;
		} else if(tempnum == "0") {
			tempnum = tempnum;
			output.value = tempnum;
		} else {
			tempnum = "-" + tempnum;
			output.value = tempnum;
		}
	}

	if(parseFloat(num) <= -1) {
		num = Math.abs(num);
		output.value = num;
	} else if(num == "" || num == "0") {
		num = num;
	}
	 else {
		num = "-" + num;
		output.value = num;
	}

	if(num == "" && output.value !== "") {
		return;		
	}

});

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


/* operations & functions */
plusBtn.addEventListener('click', function() { opsHandler('+'); });
minusBtn.addEventListener('click', function() { opsHandler('-'); });
timesBtn.addEventListener('click', function() { opsHandler('*'); });
divideBtn.addEventListener('click', function() { opsHandler('/'); });

equalBtn.addEventListener('click', function() {
	if(output.value === "E") {
		return;
	}
	expression.push(parseFloat(output.value));
	var strEval = expression.join(' ');
	var answer = eval(strEval);
	if(answer == Infinity || answer > 999999999999999 ) {
		answer = "E";
	} else {
		answer = answer;
	}
	tempnum = answer;
	output.value = answer;
	ops_output.value = "";
	expression = [];
	num = "";
});

clearBtn.addEventListener('click', function() {
	num = "", tempnum = "", output.value = "0", ops_output.value = "", expression = [];
});

clrEntBtn.addEventListener('click', function() {
	tempnum = "";
	num = "";
	output.value = '0';
	ops_output.value = expression.join(' ');
});

function inputHandler(num_input) {
	tempnum = "";
	num += Number(num_input);
	output.value = num;	
}

function opsHandler(ops_input) {
	if(tempnum !== "") {
		expression.push(tempnum);
		expression.push(ops_input);
		tempnum = "";
	}

	if(expression.length == 0 && num == "") {
		expression.push('0');
		expression.push(ops_input);
		ops_output.value = expression.join(' ');
	}

	if(expression.length >= 0 && num !== "") {
		expression.push(parseFloat(output.value));
		expression.push(ops_input);
	}

	num = "";
	ops_output.value = expression.join(' ');
}