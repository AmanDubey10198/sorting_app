let ans_arr = [];

const function_add = (num) => {
	let tmp = [];
	for(let i=0; i<num.length; i++){
		tmp.push(num[i]);
	}
	ans_arr.push(tmp);
}

function merge(left,ls,le, right, rs, re){
	let i = ls;
	let j = rs;
	
	let newArr = [];
	let k = 0;
	
	while (k<ls){
		newArr.push(left[k]);
		k++;
	}
	
	while ((i<=le) && (j<=re)){
		if(left[i]<right[j]){
			newArr.push(left[i]);
			i++;
		}else{
			newArr.push(right[j]);
			j++;
		}
		k++;
	}
	
	while(i<=le){
		newArr.push(left[i]);
		i++;
		k++;
	}
	
	while(j<=re){
		newArr.push(right[j]);
		j++;
		k++;
	}
	
	while (k<left.length){
		newArr.push(left[i]);
		i++;
		k++;
	}
	function_add(newArr);
	
	return newArr;
}

function mergesort(nums, l, r){
	if(r-l>0){
		const mid = Math.floor((l+r)/2);
		
		const left = mergesort(nums, l, mid);
		const right = mergesort(nums, mid+1, r);
		
		const arr = merge(left,l, mid, right, mid+1, r);
		
		return arr;
	}else{
		return nums;
	}
}

function* MergeSort(arry){
	mergesort(arry, 0, arry.length-1);
	
	for(let i=0; i<ans_arr.length; i++){
		
		yield ans_arr[i];
	}        
}

module.exports = {MergeSort};
