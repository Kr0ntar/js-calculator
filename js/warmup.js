/*Warm Ups*/

function my_max(arr) {
	var temp = 0;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] < arr[i+1]) {
			arr[i] = arr[i];
		} else {
			temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
		}
	}
	return arr[arr.length-1];
}

console.log(my_max([5,4,3,2,1]));


function my_max(arr) {
	arr.sort(compareNums);

	function compareNums(a,b) {
		if(a < b) {
			return -1;
		} else if(a === b) {
			return 0;
		} else {
			return 1;
		}
	}

	return arr[arr.length-1];
}

console.log(my_max([5,4,10,2,1]));



function vowel_count(str) {
	counter = 0;
	for(var i = 0; i < str.length; i++) {
		if(str.charAt(i).match(/[AEIOUaeiou]/g)) {
			counter++;
		} else {
			counter;
		}
	}
	return counter;
}

console.log(vowel_count("Hannah"));

function reverse(str) {
	arr = str.split('');
	str = arr.reverse().join('');
	return str;
}

console.log(reverse("Jose Leonard C. Rico"));