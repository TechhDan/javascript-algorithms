/**
 * Recursive binary search
 */
function binarySearch(array, search) {

	let low = array[0],
		high = array[array.length - 1];

	if (low > array[array.length - 1]) {
		return false;
	}


}

let result = binarySearch(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	9
);

console.log(result);