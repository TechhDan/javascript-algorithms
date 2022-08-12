/**
 * Recursive binary search
 */
function recursiveBinarySearch(array, search) {
	let low = 0,
		high = array.length - 1;

	if (low > high) {
		return false;
	} else {
		let middle = Math.floor((low + high) / 2);

		if (search === array[middle]) {
			return true;
		} else if (search > array[middle]) {
			return recursiveBinarySearch(array.splice(middle + 1, array.length - 1), search);
		} else {
			return recursiveBinarySearch(array.splice(0, middle), search);
		}
	}
}

let result = recursiveBinarySearch(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	12
);

console.log(result);
