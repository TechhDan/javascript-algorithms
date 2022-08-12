function merge(left, right) {
	let arr = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			arr.push(left.shift());
		} else {
			arr.push(right.shift());
		}
	}
	return [...arr, ...left, ...right];
}

function mergeSort(array) {
	const half = Math.floor(array.length / 2);

	if (array.length < 2) {
		return array;
	}

	const left = array.splice(0, half);
	return merge(mergeSort(left) , mergeSort(array));
}

let array = [6, 4, 5, 3, 1, 2];

//console.log(array.length);

let result = mergeSort(array);

//console.log(result);

