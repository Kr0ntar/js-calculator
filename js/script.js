
var num = "";
var tempnum = "";
var stored_base = [];
var total = 0;
var store_ops = [];
var output = document.getElementById('screen');


/* getting input from the buttons */
function one() {
	stored_base = [];
	num += Number('1');
	display();
}

function two() {
	stored_base = [];
	num += Number('2');
	display();	
}

function three() {
	stored_base = [];
	num += Number('3');
	display();	
}

function four() {
	stored_base = [];
	num += Number('4');
	display();	
}

function five() {
	stored_base = [];
	num += Number('5');
	display();	
}

function six() {
	stored_base = [];
	num += Number('6');
	display();	
}

function seven() {
	stored_base = [];
	num += Number('7');
	display();	
}

function eight() {
	stored_base = [];
	num += Number('8');
	display();	
}

function nine() {
	stored_base = [];
	num += Number('9');
	display();	
}

function zero() {
	stored_base = [];
	num += Number('0');
	display();	
}


/* operations */
function plus() {
	if(tempnum !== "") {
		stored_base.push(tempnum);
		num = Number(tempnum) + Number(stored_base[0]);
		tempnum = num;
		num = "";
		output.value = tempnum;

	} else {
		tempnum = num;
		num = "";
		store_ops.push("plus");
	}
}

function minus() {
	if(tempnum !== "") {
		stored_base.push(tempnum);
		num = Number(tempnum) - Number(stored_base[0]);
		tempnum = num;
		num = "";
		output.value = tempnum;

	} else {
		tempnum = num;
		num = "";
		store_ops.push("minus");
	}
}

function times() {
	if(tempnum !== "") {
		stored_base.push(tempnum);
		num = Number(tempnum) * Number(stored_base[0]);
		tempnum = num;
		num = "";
		output.value = tempnum;

	} else {
		tempnum = num;
		num = "";
		store_ops.push("times");
	}
}

function divide() {
	if(tempnum !== "") {
		stored_base.push(tempnum);
		num = Number(tempnum) / Number(stored_base[0]);
		tempnum = num;
		num = "";
		output.value = tempnum;

	} else {
		tempnum = num;
		num = "";
		store_ops.push("divide");
	}
}

function display() {
	output.value = num;
	//console.log(num);
}

function ans() {
	switch(store_ops[store_ops.length-1]) {
		case 'plus':
			if(!total) {	
				total = Number(tempnum) + Number(num);
			} else {
				total = total + Number(num);
			}
			break;
		case 'minus':
			if(!total) {
				total = Number(tempnum) - Number(num);
			} else {
				total = total - Number(num);
			}
			break;
		case 'times':
			if(!total) {
				total = Number(tempnum) * Number(num);
			} else {
				total = total * Number(num);
			}
			break;
		case 'divide':
			// if(Number(num) == 0) {
			// 		output.value = "ERROR!";
			// 		//cleanUp();
			// 		//xxx();
			// }
			if(!total) {
				total = Number(tempnum) / Number(num);
			} else {
				total = total / Number(num);
			}
			break;	
	}
	output.value = total;
	//console.log(total);
	tempnum="";
	num="";
	
}

function xxx() { /* clear is a reserved word? */
	total = 0, store_ops = [], tempnum = "", num = "";
	output.value = "";
	//alert("clear");
}

function cleanUp() {
	total = 0, store_ops = [], tempnum = "", num = "";
}