export default function iterateThroughObject(reportWithIterator) {
	let result = "";

	for (let staff of reportWithIterator) {
		if (result.length == 0) result = staff;
		else {
			result = result + " | " + staff;
		}
	}

	return result;
}
