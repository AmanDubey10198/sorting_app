let ans_arr = [];

const function_add = (num) => {
	let tmp = [];
	for(let i=0; i<num.length; i++){
		tmp.push(num[i]);
	}
	ans_arr.push(tmp);
}

function find_partition(arr, l, r){
	
	let pos = r;
	
	let i = l;
	let j = l;
	
	while (i<=r){
		if(arr[i]<arr[pos] ){
			const tmp = arr[j];
			arr[j] = arr[i];
			arr[i] = tmp;
			j++;
		}
		function_add(arr); //pushing
		i++;
	}
	
	const tmp = arr[j];
	arr[j] = arr[pos];
	arr[pos] = tmp;
	
	function_add(arr); //pushing
	
	return j;
}

function quicksort(nums,l, r){
	if(l<r){
		const partition = find_partition(nums, l, r);
		
		quicksort(nums, l, partition-1);
		quicksort(nums, partition+1, r);
	}
}


function* QuickSort(arry){

	quicksort(arry, 0, arry.length-1);
	
	for(let i=0; i<ans_arr.length; i++){
		
		//await sleep();
		yield ans_arr[i];
	}
        
}

module.exports = {QuickSort};
