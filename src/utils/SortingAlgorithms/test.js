const sortFunction = require('./sortFunction');

let arr = [1,3,4,5,3, 6, 4, 3, 2, 5, 1, 6, 22, 45, 21, 1, 1, 1, 1, 2, 2, 34, 5,6, 5];

let val = [];

const sortIt = sortFunction('Merge Sort');

const generator = sortIt(arr);

do{
	val = generator.next().value;
	if (val)
		console.log(val);
}while (val);
