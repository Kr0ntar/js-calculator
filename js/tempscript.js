var num = "";
var tempnum = 0;
var stored_base = [];
var total = "";
var store_ops = "";
var ops_output = document.getElementById('ops-screen');
var output = document.getElementById('final-screen');
var firstNum = "";
var secondNum = "";

var save_nums = [];
var save_ops = [];

var sum = 0;



/* getting input from the buttons */
function one() {
	if(total !== "") {
		save_nums = [];
		save_ops = [];
		total = "";
		num += Number('1');
		output.value = num;	
	} else {
		num += Number('1');
		output.value = num;
	}
}

function two() {
	if(total !== "") {
		save_nums = [];
		save_ops = [];
		total = "";
		num += Number('2');
		output.value = num;	
	} else {
		num += Number('2');
		output.value = num;
	}
}

function three() {
	if(total !== "") {
		save_nums = [];
		save_ops = [];
		total = "";
		num += Number('3');
		output.value = num;	
	} else {
		num += Number('3');
		output.value = num;
	}
}

function four() {
	if(total !== "") {
		save_nums = [];
		save_ops = [];
		total = "";
		num += Number('4');
		output.value = num;	
	} else {
		num += Number('4');
		output.value = num;
	}
}

function five() {
	if(total !== "") {
		save_nums = [];
		save_ops = [];
		total = "";
		num += Number('5');
		output.value = num;	
	} else {
		num += Number('5');
		output.value = num;
	}
}

function six() {
	if(total !== "") {
		save_nums = [];
		save_ops = [];
		total = "";
		num += Number('6');
		output.value = num;	
	} else {
		num += Number('6');
		output.value = num;
	}
}

function seven() {
	if(total !== "") {
		save_nums = [];
		save_ops = [];
		total = "";
		num += Number('7');
		output.value = num;	
	} else {
		num += Number('7');
		output.value = num;
	}
}

function eight() {
	if(total !== "") {
		save_nums = [];
		save_ops = [];
		total = "";
		num += Number('8');
		output.value = num;	
	} else {
		num += Number('8');
		output.value = num;
	}
}

function nine() {
	if(total !== "") {
		save_nums = [];
		save_ops = [];
		total = "";
		num += Number('9');
		output.value = num;	
	} else {
		num += Number('9');
		output.value = num;
	}
}

function zero() {
	if(total !== "") {
		save_nums = [];
		save_ops = [];
		total = "";
		num += Number('1');
		output.value = num;
		if(output.value !== "0") {
			num += Number('0');		
			output.value = num;
		} else {
			num = num;
		}		
	} else {
		if(output.value !== "0") {
			num += Number('0');		
			output.value = num;
		} else {
			num = num;
		}
	}	
}

function point() {
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
}


/* operations */
// function display(downVal, upVal) {
// 	output.value = downVal;
// 	ops_output.value = upVal;
// }

function clr() { 
	total = "", store_ops = "", tempnum = 0, num = "", output.value = "0", ops_output.value = "", save_nums = [], save_ops = [];
}

function plus() {
	if(total !== "") {
		save_nums = [];
		// save_nums[0] = total;
		save_nums.push(total);
	} else {
		save_nums.push(parseFloat(output.value));	
	}
	// save_ops = [];
	// save_ops.push("plus");
	store_ops = "plus";
	num = "";
}

function times() {
	if(total !== "") {
		save_nums = [];
		// save_nums[0] = total;
		save_nums.push(total);
	} else {
		save_nums.push(parseFloat(output.value));	
	}
	// save_ops = [];
	// save_ops.push("times");
	store_ops = "times";
	num = "";
}

function ans() {
	switch(store_ops) {
		case 'plus':
			save_nums.push(parseFloat(output.value));
			if(save_nums.length == 1) {
				tempnum = save_nums[0];
				save_nums[1] = tempnum;
				total = save_nums[0] + save_nums[0];
			} else {
				total = save_nums[0] + save_nums[1];
			}
			output.value = total;
			tempnum = save_nums[1];
			save_nums = [];
			// save_nums[0] = total;
			save_nums.push(total);
			// save_nums[1] = tempnum;
			save_nums.push(tempnum);
			num = "";
		break;

		case 'times':
			save_nums.push(parseFloat(output.value));
			if(save_nums.length == 1) {
				total = save_nums[0] * save_nums[0];
			} else {
				total = save_nums[0] * save_nums[1];
			}
			output.value = total;
			tempnum = save_nums[1];
			save_nums = [];
			save_nums[0] = total;
			save_nums[1] = tempnum;
			num = "";
		break;
	}
}

