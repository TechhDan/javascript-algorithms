function quickSort(array, low, high) {
	if (low < high) {
		// Partition Index
		let pi = partition(array, low, high);

		quickSort(array, low, pi - 1);
		quickSort(array, pi + 1, high);
	}
}

function partition(array, low, high) {
	let pivot = array[high];

	let i = low - 1;

	for (let j = low; j <= high - 1; j++) {
		if (array[j] < pivot) {
			i++;
			swap(array, i, j);
		}
	}
	swap(array, i + 1, high);
	return (i + 1);
}

function swap(array, i, j) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}


let array = [2, 7, 1, 6, 5, 4, 3];

quickSort(array, 0, array.length - 1);

console.log(array);
